import UIkit from "uikit";

export const TabBlock = (bm, c) => {
    bm.add('tabs', {
        label: `
        <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill-rule="evenodd">
            <path d="M22 9.3c0-.8-.5-1.3-1.3-1.3H3.4C2.5 8 2 8.5 2 9.3v7.4c0 .8.5 1.3 1.3 1.3h17.4c.8 0 1.3-.5 1.3-1.3V9.3zM21 17H3V9h18v8z" fill-rule="nonzero"/><rect x="3" y="5" width="4" height="2" rx=".5"/><rect x="8" y="5" width="4" height="2" rx=".5"/><rect x="13" y="5" width="4" height="2" rx=".5"/>
          </g>
        </svg>
        <div class="gjs-block-label">Tabs</div>
      `,
        category: 'Components',
        content: `<div data-gjs-type="tabs" type="navigation">
        <div sticky-navbar-container>
<nav class="uk-navbar-container" uk-navbar >
    <div class="uk-navbar-left" ${navbarContainer}>
        <ul class="uk-navbar-nav" ${attrTabContainer} uk-switcher="connect: .uk-switcher">
            <li ${attrTab}><a href='#'>Tab 1</a></li>
            <li ${attrTab}><a href='#'>Tab 2</a></li>
            <li ${attrTab}><a href='#'>Tab 3</a></li>
        </ul>
    </div>
</nav>
</div>
<div id="component-nav" class="uk-switcher" data-gjs-type="tab-body" type="navigation"></div></div>`
    });

    bm.add('scrollable-navigation', {
        label: `
        <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill-rule="evenodd">
            <path d="M22 9.3c0-.8-.5-1.3-1.3-1.3H3.4C2.5 8 2 8.5 2 9.3v7.4c0 .8.5 1.3 1.3 1.3h17.4c.8 0 1.3-.5 1.3-1.3V9.3zM21 17H3V9h18v8z" fill-rule="nonzero"/><rect x="3" y="5" width="4" height="2" rx=".5"/><rect x="8" y="5" width="4" height="2" rx=".5"/><rect x="13" y="5" width="4" height="2" rx=".5"/>
          </g>
        </svg>
        <div class="gjs-block-label">Scrollable Navigation</div>
      `,
        category: 'Components',
        content: `<div data-gjs-type="tabs" type="scrollable">
        <div sticky-navbar-container>
<nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left" ${navbarContainer}>
        <ul class="uk-navbar-nav" ${attrTabContainer} uk-scrollspy-nav="closest: li; scroll: true">
            <li ${attrTab}><a href='#'>Tab 1</a></li>
            <li ${attrTab}><a href='#'>Tab 2</a></li>
            <li ${attrTab}><a href='#'>Tab 3</a></li>
        </ul>
    </div>
</nav>
</div>
<div id="component-nav" data-gjs-type="tab-body" type="scrollable"></div></div>`
    });
};

const attrTab = 'data-tab';
const attrTabs = 'data-tabs';
const attrTabContent = 'data-tab-content';
const attrTabContainer = 'data-tab-container';
const selectorTab = 'href';
const navbarContainer = 'data-navbar-container';

const templateTab = `<div>New Tab Content</div>`;
const templateTabScroll = `<div>
    <hr class="uk-margin-large">
    <h2 class="uk-h3 tm-heading-fragment">Lorem Ipsum</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla at volutpat diam ut. Volutpat est velit egestas dui id ornare arcu odio. Vitae elementum curabitur vitae nunc sed velit dignissim. Cras sed felis eget velit. Pellentesque elit eget gravida cum sociis natoque penatibus et magnis. Nulla at volutpat diam ut venenatis tellus in metus vulputate. Sit amet dictum sit amet justo donec. Eu scelerisque felis imperdiet proin fermentum leo vel orci. Ullamcorper malesuada proin libero nunc consequat interdum varius. Non pulvinar neque laoreet suspendisse interdum consectetur. Eget egestas purus viverra accumsan. Cursus in hac habitasse platea dictumst quisque. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Enim tortor at auctor urna nunc id cursus. Scelerisque fermentum dui faucibus in ornare quam viverra. Elit sed vulputate mi sit.</p> 
</div>`;


export default (domc, editor) => {
    const comps = editor.DomComponents;
    const defaultType = comps.getType('default');
    const defaultModel = defaultType.model;
    const linkType = comps.getType('link');
    const linkModel = linkType.model;

    const defaultView = defaultType.view;

    domc.addType('sticky-navbar-container', {
        model: defaultModel.extend({
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                name: 'Sticky Navbar Container',
                classes: ['uk-sticky'],
                draggable: false,
                copyable: false,
                removable: false,
                traits: [
                    {
                        type: 'checkbox',
                        label: 'Sticky Navbar',
                        name: 'sticky-navbar',
                        changeProp: 1
                    }
                ].concat(defaultModel.prototype.defaults.traits),
            }),
            init2() {
                this.listenTo(this, 'change:sticky-navbar', this.stickyNavbar);
                this.set('sticky-navbar', true);
            },
            stickyNavbar() {
                const state = this.get('sticky-navbar');
                if (state) {
                    let attrs = [];
                    attrs['uk-sticky'] = 'sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky;';
                    this.setAttributes(attrs);
                } else {
                    this.removeAttributes('uk-sticky');
                }
                UIkit.update(document.body, 'update');
            },

        },
            {
                isComponent(el) {
                    if (el.hasAttribute && el.hasAttribute('sticky-navbar-container')) {
                        return { type: 'sticky-navbar-container' };
                    }
                },
            }),

        view: defaultView,
    });

    domc.addType('navbar-container', {
        model: defaultModel.extend({
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                name: 'Navbar Container',
                draggable: false,
                copyable: false,
                removable: false,
                traits: [
                    {
                        type: 'class_select',
                        options: [
                            { value: 'uk-navbar-left', name: 'Left' },
                            { value: 'uk-navbar-center', name: 'Center' },
                            { value: 'uk-navbar-right', name: 'Right' }
                        ],
                        name: 'navbar-place',
                        label: 'Navigation Place'
                    }
                ].concat(defaultModel.prototype.defaults.traits),
            }),
            init2() {
            }
        },
            {
                isComponent(el) {
                    if (el.hasAttribute && el.hasAttribute(navbarContainer)) {
                        return { type: 'navbar-container' };
                    }
                },
            }),

        view: defaultView,
    });

    domc.addType('tab-body', {
        model: defaultModel.extend({
            defaults: {
                ...defaultModel.prototype.defaults,
                name: 'Tab Body',
                draggable: false,
                copyable: false,
                removable: false,
            },

            init2() {
                const attrs = this.getAttributes();
                attrs['tab-body'] = 1;
                this.setAttributes(attrs);
                this.addClass('tab-body');
            }
        }, {
            isComponent(el) {
                if (el.hasAttribute && el.hasAttribute('tab-body')) {
                    return { type: 'tab-body' };
                }
            },
        }),

        view: defaultView,
    });

    domc.addType('tabs', {
        model: defaultModel.extend({
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                name: 'Tabs',
                'attr-tabs': attrTabs,
                'attr-tab': attrTab,
                'attr-tab-content': attrTabContent,
                'class-tab-active': 'tab-active',
                'selector-tab': selectorTab,
            }),
            init2() {
                const attrs = this.getAttributes();
                attrs[attrTabs] = 1;
                this.setAttributes(attrs);

            }
        }, {
            isComponent(el) {
                if (el.hasAttribute && el.hasAttribute(attrTabs)) {
                    return { type: 'tabs' };
                }
            },
        }),

        view: defaultView.extend({

            onRender() {
                const tabContainer = this.model.find(`[${attrTabContainer}]`)[0];
                const model = this.model;
                tabContainer.getAttributes()
                tabContainer && tabContainer.components().each(tab => {
                    tabContainer.onAdd(tab, model);
                });
            }
        })
    });

    domc.addType('tab-content', {
        model: defaultModel.extend({
            defaults: {
                ...defaultModel.prototype.defaults,
                name: 'Tab Content',
                draggable: false,
                copyable: false,
                removable: true,
            },

            init2() {
                const attrs = this.getAttributes();
                attrs[attrTabContent] = 1;
                this.setAttributes(attrs);
                this.addClass('tab-container');
            }
        }, {
            isComponent(el) {
                if (el.hasAttribute && el.hasAttribute(attrTabContent)) {
                    return { type: 'tab-content' };
                }
            },
        }),

        view: defaultView,
    });

    domc.addType('tab-container', {
        model: defaultModel.extend({
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                name: 'Tab Container',
                draggable: `[${attrTabs}]`,
                droppable: `[${attrTab}]`,
                classes: ['uk-navbar-container'],
                copyable: false,
                removable: false,
            }),
            init2() {
                const attrs = this.getAttributes();
                attrs[attrTabContainer] = 1;
                attrs['uk-navbar'] = '';
                this.setAttributes(attrs);
                const tabs = this.components();
                this.listenTo(tabs, 'add', this.onAdd);
                this.listenTo(tabs, 'remove', this.onRemove);
            },
            onRemove(model, value, opts = {}) {
                const tabContent = model.tabContent;

                // I'll remove the tabContent only if I'm sure that tab is
                // removed from the collection
                tabContent && setTimeout(() => {
                    const coll = model.collection;
                    const tabColl = tabContent.collection;
                    !coll && tabColl && tabColl.remove(tabContent);
                    UIkit.update(document.body, 'update');
                }, 0);
            },

            onAdd(model, value, opts = {}) {
                const attrs = model.getAttributes();

                if (!model.tabContent && !opts.avoidStore) {
                    const selCont = attrs[selectorTab];
                    let modelTabs;
                    if (value.attributes && value.attributes.attributes['data-tabs']) {
                        modelTabs = value.find(`[tab-body]`)[0];
                    } else {
                        modelTabs = editor.getWrapper().find('[tab-body]')[0]
                    }
                    const tabContEl = selCont && modelTabs.view.$el.find(selCont);

                    // If the tab content was found I'll attach it to the tab model
                    // otherwise I'll create e new one
                    if (tabContEl && tabContEl.length) {
                        model.tabContent = tabContEl.data('model');
                    } else if (modelTabs.components) {
                        let template = templateTab;
                        if (modelTabs.getAttributes().type === 'scrollable') {
                            template = templateTabScroll;
                        }
                        const tabContent = modelTabs.components().add({
                            type: 'tab-content',
                            components: template,
                        });
                        const id = tabContent.getId();
                        tabContent.addAttributes({ id });
                        model.addAttributes({ [selectorTab]: `#${id}` });
                        model.tabContent = tabContent;

                            model.components().models[0].addAttributes({ [selectorTab]: `#${id}` });
                     
                        UIkit.update(document.body, 'update');
                    }
                }
            }
        }, {
            isComponent(el) {
                if (el.hasAttribute && el.hasAttribute(attrTabContainer)) {
                    return { type: 'tab-container' };
                }
            },
        }),

        view: defaultView,
    });

    domc.addType('tab', {
        model: defaultModel.extend({
            defaults: {
                ...defaultModel.prototype.defaults,
                name: 'Tab',
                draggable: `[${attrTabContainer}]`,
                droppable: false,
            },

            init2() {
                const attrs = this.getAttributes();
                attrs[attrTab] = 1;
                this.setAttributes(attrs);
                this.addClass('tab');
            },
            clone() {
                const cloned = linkModel.prototype.clone.apply(this, arguments);
                cloned.addAttributes({ [selectorTab]: '' });
                return cloned;
            }

        }, {
            isComponent(el) {
                if (el.hasAttribute && el.hasAttribute(attrTab)) {
                    return { type: 'tab' };
                }
            },
        }),
        view: defaultView,
    });
}
