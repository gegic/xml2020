package com.xml.team18.sluzbenik.repository;

import com.xml.team18.sluzbenik.exceptions.ResourceNotFoundException;
import com.xml.team18.sluzbenik.exist.ExistManager;
import com.xml.team18.sluzbenik.factory.ZahtevFactory;
import com.xml.team18.sluzbenik.fuseki.FusekiWriter;
import com.xml.team18.sluzbenik.fuseki.MetadataExtractor;
import com.xml.team18.sluzbenik.fuseki.SparqlUtil;
import com.xml.team18.sluzbenik.jaxb.JaxB;
import com.xml.team18.sluzbenik.model.korisnik.Korisnik;
import com.xml.team18.sluzbenik.model.zahtev.Zahtev;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Repository;
import org.xmldb.api.base.Resource;
import org.xmldb.api.base.ResourceIterator;
import org.xmldb.api.base.XMLDBException;
import org.xmldb.api.modules.XMLResource;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.JAXBException;
import javax.xml.namespace.QName;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@Repository
public class ZahtevRepository {
    private final String collectionId = "/db/zahtevi";

    private final ExistManager existManager;
    private final MetadataExtractor metadataExtractor;
    private final FusekiWriter fusekiWriter;
    private final JaxB jaxB;

    @Autowired
    public ZahtevRepository(ExistManager existManager,
                            MetadataExtractor metadataExtractor,
                            FusekiWriter fusekiWriter,
                            JaxB jaxB) {
        this.existManager = existManager;
        this.metadataExtractor = metadataExtractor;
        this.fusekiWriter = fusekiWriter;
        this.jaxB = jaxB;
    }

    public Zahtev save(Zahtev z) {
        try {
            String id = z.getId();
            if (id == null || id.isEmpty()) {
                id = UUID.randomUUID().toString();
                z.setId(id);
            }
            z.setVocab("http://team14.xml.com/rdf/zahtevi/predicate/");
            z.setAbout("http://team14.xml.com/rdf/zahtevi/" + id);
            z.getOrgan().getAdresa().getMesto().setProperty("pred:mesto-ustanove");
//            z.getOrgan().getAdresa().getMesto().setDatatype("xs:string");
            z.getOrgan().getNaziv().setProperty("pred:naziv-ustanove");
//            z.getOrgan().getNaziv().setDatatype("xs:string");
            z.getOpisZahteva().setProperty("pred:opis-zahteva");
//            z.getOpisZahteva().setDatatype("xs:string");
            z.getMesto().setProperty("pred:mesto-zahteva");
//            z.getMesto().setDatatype("xs:string");
            z.getDatum().setProperty("pred:datum-zahteva");
//            z.getMesto().setDatatype("xs:date");
            z.getTrazilacInformacije().getAdresa().getMesto().setProperty("pred:mesto-trazioca");
//            z.getTrazilacInformacije().getAdresa().getMesto().setDatatype("xs:string");
            z.getTrazilacInformacije().getAdresa().getUlica().setProperty("pred:ulica-trazioca");
//            z.getTrazilacInformacije().getAdresa().getUlica().setDatatype("xs:string");
            z.getTrazilacInformacije().getImePrezime().setProperty("pred:ime-prezime-trazioca");
//            z.getTrazilacInformacije().getImePrezime().setDatatype("xs:string");

            JAXBElement<Zahtev> element = new JAXBElement<Zahtev>(QName.valueOf("zahtev"), Zahtev.class, z);
            String rawXml = jaxB.marshall(element, Zahtev.class, ZahtevFactory.class);
            this.existManager.saveRaw(collectionId, id, rawXml);
            String rdf = this.metadataExtractor.extractMetadata(rawXml);
            this.fusekiWriter.saveRDF(rdf, "zahtevi");
            XMLResource found = this.existManager.read(collectionId, id);
            String contentFound = found.getContent().toString();
            return (Zahtev) ((JAXBElement<?>) jaxB
                    .unmarshall(contentFound, Zahtev.class, ZahtevFactory.class))
                    .getValue();
        } catch (Exception e) {
            System.out.println("Not saved due to");
            System.err.println(e.getMessage());
            System.err.println(Arrays.toString(e.getStackTrace()));
            return null;
        }
    }

    public Zahtev findById(String id) throws ResourceNotFoundException {
        XMLResource found = this.existManager.read(collectionId, id);
        String contentFound;
        try {
            contentFound = found.getContent().toString();
            return (Zahtev) ((JAXBElement<?>) jaxB
                    .unmarshall(contentFound, Zahtev.class, ZahtevFactory.class))
                    .getValue();
        } catch (XMLDBException | JAXBException e) {
            e.printStackTrace();
            return null;
        }
    }

    public List<Zahtev> getAll() throws Exception {
        return this.existManager.readAll(collectionId).stream().map(str ->
                {
                    try {
                        return (Zahtev) ((JAXBElement<?>) jaxB
                                .unmarshall(str, Zahtev.class, ZahtevFactory.class))
                                .getValue();
                    } catch (JAXBException e) {
                        e.printStackTrace();
                        return null;
                    }
                }
        ).collect(Collectors.toList());
    }

    public int count() {
        try {
            return existManager.count(collectionId);
        } catch (Exception e) {
            e.printStackTrace();
            return -1;
        }
    }

    public List<Zahtev> getAllByKorisnikId(String id) throws Exception {
        String query = String.format("/zahtev[trazilac-informacije/@id = '%s']", id);
        return this.getByQuery(query);
    }

    public List<Zahtev> getNeodgovoreniByKorisnikId(String id) throws Exception {
        String query = String.format("/zahtev[trazilac-informacije/@id = '%s' and @prihvatanje = 'neodgovoren']", id);
        return this.getByQuery(query);
    }

    public List<Zahtev> getOdbijeniByKorisnikId(String id) throws Exception {
        String query = String.format("/zahtev[trazilac-informacije/@id = '%s' and @prihvatanje = 'odbijen']", id);
        return this.getByQuery(query);
    }

    public List<Zahtev> getAllNeodgovoreni() throws Exception {
        String query = "/zahtev[@prihvatanje = 'neodgovoren']";
        return this.getByQuery(query);
    }

    public int count(String prihvatanje) {
        String query = String.format("/zahtev[@prihvatanje = '%s']", prihvatanje);
        try {
            return this.getByQuery(query).size();
        } catch (Exception e) {
            return 0;
        }
    }

    public List<Zahtev> pretraga(String tekst) throws Exception {
        String query = String.format("/zahtev[descendant::*[text()[contains(lower-case(.), '%s')]]]", tekst.toLowerCase());
        return this.getByQuery(query);
    }

    public List<Zahtev> naprednaPretraga(String upit) {
        Pattern p = Pattern.compile("([\\w:\\-]+)\\s+eq\\s+\"([\\w\\d \\-]+)\"");
        Matcher m = p.matcher(upit);
        String prvaZamena = null;
        if (m.find()) {
            prvaZamena = m.replaceAll("$1 \"$2\"^^<http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral>");  // number 46
        } else {
            return new ArrayList<>();
        }
        p = Pattern.compile("\"([\\w\\d]{8}(-[\\w\\d]{4}){3}-[\\w\\d]{12})\"\\^\\^<http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral>");
        m = p.matcher(prvaZamena);
        String drugaZamena = null;
        if (m.find()) {
            drugaZamena = m.replaceAll("\"$1\"^^<http://www.w3.org/2000/01/rdf-schema#Literal>");
        } else {
            drugaZamena = prvaZamena;
        }
        String filterQuery = drugaZamena.replaceAll(" and ", "; ").replaceAll(" or ", "} union { ?s ");
        String whereQuery = String.format("{?s %s }", filterQuery);
        List<String> ids = this.fusekiWriter.getIdsForString("zahtevi", whereQuery);
        try {
            return this.getByIds(ids);
        } catch (Exception e) {
            return new ArrayList<>();
        }
    }

    public List<Zahtev> getByIds(List<String> ids) throws Exception {
        String idsJoined = ids.stream()
                .map(id -> id.replace("http://team14.xml.com/rdf/zahtevi/", ""))
                .collect(Collectors.joining(" "));
        String query = String.format("/zahtev[contains('%s', @id)]", idsJoined);
        return this.getByQuery(query);
    }

    private List<Zahtev> getByQuery(String query) throws Exception {
        List<Zahtev> zahtevi = new ArrayList<>();
        ResourceIterator iterator = this.existManager.query(collectionId, query).getIterator();

        while(iterator.hasMoreResources()) {
            Resource r = iterator.nextResource();
            zahtevi.add((Zahtev) ((JAXBElement<?>) jaxB
                    .unmarshall(r.getContent().toString(), Zahtev.class, ZahtevFactory.class))
                    .getValue());
        }
        return zahtevi;
    }

    public String getJsonById(String id) throws FileNotFoundException {
        return this.fusekiWriter.getMetaDataByIdAsJSON("zahtevi", id);
    }

    public String getRdfById(String id) throws FileNotFoundException {
        return this.fusekiWriter.getDocumentMetaDataByIdAsRDF("zahtevi", id);
    }
}
