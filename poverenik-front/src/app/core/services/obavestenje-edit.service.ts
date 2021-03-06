import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

declare const Xonomy: any;

@Injectable({
  providedIn: 'root'
})
export class ObavestenjeEditService {

  specification = {
    validate(jsElement: any): void {
      const elementSpec = this.elements[jsElement.name];
      if (elementSpec.validate) {
        elementSpec.validate(jsElement);
      }
      // Cycle through the element's attributes:
      for (const jsAttribute of jsElement.attributes) {
        const attributeSpec = elementSpec.attributes[jsAttribute.name];
        if (attributeSpec.validate) {
          attributeSpec.validate(jsAttribute);
        }
      }
      // Cycle through the element's children:
      for (const jsChild of jsElement.children) {
        if (jsChild.type === 'element') {
          this.validate(jsChild);
        }
      }
    },
    elements: {
      obavestenje: {
        validate(jsElement: any): void {
          if (!jsElement.hasElements()) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element must not be empty.'
              }
            );
          }
          if (!jsElement.hasChildElement('broj')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element broj.'
              }
            );
          }
          if (!jsElement.hasChildElement('organ')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element organ.'
              }
            );
          }

          if (!jsElement.hasChildElement('podnosilac')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element podnosilac.'
              }
            );
          }
          if (!jsElement.hasChildElement('opis')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element opis.'
              }
            );
          }
          if (!jsElement.hasChildElement('zakon')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element zakon.'
              }
            );
          }
          if (!jsElement.hasChildElement('zahtev')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element zahtev.'
              }
            );
          }
          if (!jsElement.hasChildElement('sadrzaj-obavestenja')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element sadrzaj-obavestenja.'
              }
            );
          }
          if (!jsElement.hasChildElement('izdana-dokumenta')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element izdana-dokumenta.'
              }
            );
          }
          if (!jsElement.hasChildElement('dostavljeno')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element dostavljeno.'
              }
            );
          }
        },
        hasText: false,
        menu: [
          {
            caption: 'Append an <broj>',
            action: Xonomy.newElementChild,
            actionParameter: `<broj></broj>`,
            hideIf(jsElement: any): boolean {
              return jsElement.hasChildElement('broj');
            }
          },
          {
            caption: 'Append an <organ>',
            action: Xonomy.newElementChild,
            actionParameter: `<organ/>`,
            hideIf(jsElement: any): boolean {
              return jsElement.hasChildElement('organ');
            }
          },
          {
            caption: 'Append an <opis>',
            action: Xonomy.newElementChild,
            actionParameter: `<opis></opis>`,
            hideIf(jsElement: any): boolean {
              return jsElement.hasChildElement('opis');
            }
          },
          {
            caption: 'Append an <zakon>',
            action: Xonomy.newElementChild,
            actionParameter: `<zakon></zakon>`,
            hideIf(jsElement: any): boolean {
              return jsElement.hasChildElement('zakon');
            }
          },
          {
            caption: 'Append an <zahtev>',
            action: Xonomy.newElementChild,
            actionParameter: `<zahtev></zahtev>`,
            hideIf(jsElement: any): boolean {
              return jsElement.hasChildElement('zahtev');
            }
          },
          {
            caption: 'Append an <sadrzaj-obavestenja>',
            action: Xonomy.newElementChild,
            actionParameter: `<sadrzaj-obavestenja></sadrzaj-obavestenja>`,
            hideIf(jsElement: any): boolean {
              return jsElement.hasChildElement('sadrzaj-obavestenja');
            }
          },
          {
            caption: 'Append an <dodatna-odluka>',
            action: Xonomy.newElementChild,
            actionParameter: `<dodatna-odluka></dodatna-odluka>`,
            hideIf(jsElement: any): boolean {
              return jsElement.hasChildElement('dodatna-odluka');
            }
          },
          {
            caption: 'Append an <izdana-dokumenta>',
            action: Xonomy.newElementChild,
            actionParameter: `<izdana-dokumenta></izdana-dokumenta>`,
            hideIf(jsElement: any): boolean {
              return jsElement.hasChildElement('izdana-dokumenta');
            }
          },
          {
            caption: 'Append an <dostavljeno>',
            action: Xonomy.newElementChild,
            actionParameter: `<dostavljeno></dostavljeno>`,
            hideIf(jsElement: any): boolean {
              return jsElement.hasChildElement('dostavljeno');
            }
          }
        ]
      },
      broj: {
        validate(jsElement: any): void {
          if (jsElement.getText() === '') {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element must not be empty.'
              }
            );
          }
        },
        hasText: true,
        asker: Xonomy.askString,
        mustBeBefore: ['organ', 'podnosilac', 'opis', 'zakon', 'zahtev', 'sadrzaj-obavestenja',
          'dodatna-odluka', 'izdana-dokumenta', 'dostavljeno']
      },
      datum: {
        validate(jsElement: any): void {
          if (jsElement.getText() === '') {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element must not be empty.'
              }
            );
          }
        },
        mustBeBefore: ['organ', 'podnosilac', 'opis', 'zakon', 'zahtev', 'sadrzaj-obavestenja',
          'dodatna-odluka', 'izdana-dokumenta', 'dostavljeno']
      },
      organ: {
        validate(jsElement: any): void {
          if (!jsElement.hasElements()) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element must not be empty.'
              }
            );
          }
          if (!jsElement.hasChildElement('adresa')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element adresa.'
              }
            );
          }
          if (!jsElement.hasChildElement('naziv')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element naziv.'
              }
            );
          }
        },
        mustBeBefore: ['podnosilac', 'opis', 'zakon', 'zahtev', 'sadrzaj-obavestenja',
          'dodatna-odluka', 'izdana-dokumenta', 'dostavljeno'],
        hasText: false,
        menu: [
          {
            caption: 'Append an <adresa>',
            action: Xonomy.newElementChild,
            actionParameter: '<adresa></adresa>',
            hideIf(jsElement: any): boolean {
              return jsElement.hasChildElement('adresa');
            }
          },
          {
            caption: 'Append an <naziv>',
            action: Xonomy.newElementChild,
            actionParameter: '<naziv></naziv>',
            hideIf(jsElement: any): boolean {
              return jsElement.hasChildElement('naziv');
            }
          }
        ]
      },
      adresa: {
        validate(jsElement: any): void {
          if (!jsElement.hasElements()) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element must not be empty.'
              }
            );
          }
          if (!jsElement.hasChildElement('ulica')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element ulica.'
              }
            );
          }
          if (!jsElement.hasChildElement('mesto')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element mesto.'
              }
            );
          }
        },
        menu: [
          {
            caption: 'Append an <mesto>',
            action: Xonomy.newElementChild,
            actionParameter: '<mesto></mesto>',
            hideIf(jsElement: any): boolean {
              return jsElement.hasChildElement('mesto');
            }
          },
          {
            caption: 'Append an <ulica>',
            action: Xonomy.newElementChild,
            actionParameter: `<ulica></ulica>`,
            hideIf(jsElement: any): boolean {
              return jsElement.hasChildElement('ulica');
            }
          }
        ],
        mustBeBefore: ['naziv', 'ime-prezime'],
      },
      mesto: {
        validate(jsElement: any): void {
          if (jsElement.getText() === '') {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element must not be empty.'
              }
            );
          }
        },
        mustBeBefore: ['ulica'],
        hasText: true,
        asker: Xonomy.askString,
      },
      ulica: {
        validate(jsElement: any): void {
          if (jsElement.getText() === '') {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element must not be empty.'
              }
            );
          }
        },
        menu: [],
        hasText: true,
        asker: Xonomy.askString,
      },
      naziv: {
        validate(jsElement: any): void {
          if (jsElement.getText() === '') {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element must not be empty.'
              }
            );
          }
        },
        menu: [{
          caption: 'Delete this <item>',
          action: Xonomy.deleteElement
        }
        ],
        hasText: true,
        asker: Xonomy.askString,
      },
      podnosilac: {
        validate(jsElement: any): void {
          if (!jsElement.hasElements()) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element must not be empty.'
              }
            );
          }
          if (!jsElement.hasChildElement('adresa')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element adresa.'
              }
            );
          }
          if (!jsElement.hasChildElement('ime-prezime')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element adresa.'
              }
            );
          }
        },
        mustBeBefore: ['opis', 'zakon', 'zahtev', 'sadrzaj-obavestenja',
          'dodatna-odluka', 'izdana-dokumenta', 'dostavljeno'],
        isReadOnly: true
      },
      'ime-prezime': {
        validate(jsElement: any): void {
          if (jsElement.getText() === '') {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element must not be empty.'
              }
            );
          }
        },
        isReadOnly: true,
        hasText: true,
        asker: Xonomy.askString,
      },
      opis: {
        validate(jsElement: any): void {
          if (jsElement.getText() === '') {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element must not be empty.'
              }
            );
          }
        },
        hasText: true,
        asker: Xonomy.askString,
        mustBeBefore: ['zakon', 'zahtev', 'sadrzaj-obavestenja',
          'dodatna-odluka', 'izdana-dokumenta', 'dostavljeno']
      },
      zakon: {
        validate(jsElement: any): void {
          if (!jsElement.hasElements()) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element must not be empty.'
              }
            );
          }
          if (!jsElement.hasChildElement('naziv')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element naziv.'
              }
            );
          }
          if (!jsElement.hasChildElement('clan')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element clan.'
              }
            );
          }
          if (!jsElement.hasChildElement('sluzbeni-glasnik')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element sluzbeni-glasnik.'
              }
            );
          }
        },
        mustBeBefore: ['zahtev', 'sadrzaj-obavestenja',
          'dodatna-odluka', 'izdana-dokumenta', 'dostavljeno'],
        menu: [
          {
            caption: 'Append an <clan>',
            action: Xonomy.newElementChild,
            actionParameter: '<clan></clan>',
            hideIf(jsElement: any): boolean {
              return jsElement.hasChildElement('adresa');
            }
          },
          {
            caption: 'Append an <naziv>',
            action: Xonomy.newElementChild,
            actionParameter: '<naziv></naziv>',
            hideIf(jsElement: any): boolean {
              return jsElement.hasChildElement('naziv');
            }
          },
          {
            caption: 'Append an <sluzbeni-glasnik>',
            action: Xonomy.newElementChild,
            actionParameter: '<sluzbeni-glasnik></sluzbeni-glasnik>',
            hideIf(jsElement: any): boolean {
              return jsElement.hasChildElement('sluzbeni-glasnik');
            }
          }
        ]
      },
      clan: {
        validate(jsElement: any): void {
          if (jsElement.hasAttribute('broj') === '') {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have an attribute broj.'
              }
            );
          }
        },
        menu: [
          {
            caption: 'Delete this <item>',
            action: Xonomy.deleteElement
          },
          {
            caption: 'Add @broj',
            action: Xonomy.newAttribute,
            actionParameter: { name: 'broj', value: '' },
            hideIf(jsElement: any): boolean {
              return jsElement.hasAttribute('broj');
            }
          },
          {
            caption: 'Append an <stav>',
            action: Xonomy.newElementChild,
            actionParameter: '<stav></stav>',
          }
        ],
        attributes: {
          broj: {
            asker: Xonomy.askString,
            validate(jsAttribute: any): void {
              if (jsAttribute.value === '') {
                Xonomy.warnings.push({
                    htmlID: jsAttribute.htmlID,
                    text: 'This attribute must not be empty.'
                  }
                );
              }
            }
          }
        },
        mustBeBefore: ['sluzbeni-glasnik'],
        mustBeAfter: ['naziv']
      },
      stav: {
        validate(jsElement: any): void {
          if (jsElement.hasAttribute('broj') === '') {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have an attribute broj.'
              }
            );
          }
        },
        menu: [
          {
            caption: 'Delete this <item>',
            action: Xonomy.deleteElement
          },
          {
            caption: 'Add @broj',
            action: Xonomy.newAttribute,
            actionParameter: { name: 'broj', value: '' },
            hideIf(jsElement: any): boolean {
              return jsElement.hasAttribute('broj');
            }
          },
          {
            caption: 'Append an <tacka>',
            action: Xonomy.newElementChild,
            actionParameter: '<tacka></tacka>',
          }
        ],
        attributes: {
          broj: {
            asker: Xonomy.askString,
            validate(jsAttribute: any): void {
              if (jsAttribute.value === '') {
                Xonomy.warnings.push({
                    htmlID: jsAttribute.htmlID,
                    text: 'This attribute must not be empty.'
                  }
                );
              }
            }
          }
        },
      },
      tacka: {
        validate(jsElement: any): void {
          if (jsElement.hasAttribute('broj') === '') {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have an attribute broj.'
              }
            );
          }
        },
        menu: [
          {
            caption: 'Delete this <item>',
            action: Xonomy.deleteElement
          },
          {
            caption: 'Add @broj',
            action: Xonomy.newAttribute,
            actionParameter: { name: 'broj', value: '' },
            hideIf(jsElement: any): boolean {
              return jsElement.hasAttribute('broj');
            }
          }
        ],
        attributes: {
          broj: {
            asker: Xonomy.askString,
            validate(jsAttribute: any): void {
              if (jsAttribute.value === '') {
                Xonomy.warnings.push({
                    htmlID: jsAttribute.htmlID,
                    text: 'This attribute must not be empty.'
                  }
                );
              }
            }
          }
        },
      },
      'sluzbeni-glasnik': {
        validate(jsElement: any): void {
          if (!jsElement.hasElements()) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element must not be empty.'
              }
            );
          }
          if (!jsElement.hasChildElement('broj')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have at least one element naziv.'
              }
            );
          }
        },
        menu: [
          {
            caption: 'Append an <broj>',
            action: Xonomy.newElementChild,
            actionParameter: '<broj></broj>',
          },
          {
            caption: 'Delete this <item>',
            action: Xonomy.deleteElement
          }
        ],
      },
      zahtev: {
        validate(jsElement: any): void {
          if (!jsElement.hasElements()) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element must not be empty.'
              }
            );
          }
          if (!jsElement.hasChildElement('datum')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element datum.'
              }
            );
          }
          if (!jsElement.hasChildElement('opis-zahteva')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element opis-zahteva.'
              }
            );
          }
        },
        mustBeBefore: ['sadrzaj-obavestenja', 'dodatna-odluka', 'izdana-dokumenta', 'dostavljeno'],
        isReadOnly: true,
        menu: [
          {
            caption: 'Append an <datum>',
            action: Xonomy.newElementChild,
            actionParameter: '<datum></datum>',
            hideIf(jsElement: any): boolean {
              return jsElement.hasChildElement('adresa');
            }
          },
          {
            caption: 'Append an <opis-zahteva>',
            action: Xonomy.newElementChild,
            actionParameter: '<opis-zahteva></opis-zahteva>',
            hideIf(jsElement: any): boolean {
              return jsElement.hasChildElement('naziv');
            }
          },
          {
            caption: 'Append an <sluzbeni-glasnik>',
            action: Xonomy.newElementChild,
            actionParameter: '<sluzbeni-glasnik></sluzbeni-glasnik>',
            hideIf(jsElement: any): boolean {
              return jsElement.hasChildElement('sluzbeni-glasnik');
            }
          }
        ]
      },
      'opis-zahteva': {
        validate(jsElement: any): void {
          if (jsElement.getText() === '') {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element must not be empty.'
              }
            );
          }
        },
        hasText: true,
        asker: Xonomy.askString,
        isReadOnly: true,
        mustBeAfter: ['datum']
      },
      'sadrzaj-obavestenja': {
        validate(jsElement: any): void {
          if (jsElement.getText() === '') {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element must not be empty.'
              }
            );
          }
          if (!jsElement.hasChildElement('prihvacen-zahtev') && !jsElement.hasChildElement('razlog-odbijanja')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element prihvacen-zahtev or razlog-odbijanja.'
              }
            );
          }
        },
      },
      'prihvacen-zahtev': {
        validate(jsElement: any): void {
          if (jsElement.getText() === '') {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element must not be empty.'
              }
            );
          }
          if (!jsElement.hasChildElement('vreme')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element vreme.'
              }
            );
          }
          if (!jsElement.hasChildElement('kancelarija')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element kancelarija.'
              }
            );
          }
          if (!jsElement.hasChildElement('adresa')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element adresa.'
              }
            );
          }
        },
        menu: [
          {
            caption: 'Append an <vreme>',
            action: Xonomy.newElementChild,
            actionParameter: '<vreme></vreme>',
            hideIf(jsElement: any): boolean {
              return jsElement.hasChildElement('vreme');
            }
          },
          {
            caption: 'Append an <kancelarija>',
            action: Xonomy.newElementChild,
            actionParameter: '<kancelarija></kancelarija>',
            hideIf(jsElement: any): boolean {
              return jsElement.hasChildElement('kancelarija');
            }
          },
          {
            caption: 'Append an <adresa>',
            action: Xonomy.newElementChild,
            actionParameter: '<adresa></adresa>',
            hideIf(jsElement: any): boolean {
              return jsElement.hasChildElement('adresa');
            }
          }
        ]
      },
      'dodatna-odluka': {
        validate(jsElement: any): void {
          if (jsElement.getText() === '') {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element must not be empty.'
              }
            );
          }
        },
        hasText: true,
        asker: Xonomy.askString,
        mustBeBefore: ['izdana-dokumenta', 'dostavljeno']
      },
      'izdana-dokumenta': {
        validate(jsElement: any): void {
          if (jsElement.getText() === '') {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element must not be empty.'
              }
            );
          }
          if (!jsElement.hasChildElement('uredba')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element uredba.'
              }
            );
          }
          if (!jsElement.hasChildElement('cenovnik')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element cenovnik.'
              }
            );
          }
        },
        mustBeBefore: ['dostavljeno'],
        menu: [
          {
            caption: 'Append an <uredba>',
            action: Xonomy.newElementChild,
            actionParameter: '<uredba></uredba>',
            hideIf(jsElement: any): boolean {
              return jsElement.hasChildElement('uredba');
            }
          },
          {
            caption: 'Append an <cenovnik>',
            action: Xonomy.newElementChild,
            actionParameter: '<cenovnik></cenovnik>',
            hideIf(jsElement: any): boolean {
              return jsElement.hasChildElement('cenovnik');
            }
          }
        ]
      },
      uredba: {
        validate(jsElement: any): void {
          if (!jsElement.hasElements()) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element must not be empty.'
              }
            );
          }
          if (!jsElement.hasChildElement('naziv')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element naziv.'
              }
            );
          }
          if (!jsElement.hasChildElement('clan')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element clan.'
              }
            );
          }
          if (!jsElement.hasChildElement('sluzbeni-glasnik')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element sluzbeni-glasnik.'
              }
            );
          }
        },
        hasText: false,
        menu: [
          {
            caption: 'Append an <clan>',
            action: Xonomy.newElementChild,
            actionParameter: '<clan></clan>',
            hideIf(jsElement: any): boolean {
              return jsElement.hasChildElement('adresa');
            }
          },
          {
            caption: 'Append an <naziv>',
            action: Xonomy.newElementChild,
            actionParameter: '<naziv></naziv>',
            hideIf(jsElement: any): boolean {
              return jsElement.hasChildElement('naziv');
            }
          },
          {
            caption: 'Append an <sluzbeni-glasnik>',
            action: Xonomy.newElementChild,
            actionParameter: '<sluzbeni-glasnik></sluzbeni-glasnik>',
            hideIf(jsElement: any): boolean {
              return jsElement.hasChildElement('sluzbeni-glasnik');
            }
          }
        ]
      },
      cenovnik: {
        mustBeAfter: ['uredba'],
        menu: [
          {
            caption: 'Delete this <item>',
            action: Xonomy.deleteElement
          },
          {
            caption: 'Append an <stavka>',
            action: Xonomy.newElementChild,
            actionParameter: '<stavka></stavka>',
          }
        ]
      },
      stavka: {
        validate(jsElement: any): void {
          if (jsElement.hasAttribute('artikl') === '') {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have an attribute artikl.'
              }
            );
          }
          if (jsElement.hasAttribute('cena') === '') {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have an attribute cena.'
              }
            );
          }
        },
        menu: [
          {
            caption: 'Delete this <item>',
            action: Xonomy.deleteElement
          },
          {
            caption: 'Add @artikl',
            action: Xonomy.newAttribute,
            actionParameter: { name: 'artikl', value: '' },
            hideIf(jsElement: any): boolean {
              return jsElement.hasAttribute('artikl');
            }
          },
          {
            caption: 'Add @cena',
            action: Xonomy.newAttribute,
            actionParameter: { name: 'cena', value: '' },
            hideIf(jsElement: any): boolean {
              return jsElement.hasAttribute('cena');
            }
          }
        ],
        attributes: {
          artikl: {
            asker: Xonomy.askString,
            validate(jsAttribute: any): void {
              if (jsAttribute.value === '') {
                Xonomy.warnings.push({
                    htmlID: jsAttribute.htmlID,
                    text: 'This attribute must not be empty.'
                  }
                );
              }
            }
          },
          cena: {
            asker: Xonomy.askString,
            validate(jsAttribute: any): void {
              if (jsAttribute.value === '') {
                Xonomy.warnings.push({
                    htmlID: jsAttribute.htmlID,
                    text: 'This attribute must not be empty.'
                  }
                );
              }
              if (isNaN(jsAttribute.value)) {
                Xonomy.warnings.push({
                    htmlID: jsAttribute.htmlID,
                    text: 'This attribute must be a number'
                  }
                );
              }
            }
          }
        },
      },
      dostavljeno: {
        validate(jsElement: any): void {
          if (jsElement.getText() === '') {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element must not be empty.'
              }
            );
          }
          if (!jsElement.hasChildElement('primalac')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have element primalac.'
              }
            );
          }
        },
        mustBeAfter: ['broj', 'organ', 'podnosilac', 'opis', 'zakon', 'zahtev', 'sadrzaj-obavestenja',
          'dodatna-odluka', 'izdana-dokumenta'],
        menu: [
          {
            caption: 'Append an <primalac>',
            action: Xonomy.newElementChild,
            actionParameter: '<primalac></primalac>'
          }
        ]
      },
      primalac: {
        validate(jsElement: any): void {
          if (jsElement.getText() === '') {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element must not be empty.'
              }
            );
          }
        },
        hasText: true,
        asker: Xonomy.askString,
      },
      vreme: {
        validate(jsElement: any): void {
          if (!jsElement.hasAttribute('xsi:type')) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have attribute xsi:type.'
              }
            );
          }
          if (jsElement.getAttributeValue('xsi:type', null) === 'Vreme' && (!jsElement.hasAttribute('pocetak') || jsElement.hasAttribute('zavrsetak'))) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have attribute pocetak and cannot contain attribute zavrsetak'
              }
            );
          }
          if (jsElement.getAttributeValue('xsi:type', null) === 'VremePeriod' && (!jsElement.hasAttribute('pocetak') || !jsElement.hasAttribute('zavrsetak'))) {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element needs to have both attributes pocetak and zavrsetak'
              }
            );
          }
        },
        menu: [
          {
            caption: 'Add @xsi:type',
            action: Xonomy.newAttribute,
            actionParameter: { name: 'xsi:type', value: '' },
            hideIf(jsElement: any): boolean {
              return jsElement.hasAttribute('xsi:type');
            }
          },
          {
            caption: 'Add @pocetak',
            action: Xonomy.newAttribute,
            actionParameter: { name: 'pocetak', value: '' },
            hideIf(jsElement: any): boolean {
              return jsElement.hasAttribute('pocetak');
            }
          },
          {
            caption: 'Add @zavrsetak',
            action: Xonomy.newAttribute,
            actionParameter: { name: 'zavrsetak', value: '' },
            hideIf(jsElement: any): boolean {
              return jsElement.hasAttribute('zavrsetak') || jsElement.getAttributeValue('xsi:type', null) !== 'VremePeriod';
            }
          }
        ],
        attributes: {
          'xsi:type': {
            asker: Xonomy.askPicklist,
            askerParameter: [
              { value: 'Vreme' },
              { value: 'VremePeriod' }
            ],
            validate(jsAttribute: any): void {
              if (jsAttribute.value === '') {
                Xonomy.warnings.push({
                    htmlID: jsAttribute.htmlID,
                    text: 'This attribute must not be empty'
                  }
                );
              }
            }
          },
          pocetak: {
            asker: Xonomy.askString,
            validate(jsAttribute: any): void {
              if (jsAttribute.value === '') {
                Xonomy.warnings.push({
                    htmlID: jsAttribute.htmlID,
                    text: 'This attribute must not be empty'
                  }
                );
              }
            }
          },
          zavrsetak: {
            asker: Xonomy.askString,
            validate(jsAttribute: any): void {
              if (jsAttribute.value === '') {
                Xonomy.warnings.push({
                    htmlID: jsAttribute.htmlID,
                    text: 'This attribute must not be empty'
                  }
                );
              }
            },
            menu: [
              {
                caption: 'Remove @zavrsetak',
                action: Xonomy.deleteAttribute
              },
            ]
          },
        }
      },
      kancelarija: {
        validate(jsElement: any): void {
          if (jsElement.getText() === '') {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element must not be empty.'
              }
            );
          }
        },
        hasText: true,
        asker: Xonomy.askString,
      },
      'razlog-odbijanja': {
        validate(jsElement: any): void {
          if (jsElement.getText() === '') {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element must not be empty.'
              }
            );
          }
        },
        hasText: true,
      }
    }
  };


  constructor() { }

  render(element: any,  xmlString: string, readOnly?: boolean): void {
    (this.specification.elements.obavestenje as any).isReadOnly = !!readOnly;
    Xonomy.setMode('nerd');
    Xonomy.render(xmlString, element, {
      validate: this.specification.validate,
      elements: this.specification.elements
    });
  }

  harvest(): string {
    return Xonomy.harvest();
  }

  get warnings(): any[] {
    return Xonomy.warnings;
  }
}
