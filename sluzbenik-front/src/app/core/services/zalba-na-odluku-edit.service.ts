import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';

declare const Xonomy: any;

@Injectable({
  providedIn: 'root'
})
export class ZalbaNaOdlukuEditService {

  public specification = {
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
      'zalba-na-odluku': {
        validate(jsElement: any): void {
          if (jsElement.getText() === '') {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element must not be empty.'
              }
            );
          }
        },
      },
      datum: {
        hasText: true,
        isReadOnly: true
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
      },
      adresa: {
        validate(jsElement: any): void {
          if (jsElement.getText() === '') {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element must not be empty.'
              }
            );
          }
        },
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
        hasText: true,
        asker: Xonomy.askString
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
        hasText: true,
        asker: Xonomy.askString
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
        hasText: true,
        asker: Xonomy.askString
      },
      podnosilac: {
        isReadOnly: true,
        attributes: {
          id: {
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
        }
      },
      'ime-prezime': {
        hasText: true,
        isReadOnly: true
      },
      protiv: {
        isReadOnly: true,
        validate(jsElement: any): void {
          if (jsElement.getText() === '') {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element must not be empty.'
              }
            );
          }
        },
        attributes: {
          id: {
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
        }
      },
      'broj-obavestenja': {
        hasText: true,
        isReadOnly: true
      },
      donosilac: {
        validate(jsElement: any): void {
          if (jsElement.getText() === '') {
            Xonomy.warnings.push({
                htmlID: jsElement.htmlID,
                text: 'This element must not be empty.'
              }
            );
          }
        },
      },
      zahtev: {
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
        attributes: {
          id: {
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
        }
      },
      'opis-zahteva': {
        hasText: true,
        isReadOnly: true
      },
      'deo-pobijanja': {
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
        asker: Xonomy.askString
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
        mustBeBefore: ['tip-zahteva', 'opis-zahteva', 'mesto', 'datum', 'trazilac-informacije'],
        menu: [
          {
            caption: 'Append an <clan>',
            action: Xonomy.newElementChild,
            actionParameter: '<clan></clan>',
            hideIf(jsElement: any): void {
              return jsElement.hasChildElement('adresa');
            }
          },
          {
            caption: 'Append an <naziv>',
            action: Xonomy.newElementChild,
            actionParameter: '<naziv></naziv>',
            hideIf(jsElement: any): void {
              return jsElement.hasChildElement('naziv');
            }
          },
          {
            caption: 'Append an <sluzbeni-glasnik>',
            action: Xonomy.newElementChild,
            actionParameter: '<sluzbeni-glasnik></sluzbeni-glasnik>',
            hideIf(jsElement: any): void {
              return jsElement.hasChildElement('sluzbeni-glasnik');
            }
          }
        ]
      },
      clan: {
        validate(jsElement: any): void {
          if (!jsElement.hasAttribute('broj')) {
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
            hideIf(jsElement: any): void {
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
          if (!jsElement.hasAttribute('broj')) {
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
            hideIf(jsElement: any): void {
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
          if (!jsElement.hasAttribute('broj')) {
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
            hideIf(jsElement: any): void {
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
        menu: [{
          caption: 'Delete this <item>',
          action: Xonomy.deleteElement
        }
        ],
        hasText: true,
        asker: Xonomy.askString,
      }
    }
  };

  constructor() { }

  render(element: any, xmlString: string, readOnly?: boolean): void {
    (this.specification.elements['zalba-na-odluku'] as any).isReadOnly = !!readOnly;
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
