package com.xml.team18.sluzbenik.controller;

import com.xml.team18.sluzbenik.dto.EntityList;
import com.xml.team18.sluzbenik.exceptions.ResourceNotFoundException;
import com.xml.team18.sluzbenik.model.obavestenje.Obavestenje;
import com.xml.team18.sluzbenik.model.zahtev.Zahtev;
import com.xml.team18.sluzbenik.service.ObavestenjeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.bind.JAXBException;
import java.io.FileNotFoundException;
import java.net.URI;

@RestController
@RequestMapping(
        path = "/api/obavestenja",
        consumes = MediaType.APPLICATION_XML_VALUE,
        produces = MediaType.APPLICATION_XML_VALUE)
public class ObavestenjeController {

    private final ObavestenjeService service;

    @Autowired
    public ObavestenjeController(ObavestenjeService service) {
        this.service = service;
    }

    @PostMapping
    ResponseEntity<String> addObavestenje(@RequestBody Obavestenje obavestenje) throws Exception {
        return ResponseEntity.created(URI.create(this.service.save(obavestenje))).build();
    }

    @GetMapping(path = "/{id}")
    ResponseEntity<Obavestenje> getById(@PathVariable String id) throws ResourceNotFoundException {
        return ResponseEntity.ok(service.getById(id));
    }

    @GetMapping(path = "/korisnik/{korisnikId}")
    ResponseEntity<EntityList<Obavestenje>> getAllByKorisnikId(@PathVariable String korisnikId) throws Exception {
        return ResponseEntity.ok(
                new EntityList<>(service.getAllByKorisnikId(korisnikId)));
    }

    @GetMapping(path = "/pretraga")
    ResponseEntity<EntityList<Obavestenje>> pretraga(@RequestParam String upit) throws Exception {
        return ResponseEntity.ok(new EntityList<>(service.pretraga(upit)));
    }

    @GetMapping(path = "/napredna-pretraga")
    ResponseEntity<EntityList<Obavestenje>> naprednaPretraga(@RequestParam String upit) throws Exception {
        return ResponseEntity.ok(new EntityList<>(service.naprednaPretraga(upit)));
    }

    @GetMapping
    ResponseEntity<EntityList<Obavestenje>> getAll() throws Exception {
        return ResponseEntity.ok(new EntityList<>(service.getAll()));
    }

    @PostMapping(value = "/generate-pdf/{id}")
    public ResponseEntity<String> generatePdf(@PathVariable String id) {
        try {
            String path = service.generatePdf(id);
            return ResponseEntity.ok(path);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @PostMapping(value = "/generate-xhtml/{id}")
    public ResponseEntity<String> generateXhtml(@PathVariable String id) {
        try {
            String path = service.generateXhtml(id);
            return ResponseEntity.ok(path);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @PostMapping(value = "/generate-json/{id}")
    public ResponseEntity<String> getJsonById(@PathVariable String id) throws FileNotFoundException {
        return ResponseEntity.ok(service.getJsonById(id));
    }

    @PostMapping(value = "/generate-rdf/{id}")
    public ResponseEntity<String> getRdfById(@PathVariable String id) throws FileNotFoundException {
        return ResponseEntity.ok(service.getRdfById(id));
    }
}
