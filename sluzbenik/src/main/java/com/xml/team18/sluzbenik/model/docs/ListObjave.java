
package com.xml.team18.sluzbenik.model.docs;

import javax.xml.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;


/**
 * <p>Java class for ListObjave complex type.
 *
 * <p>The following schema fragment specifies the expected content contained within this class.
 *
 * <pre>
 * &lt;complexType name="ListObjave">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="broj" maxOccurs="unbounded">
 *           &lt;complexType>
 *             &lt;simpleContent>
 *               &lt;extension base="&lt;>BrojObjave">
 *                 &lt;attribute name="autenticno-tumacenje" type="{http://www.w3.org/2001/XMLSchema}boolean" default="false" />
 *               &lt;/extension>
 *             &lt;/simpleContent>
 *           &lt;/complexType>
 *         &lt;/element>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ListObjave", propOrder = {
        "broj"
})
public class ListObjave {

    @XmlElement(required = true)
    protected List<Broj> broj;

    /**
     * Gets the value of the broj property.
     *
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the broj property.
     *
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getBroj().add(newItem);
     * </pre>
     *
     *
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Broj }
     */
    public List<Broj> getBroj() {
        if (broj == null) {
            broj = new ArrayList<Broj>();
        }
        return this.broj;
    }


    /**
     * <p>Java class for anonymous complex type.
     *
     * <p>The following schema fragment specifies the expected content contained within this class.
     *
     * <pre>
     * &lt;complexType>
     *   &lt;simpleContent>
     *     &lt;extension base="&lt;>BrojObjave">
     *       &lt;attribute name="autenticno-tumacenje" type="{http://www.w3.org/2001/XMLSchema}boolean" default="false" />
     *     &lt;/extension>
     *   &lt;/simpleContent>
     * &lt;/complexType>
     * </pre>
     */
    @XmlAccessorType(XmlAccessType.FIELD)
    @XmlType(name = "", propOrder = {
            "value"
    })
    public static class Broj {

        @XmlValue
        protected String value;
        @XmlAttribute(name = "autenticno-tumacenje")
        protected Boolean autenticnoTumacenje;

        /**
         * Gets the value of the value property.
         *
         * @return possible object is
         * {@link String }
         */
        public String getValue() {
            return value;
        }

        /**
         * Sets the value of the value property.
         *
         * @param value allowed object is
         *              {@link String }
         */
        public void setValue(String value) {
            this.value = value;
        }

        /**
         * Gets the value of the autenticnoTumacenje property.
         *
         * @return possible object is
         * {@link Boolean }
         */
        public boolean isAutenticnoTumacenje() {
            if (autenticnoTumacenje == null) {
                return false;
            } else {
                return autenticnoTumacenje;
            }
        }

        /**
         * Sets the value of the autenticnoTumacenje property.
         *
         * @param value allowed object is
         *              {@link Boolean }
         */
        public void setAutenticnoTumacenje(Boolean value) {
            this.autenticnoTumacenje = value;
        }

    }

}
