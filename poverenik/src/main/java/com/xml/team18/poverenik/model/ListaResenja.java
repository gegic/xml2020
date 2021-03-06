
package com.xml.team18.poverenik.model;

import com.xml.team18.poverenik.model.resenje.Resenje;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.xml.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "resenje"
})
@XmlRootElement(name = "lista-resenja")
public class ListaResenja {

    @XmlElement(required = true)
    protected List<Resenje> resenje;

    /**
     * Gets the value of the resenje property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the resenje property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getResenje().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Resenje }
     * 
     * 
     */
    public List<Resenje> getResenje() {
        if (resenje == null) {
            resenje = new ArrayList<Resenje>();
        }
        return this.resenje;
    }

}
