package com.xml.team18.sluzbenik.soap.incoming;

import com.xml.team18.sluzbenik.factory.OdgovorFactory;
import com.xml.team18.sluzbenik.model.ListaZalbiCutanje;
import com.xml.team18.sluzbenik.model.ListaZalbiNaOdluku;
import com.xml.team18.sluzbenik.model.izjasnjenje.OdgovorIzjasnjenje;
import com.xml.team18.sluzbenik.model.zalba.cutanje.ZalbaCutanje;
import com.xml.team18.sluzbenik.model.zalba.na.odluku.ZalbaNaOdluku;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.jws.soap.SOAPBinding;
import javax.xml.bind.annotation.XmlSeeAlso;

@WebService(targetNamespace = "http://zalba.soap.poverenik.team18.xml.com/", name = "ZalbaServicePortType")
@XmlSeeAlso({OdgovorFactory.class})
@SOAPBinding(style = SOAPBinding.Style.RPC)
public interface ZalbaServicePortType {

    @WebMethod(action = "getByIdZalbaNaOdluku")
    @WebResult(name = "zalba", targetNamespace = "http://zalba.soap.poverenik.team18.xml.com/", partName = "zalba")
    public ZalbaNaOdluku getByIdZalbaNaOdluku(
            @WebParam(partName = "id", name = "id")
                    String id
    );

    @WebMethod(action = "odgovori")
    @WebResult(name = "uspesno", targetNamespace = "http://zalba.soap.poverenik.team18.xml.com/", partName = "uspesno")
    public boolean odgovori(
            @WebParam(partName = "odgovor", name = "odgovor")
                    OdgovorIzjasnjenje odgovor
    );

    @WebMethod(action = "getByIdZalbaCutanje")
    @WebResult(name = "zalba", targetNamespace = "http://zalba.soap.poverenik.team18.xml.com/", partName = "zalba")
    public ZalbaCutanje getByIdZalbaCutanje(
            @WebParam(partName = "id", name = "id")
                    String id
    );

    @WebMethod(action = "pretragaZalbaNaOdluku")
    @WebResult(name = "listaZalbi", targetNamespace = "http://zalba.soap.poverenik.team18.xml.com/", partName = "listaZalbi")
    public ListaZalbiNaOdluku pretragaZalbaNaOdluku(
            @WebParam(partName = "id", name = "id")
                    String id
    );

    @WebMethod(action = "pretragaZalbaCutanje")
    @WebResult(name = "listaZalbi", targetNamespace = "http://zalba.soap.poverenik.team18.xml.com/", partName = "listaZalbi")
    public ListaZalbiCutanje pretragaZalbaCutanje(
            @WebParam(partName = "id", name = "id")
                    String id
    );
}
