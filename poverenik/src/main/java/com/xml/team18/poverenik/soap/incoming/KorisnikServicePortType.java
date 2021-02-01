package com.xml.team18.poverenik.soap.incoming;

import com.xml.team18.poverenik.factory.KorisnikFactory;
import com.xml.team18.poverenik.model.korisnik.Korisnik;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import javax.xml.bind.annotation.XmlSeeAlso;

/**
 * This class was generated by Apache CXF 3.2.1
 * 2021-02-02T12:33:28.163+01:00
 * Generated source version: 3.2.1
 * 
 */
@WebService(targetNamespace = "http://korisnik.soap.sluzbenik.team18.xml.com/", name = "KorisnikServicePortType")
@XmlSeeAlso({KorisnikFactory.class})
@SOAPBinding(style = SOAPBinding.Style.RPC)
public interface KorisnikServicePortType {

    @WebMethod(action = "korisnikByEmail")
    @WebResult(name = "korisnik", targetNamespace = "http://korisnik.soap.sluzbenik.team18.xml.com/", partName = "korisnik")
    Korisnik korisnikByEmail(
        @WebParam(partName = "email", name = "email")
        String email
    );
}
