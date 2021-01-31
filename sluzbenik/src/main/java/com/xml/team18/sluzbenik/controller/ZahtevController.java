package com.xml.team18.sluzbenik.controller;

import com.xml.team18.sluzbenik.dto.EntityList;
import com.xml.team18.sluzbenik.exceptions.ResourceNotFoundException;
import com.xml.team18.sluzbenik.model.zahtev.Zahtev;
import com.xml.team18.sluzbenik.service.ZahtevService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.bind.JAXBException;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(
        path = "/api/zahtevi",
        consumes = MediaType.APPLICATION_XML_VALUE,
        produces = MediaType.APPLICATION_XML_VALUE)
public class ZahtevController {

    private final ZahtevService service;

    @Autowired
    public ZahtevController(ZahtevService service) {
        this.service = service;
    }

    @PostMapping
    ResponseEntity<String> addZahtev(@RequestBody Zahtev zahtev) throws JAXBException {
        return ResponseEntity.created(URI.create(this.service.save(zahtev))).build();
    }

    @GetMapping(path = "/{id}")
    ResponseEntity<String> getById(@PathVariable String id) throws ResourceNotFoundException, JAXBException {
        return ResponseEntity.ok(service.getById(id));
    }

    @GetMapping(path = "/korisnik/{korisnikId}")
    ResponseEntity<EntityList<Zahtev>> getAll(@PathVariable String korisnikId) throws Exception {
        return ResponseEntity.ok(new EntityList<Zahtev>(service.getAll(korisnikId)));
    }
}