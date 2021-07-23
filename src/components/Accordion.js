import UIkit from "uikit";

export const Accordion = (bm, c) => {
    bm.add('accordion', {
        attributes: {
            class: 'fa fa-image'
          },
          label: 'Accordion',
        category: 'Components',
        content: `<ul uk-accordion data-gjs-type="uk-accordion">
        <li class="uk-open">
            <a class="uk-accordion-title" href="#">Item 1</a>
            <div class="uk-accordion-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </li>
        <li>
            <a class="uk-accordion-title" href="#">Item 2</a>
            <div class="uk-accordion-content">
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
            </div>
        </li>
        <li>
            <a class="uk-accordion-title" href="#">Item 3</a>
            <div class="uk-accordion-content">
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
            </div>
        </li>
    </ul>`
    });
};

const accordionElement = `<li>
<a class="uk-accordion-title" href="#">Item 2</a>
<div class="uk-accordion-content">
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
</div>
</li>`;

export default (domc, editor) => {
    const comps = editor.DomComponents;
    const defaultType = comps.getType('default');
    const defaultModel = defaultType.model;
    const linkType = comps.getType('link');
    const linkModel = linkType.model;

    const defaultView = defaultType.view;

    domc.addType('uk-accordion', {
        model: defaultModel.extend({
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                name: 'Accordion',
                traits: [
                    {
                      type: 'checkbox',
                      label: 'Collapsible',
                      name: 'collapsible',
                      changeProp: 1
                    },
                    {
                        type: 'checkbox',
                        label: 'Open multiple items',
                        name: 'multiple',
                        changeProp: 1
                      },
                  ].concat(defaultModel.prototype.defaults.traits)
            }),
            init2() {
                this.listenTo(this, 'change:collapsible', this.collapsible);
                this.listenTo(this, 'change:multiple', this.multiple);
                this.set('collapsible', true);
            },
            collapsible() {this.updateAccordion('collapsible')},
            multiple() {this.updateAccordion('multiple')},
            updateAccordion(attribut) {
                const state = this.get(attribut);

                let accordion = this.getAttributes()['uk-accordion'];

                if (!accordion) {
                    accordion = '';
                }
                if (accordion.includes(attribut)) {
                    accordion = accordion.replace(new RegExp(`${attribut}: (-|)[a-z|0-9]*`, 'g'), `${attribut}: ${state}`);
                } else if (state) {
                    accordion += `${attribut}: ${state};`;
                }
                let attrs = [];
                attrs['uk-accordion'] = accordion
                this.addAttributes(attrs);
                UIkit.update(document.body, 'update');
            }
        }, {
            isComponent(el) {
                if (el.hasAttribute && el.hasAttribute('uk-accordion')) {
                    return { type: 'uk-accordion' };
                }
            },
        }),

        view: defaultView,
    });
}
