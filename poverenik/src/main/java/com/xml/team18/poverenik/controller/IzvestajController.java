package com.xml.team18.poverenik.controller;


import com.xml.team18.poverenik.dto.EntityList;
import com.xml.team18.poverenik.model.izvestaj.GodisnjaStatistika;
import com.xml.team18.poverenik.model.izvestaj.Izvestaj;
import com.xml.team18.poverenik.service.IzvestajService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping(
        path = "/api/izvestaji",
        consumes = MediaType.APPLICATION_XML_VALUE,
        produces = MediaType.APPLICATION_XML_VALUE)
public class IzvestajController {

    private final IzvestajService service;

    @Autowired
    public IzvestajController(IzvestajService service) {
        this.service = service;
    }

    @GetMapping(path = "/pretraga")
    ResponseEntity<EntityList<Izvestaj>> pretraga(@RequestParam String upit) throws Exception {
        return ResponseEntity.ok(new EntityList<>(service.pretraga(upit)));
    }

    @GetMapping(path = "/{id}")
    ResponseEntity<Izvestaj> getById(@PathVariable String id) throws Exception {
        return ResponseEntity.ok(service.getById(id));
    }

    @GetMapping
    ResponseEntity<EntityList<Izvestaj>> getAll() throws Exception {
        return ResponseEntity.ok(new EntityList<>(service.getAll()));
    }

    @PostMapping(value = "/generate-pdf/{id}")
    public ResponseEntity<String> generatePDFIzvestaj(@PathVariable String id) {
        try {
            String path = service.generatePdfIzvestaj(id);
            return ResponseEntity.ok(path);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @PostMapping(value = "/generate-xhtml/{id}")
    public ResponseEntity<String> generateXhtmlIzvestaj(@PathVariable String id) {
        try {
            String path = service.generateXhtmlIzvestaj(id);
            return ResponseEntity.ok(path);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

}
