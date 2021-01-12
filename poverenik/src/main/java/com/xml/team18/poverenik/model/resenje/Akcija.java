
package com.xml.team18.poverenik.model.resenje;

import java.io.Serializable;
import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElementRef;
import javax.xml.bind.annotation.XmlElementRefs;
import javax.xml.bind.annotation.XmlMixed;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for Akcija complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="Akcija">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="zalilac" type="{}Osoba"/>
 *         &lt;element name="podneti-zahtev" type="{}PodnetiZahtev" minOccurs="0"/>
 *         &lt;element name="nacin-dostave" type="{}NacinDostave" minOccurs="0"/>
 *         &lt;element name="cenzura" type="{}Cenzura" minOccurs="0"/>
 *       &lt;/sequence>
 *       &lt;attribute name="rok" use="required" type="{http://www.w3.org/2001/XMLSchema}positiveInteger" />
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Akcija", propOrder = {
    "content"
})
public class Akcija {

    @XmlElementRefs({
        @XmlElementRef(name = "nacin-dostave", type = JAXBElement.class),
        @XmlElementRef(name = "podneti-zahtev", type = JAXBElement.class),
        @XmlElementRef(name = "zalilac", type = JAXBElement.class),
        @XmlElementRef(name = "cenzura", type = JAXBElement.class)
    })
    @XmlMixed
    protected List<Serializable> content;
    @XmlAttribute(name = "rok", required = true)
    @XmlSchemaType(name = "positiveInteger")
    protected BigInteger rok;

    /**
     * Gets the value of the content property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the content property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getContent().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link JAXBElement }{@code <}{@link NacinDostave }{@code >}
     * {@link String }
     * {@link JAXBElement }{@code <}{@link Osoba }{@code >}
     * {@link JAXBElement }{@code <}{@link PodnetiZahtev }{@code >}
     * {@link JAXBElement }{@code <}{@link List }{@code <}{@link String }{@code >}{@code >}
     * 
     * 
     */
    public List<Serializable> getContent() {
        if (content == null) {
            content = new ArrayList<Serializable>();
        }
        return this.content;
    }

    /**
     * Gets the value of the rok property.
     * 
     * @return
     *     possible object is
     *     {@link BigInteger }
     *     
     */
    public BigInteger getRok() {
        return rok;
    }

    /**
     * Sets the value of the rok property.
     * 
     * @param value
     *     allowed object is
     *     {@link BigInteger }
     *     
     */
    public void setRok(BigInteger value) {
        this.rok = value;
    }

}