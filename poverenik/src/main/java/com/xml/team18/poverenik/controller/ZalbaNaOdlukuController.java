package com.xml.team18.poverenik.controller;

import com.sun.org.apache.xerces.internal.jaxp.datatype.XMLGregorianCalendarImpl;
import com.xml.team18.poverenik.exceptions.ResourceNotFoundException;
import com.xml.team18.poverenik.factory.ZalbaNaOdlukuFactory;
import com.xml.team18.poverenik.jaxb.JaxB;
import com.xml.team18.poverenik.model.zalbanaodluku.Zalba;
import com.xml.team18.poverenik.model.zalba.na.odluku.Zalba;
import com.xml.team18.poverenik.service.ZalbaNaOdlukuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.JAXBException;
import java.io.File;
import java.util.Scanner;
import java.net.URI;

@RestController
@RequestMapping(
        path = "/api/zalba-na-odluku",
        consumes = MediaType.APPLICATION_XML_VALUE,
        produces = MediaType.APPLICATION_XML_VALUE)
public class ZalbaNaOdlukuController {

    private final ZalbaNaOdlukuService service;

    @Autowired
    public ZalbaNaOdlukuController(ZalbaNaOdlukuService service) {
        this.service = service;
    }

    @PostMapping
    ResponseEntity<String> addZalbaCutanje(@RequestBody String xmlZalbaCutanje) throws JAXBException {
        return ResponseEntity.created(URI.create(this.service.save(xmlZalbaCutanje))).build();
    }

    @GetMapping(path = "/{id}")
    ResponseEntity<String> getById(@PathVariable String id) throws ResourceNotFoundException, JAXBException {
        return ResponseEntity.ok(service.getById(id));
    }

    @GetMapping(
            produces = MediaType.APPLICATION_XML_VALUE
    )
    public ResponseEntity<String> getZalbaNaOdluku() {
        try {
            Scanner s = new Scanner(new File("./xml/xmlModel/zalbanaodluk.xml"));
            String xml = s.useDelimiter("\\Z").next();
            Object o = jaxB.unmarshall(xml, Zalba.class, ZalbaNaOdlukuFactory.class);
            Zalba z = (Zalba) ((JAXBElement) o).getValue();
            xml = jaxB.marshall(z, Zalba.class, zalbaNaOdlukuFactory.getClass());
            return ResponseEntity.ok(xml);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().build();
        }
    }

}
