package com.xml.team18.poverenik.dto;

import com.xml.team18.poverenik.model.izvestaj.Izvestaj;
import com.xml.team18.poverenik.model.resenje.Resenje;
import com.xml.team18.poverenik.model.zalba.cutanje.ZalbaCutanje;
import com.xml.team18.poverenik.model.zalba.na.odluku.ZalbaNaOdluku;

import javax.xml.bind.annotation.XmlAnyElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlSeeAlso;
import java.util.ArrayList;
import java.util.List;

@XmlRootElement
@XmlSeeAlso({ZalbaCutanje.class, ZalbaNaOdluku.class, Resenje.class, Izvestaj.class})
public class EntityList<T> {

    private List<T> listOfEntityObjects;

    public EntityList() {
        listOfEntityObjects = new ArrayList<T>();
    }

    public EntityList(List<T> listOfEntityObjects) {
        this.listOfEntityObjects = listOfEntityObjects;
    }

    @XmlAnyElement
    public List<T> getItems() {
        return listOfEntityObjects;
    }
}