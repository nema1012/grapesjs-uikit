
export const CardBlock = (bm, c) => {
  bm.add('card', {
    label: `
            <i class="fa fa-newspaper-o"></i>
            <div>${c.labels.card}</div>
        `,
    category: 'Components',
    content: '<div class="uk-card uk-card-default"><div class="uk-card-body"><p>Card Body</p></div></div>'
  });
};

export const CardBlockHorizonzal = (bm, c) => {
  bm.add('card-horizontal', {
    label: `
            <i class="fa fa-newspaper-o"></i>
            <div>${c.labels.card_horizontal}</div>
        `,
    category: 'Components',
    content: '<div class="uk-card uk-grid uk-card-default"><div class="uk-card-body"><p>Card Body</p></div></div>'
  });
};

export default (domc, editor) => {
  const comps = editor.DomComponents;
  const defaultType = comps.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  const imageType = domc.getType('image');
  const imageModel = imageType.model;
  const imageView = imageType.view;

  domc.addType('card', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        'name': 'Card',
        classes: ['uk-card', 'uk-card-default'],
        traits: [
          {
            type: 'checkbox',
            label: 'Image Top',
            name: 'card-img-top',
            changeProp: 1
          },
          {
            type: 'checkbox',
            label: 'Image Bottom',
            name: 'card-img-bottom',
            changeProp: 1
          },
          {
            type: 'checkbox',
            label: 'Header',
            name: 'card-header',
            changeProp: 1
          },
          {
            type: 'checkbox',
            label: 'Title',
            name: 'card-title',
            changeProp: 1
          },
          {
            type: 'checkbox',
            label: 'Image',
            name: 'card-img',
            changeProp: 1
          },
          {
            type: 'checkbox',
            label: 'Image Overlay',
            name: 'card-img-overlay',
            changeProp: 1
          },
          {
            type: 'checkbox',
            label: 'Body',
            name: 'card-body',
            changeProp: 1
          },
          {
            type: 'checkbox',
            label: 'Footer',
            name: 'card-footer',
            changeProp: 1
          },
          {
            type: 'class_select',
            options: [
              { value: '', name: 'Default' },
              { value: 'uk-card-hover', name: 'Hover' }
            ],
            label: 'Hover'
          },
          {
            type: 'class_select',
            options: [
              { value: '', name: 'None' },
              { value: 'uk-card-default', name: 'Default' },
              { value: 'uk-card-primary', name: 'Primary' },
              { value: 'uk-card-secondary', name: 'Secondary' }

            ],
            label: 'Cart Style'
          },
        ].concat(defaultModel.prototype.defaults.traits)
      }),
      init2() {
        this.components().forEach(comp => {
          this.set(comp.attributes.type.replace(/_/g, '-').replace(/image/g, 'img'), true);
        });

        this.listenTo(this, 'change:card-img-top', this.cardImageTop);
        this.listenTo(this, 'change:card-img-left', this.cardImageLeft);
        this.listenTo(this, 'change:card-img-right', this.cardImageRight);
        this.listenTo(this, 'change:card-img-bottom', this.cardImageBottom);
        this.listenTo(this, 'change:card-header', this.cardHeader);
        this.listenTo(this, 'change:card-img', this.cardImage);
        this.listenTo(this, 'change:card-img-overlay', this.cardImageOverlay);
        this.listenTo(this, 'change:card-body', this.cardBody);
        this.listenTo(this, 'change:card-footer', this.cardFooter);
        this.listenTo(this, 'change:card-title', this.cardTitle);
        this.components().comparator = 'card-order';
      //  this.set('card-body', true);
      },
      cardImageRight() { this.createCardComponent('card-img-right'); },
      cardImageLeft() { this.createCardComponent('card-img-left'); },
      cardImageTop() { this.createCardComponent('card-img-top'); },
      cardImageBottom() { this.createCardComponent('card-img-bottom'); },
      cardHeader() { this.createCardComponent('card-header'); },
      cardImage() { this.createCardComponent('card-img'); },
      cardImageOverlay() { this.createCardComponent('card-img-overlay'); },
      cardBody() { this.createCardComponent('card-body'); },
      cardTitle() { this.createCardComponent('card-title'); },
      cardFooter() { this.createCardComponent('card-footer'); },
      createCardComponent(prop) {
        const state = this.get(prop);
        const type = prop.replace(/-/g, '_').replace(/img/g, 'image')
        let children = this.components();
        let existing = children.filter(function (comp) {
          return comp.attributes.type === type;
        })[0]; // should only be one of each.

        if (state && !existing) {
          var comp = children.add({
            type: type
          });
          let comp_children = comp.components();
          if (prop.indexOf('card-img') != -1) {
            comp_children.add({
              type: 'card_image',
            });
          }
          if (prop === 'card-header') {
            comp_children.add({
              type: 'header',
              tagName: 'div',
              classes: ['uk-card-header'],
              content: 'Card Header'
            });
          }
          if (prop === 'card-title') {
            comp_children.add('<div data-gjs-type="card_title"><p>Some quick example text to build on the card title and make up the bulk of the card\'s content.</p></div>');
          }
          if (prop === 'card-body') {
            comp_children.add('<div class="uk-card-body"><p>Card Body</p></div>');
          }
          if (prop === 'card-footer') {
            comp_children.add('<div class="uk-card-footer"><p>Card Footer</p></div>');
          }
          this.order();
        } else if (!state && existing) {
          existing.destroy();
        }
      },
      order() {

      }
    }, {
      isComponent(el) {
        if (el && el.classList && el.classList.contains('uk-card')) {
          return { type: 'card' };
        }
      }
    }),
    view: defaultView
  });
  

  domc.addType('card_image', {
    model: imageModel.extend({
      defaults: Object.assign({}, imageModel.prototype.defaults, {
        'name': 'Card Image',
        classes: [],
      })
    }, {
      isComponent(el) {
        if (el && el.classList && el.classList.contains('cartd_image')) {
          return { type: 'card_image' };
        }
      }
    }),
    view: imageView
  });

  domc.addType('card_image_top', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        'name': 'Image Container',
        classes: ['uk-card-media-top', 'center'],
        'card-order': 1
      }),
    }, {
      isComponent(el) {
        if (el && el.classList && el.classList.contains('uk-card-media-top')) {
          return { type: 'card_image_top' };
        }
      }
    }),
    view: defaultView
  });

  domc.addType('card_image_bottom', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        'name': 'Card Image Bottom',
        classes: ['uk-card-media-bottom', 'uk-cover-container', 'center'],
        'card-order': 10
      }),
    }, {
      isComponent(el) {
        if (el && el.classList && el.classList.contains('uk-card-media-bottom')) {
          return { type: 'card_image_bottom' };
        }
      }
    }),
    view: defaultView
  });

  domc.addType('card_image_left', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        'name': 'Card Image Left',
        classes: ['uk-card-media-left', 'uk-cover-container'],
        'card-order': 3
      }),
    }, {
      isComponent(el) {
        if (el && el.classList && el.classList.contains('uk-card-media-left')) {
          return { type: 'card_image_left' };
        }
      }
    }),
    view: defaultView
  });

  domc.addType('card_image_right', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        'name': 'Card Image Right',
        classes: ['uk-flex-last-at-s', 'uk-card-media-right', 'uk-cover-container'],
        'card-order': 3
      }),
    }, {
      isComponent(el) {
        if (el && el.classList && el.classList.contains('uk-card-media-right')) {
          return { type: 'card_image_right' };
        }
      }
    })
  });


  domc.addType('card_header', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        'name': 'Card Header',
        'card-order': 2
      })
    }, {
      isComponent(el) {
        if (el && el.classList && el.classList.contains('uk-card-header')) {
          return { type: 'card_header' };
        }
      }
    }),
    view: defaultView
  });

  domc.addType('card_title', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        'name': 'Card Title',
        'card-order': 3
      })
    }, {
      isComponent(el) {
        if (el && el.classList && el.classList.contains('uk-card-title')) {
          return { type: 'card_title' };
        }
      }
    }),
    view: defaultView
  });

  domc.addType('card_image_overlay', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        'name': 'Card Image Overlay',
        'classes': ['card-img-overlay'],
        'card-order': 4
      })
    }, {
      isComponent(el) {
        if (el && el.classList && el.classList.contains('card-img-overlay')) {
          return { type: 'card_image_overlay' };
        }
      }
    }),
    view: defaultView
  });

  domc.addType('card_body', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        'name': 'Card Body',
        'card-order': 5
      })
    }, {
      isComponent(el) {
        if (el && el.classList && el.classList.contains('uk-card-body')) {
          return { type: 'card_body' };
        }
      }
    }),
    view: defaultView
  });

  domc.addType('card_footer', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        'name': 'Card Footer',
        'card-order': 6
      })
    }, {
      isComponent(el) {
        if (el && el.classList && el.classList.contains('uk-card-footer')) {
          return { type: 'card_footer' };
        }
      }
    }),
    view: defaultView
  });
}
