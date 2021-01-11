package com.xml.team18.poverenik.service;

import com.xml.team18.poverenik.exceptions.ResourceNotFoundException;
import com.xml.team18.poverenik.factory.ResenjeFactory;
import com.xml.team18.poverenik.factory.ZalbaCutanjeFactory;
import com.xml.team18.poverenik.factory.ZalbaNaOdlukuFactory;
import com.xml.team18.poverenik.jaxb.JaxB;
import com.xml.team18.poverenik.model.resenje.Resenje;
import com.xml.team18.poverenik.model.zalba.na.odluku.Zalba;
import com.xml.team18.poverenik.repository.ZalbaCutanjeRepository;
import com.xml.team18.poverenik.repository.ZalbaNaOdlukuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.JAXBException;
import javax.xml.namespace.QName;
import java.util.UUID;

@Service
public class ZalbaNaOdlukuService implements PoverenikService<Zalba> {
    private final ZalbaNaOdlukuRepository repository;
    private final JaxB jaxB;

    @Autowired
    public ZalbaNaOdlukuService(ZalbaNaOdlukuRepository zalbaNaOdlukuRepository,
                                JaxB jaxB) {
        this.repository = zalbaNaOdlukuRepository;
        this.jaxB = jaxB;

    }

    public String save(String zalbaXml) throws JAXBException {
        Zalba z = (Zalba) ((JAXBElement<?>) this.jaxB.unmarshall(zalbaXml, Zalba.class, ZalbaNaOdlukuFactory.class)).getValue();
        z = this.repository.save(z);
        JAXBElement<Zalba> element = new JAXBElement<Zalba>(QName.valueOf("zalba"), Zalba.class, z);
        return jaxB.marshall(element, Zalba.class, ZalbaNaOdlukuFactory.class);
    }

    @Override
    public String getById(String id) throws ResourceNotFoundException, JAXBException {
        Zalba found = repository.findById(UUID.fromString(id));
        JAXBElement<Zalba> element = new JAXBElement<Zalba>(QName.valueOf("zalba"), Zalba.class, found);
        return jaxB.marshall(element, Zalba.class, ZalbaNaOdlukuFactory.class);
    }
}
