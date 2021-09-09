import UIkit from "uikit";
const img_src_default = 'https://via.placeholder.com/1200x800/0000FF/808080';

export const Image = (bm, c) => {
  bm.add('uk-image', {
    attributes: {
      class: 'fa fa-image'
    },
    label: 'Image',
    category: 'Media',
    content: `<div data-gjs-type="image-container" class="uk-inline"><img data-gjs-type="uk-image" src="https://via.placeholder.com/1200x800/0000FF/808080" uk-img></div>`
  });
};

export const BackgroundImage = (bm, c) => {
  bm.add('backgroundImage', {
    attributes: {
      class: 'fa fa-image'
    },
    label: 'BackgroundImage',
    category: 'Media',
    content: `<div class="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light background-image" uk-img data-src="${img_src_default}">
    <h1>Background Image</h1>
  </div>`
  });
};

export const ImageSlider = (bm, c) => {
  bm.add('imageSlider', {
    attributes: {
      class: 'fa fa-image'
    },
    label: 'Image Slider',
    category: 'Media',
    content: `<div uk-slideshow=" animation: slide;">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow-container>
  <ul class="uk-slideshow-items uk-height-viewport" uk-height-viewport=" offset-top: true; offset-bottom: 30">
      <li data-gjs-type="image-container">
          <img data-gjs-type="uk-image" src="https://via.placeholder.com/1200x800/0000FF/808080" width="1800" height="1200" alt="" uk-cover>
      </li>
      <li data-gjs-type="image-container">
          <img data-gjs-type="uk-image" src="https://via.placeholder.com/1200x800/FF0000/FFFFFF" width="1800" height="1200" alt="" uk-cover>
      </li>
      <li data-gjs-type="image-container">
          <img data-gjs-type="uk-image" src="https://via.placeholder.com/1200x800/FFFF00/000000" width="1800" height="1200" alt="" uk-cover>
      </li>
  </ul>
  </div>
</div>`
  });
}

export const UcCover = (bm, c) => {
  bm.add('uccover', {
    attributes: {
      class: 'fa fa-image'
    },
    label: 'UK Cover',
    category: 'Media',
    content: `<div class="uk-cover-container uk-height-medium">
    <img src="https://via.placeholder.com/1200x800/FFFF00/000000" alt="" uk-cover>
    </div>`
  });
}

export const ResponsiveHeight = (bm, c) => {
  bm.add('ResponsiveHeight', {
    attributes: {
      class: 'fa fa-image'
    },
    label: 'Responsive Height',
    category: 'Media',
    content: `<div class="uk-cover-container">
    <canvas width="400" height="200"></canvas>
    <img src="https://via.placeholder.com/1200x800/FFFF00/000000" alt="" uk-cover>
</div>`
  });
}

export const Lightbox = (bm, c) => {
  bm.add('lightbox', {
    attributes: {
      class: 'fa fa-image'
    },
    label: 'Lightbox',
    category: 'Media',
    content: `<div uk-lightbox=" animation: slide;">
    <div uk-grid class="uk-child-width-1-3-at-m">
    <div>
        <a class="uk-inline" href="https://via.placeholder.com/1200x800/FFFF00/000000.png" data-caption="Caption 1" uk-lightbox-image>
            <img src="https://via.placeholder.com/1200x800/FFFF00/000000.png" alt="">
        </a>
    </div>
    <div>
        <a class="uk-inline" href="https://via.placeholder.com/1200x800/22FF00/000000.jpg" data-caption="Caption 2" uk-lightbox-image>
            <img src="https://via.placeholder.com/1200x800/22FF00/000000.jpg" alt="">
        </a>
    </div>
    <div>
        <a class="uk-inline" href="https://via.placeholder.com/1200x800/665533/000000.png" data-caption="Caption 3" uk-lightbox-image>
            <img src="https://via.placeholder.com/1200x800/665533/000000.png" alt="">
        </a>
    </div>
    </div>
</div>`
  });
}

export const SliderLightbox = (bm, c) => {
  bm.add('sliderLightbox', {
    attributes: {
      class: 'fa fa-image'
    },
    label: 'Slider with Lightbox',
    category: 'Media',
    content: `<div uk-slideshow=" animation:slide;">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow-container>
    <div uk-lightbox=" animation: slide">
        <ul class="uk-slideshow-items uk-height-viewport">
          <li> 
            <a class="uk-inline" href="https://via.placeholder.com/1200x800/FFFF00/000000.png" data-caption="Caption 1" uk-lightbox-image>
              <img src="https://via.placeholder.com/1200x800/FFFF00/000000.png" alt="">
            </a>
          </li>
          <li>
            <a class="uk-inline" href="https://via.placeholder.com/1200x800/22FF00/000000.jpg" data-caption="Caption 2" uk-lightbox-image>
              <img src="https://via.placeholder.com/1200x800/22FF00/000000.jpg" alt="">
             </a>
          </li>
          <li>
           <a class="uk-inline" href="https://via.placeholder.com/1200x800/665533/000000.png" data-caption="Caption 3" uk-lightbox-image>
            <img src="https://via.placeholder.com/1200x800/665533/000000.png" alt="">
          </a>
          </li>
        </ul>
      </div>
          <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
    </div>
    </div>
    </div>`
  });
}

export default (domc, editor) => {
  const comps = editor.DomComponents;
  const defaultType = comps.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  const imageType = domc.getType('image');
  const imageModel = imageType.model;
  const imageView = imageType.view;
  const linkType = domc.getType('link');
  const linkModel = linkType.model;
  const linkView = linkType.view;

  domc.addType('uk-image', {
    model: imageModel.extend({
      defaults: Object.assign({}, imageModel.prototype.defaults, {
        'name': 'Image',
        tagName: 'img',
        fallback: null,
        traits: [
          {
            type: 'text',
            label: 'Source (URL)',
            name: 'src'
          }
        ].concat(imageModel.prototype.defaults.traits)
      }),
    }, {
      isComponent: function (el) {
        if (el && el.tagName === 'IMG') {
          return { type: 'uk-image' };
        }
      }
    }),
    view: imageView
  });

  domc.addType('image-container', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        'name': 'Image Container',
        traits: [
          {
            type: 'checkbox',
            label: 'Image Overlay',
            name: 'image-overlay',
            changeProp: 1
          },
          {
            type: 'class_select',
            options: [
              { value: '', name: 'None' },
              { value: 'uk-transition-toggle', name: 'Transition' },
              { value: 'uk-visible-toggle', name: 'Visible' },
            ],
            label: 'Toggle overlay'
          },
        ].concat(defaultModel.prototype.defaults.traits)
      }),
      init2() {
        this.listenTo(this, 'change:image-overlay', this.updateimageOverlay);
      },
      updateimageOverlay() { 
        const state = this.get('image-overlay');
        this.addClass('uk-transition-toggle');
        let children = this.components();
        let existing = children.filter(function (comp) {
          return comp.attributes.type === 'image-overlay';
        })[0]; // should only be one of each.

        if (state && !existing) {
          children.add({
            type: `<div class="image-overlay">
            <h2 class="uk-margin-remove">Center</h2>
            <p class="uk-margin-remove">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>`
          });
        } else if (!state && existing) {
          existing.destroy();
        }
       },
    }, {
      isComponent: function (el) {
        if (el && el.classList && el.classList.contains('image-container')) {
          return { type: 'image-container' };
        }
      }
    }),
    view: defaultView
  });

  domc.addType('image-overlay', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        'name': 'Image Text',
        tagName: 'div',
        classes: ['uk-position-center', 'uk-position-small', 'uk-text-center', 'uk-light', 'image-overlay'],
        traits: [
          {
            type: 'class_select',
            options: [
              { value: 'uk-position-center', name: 'Center' },
              { value: 'uk-position-bottom', name: 'Bottom' },
              { value: 'uk-position-top', name: 'Top' },
              { value: 'uk-position-left', name: 'Left' },
              { value: 'uk-position-right', name: 'Right' }
            ],
            label: 'Text Position'
          },
          {
            type: 'class_select',
            options: [
              { value: '', name: 'None' },
              { value: 'uk-overlay-default', name: 'Overlay Default' },
              { value: 'uk-overlay-primary', name: 'Overlay Primary' },
            ],
            label: 'Overlay'
          },
          {
            type: 'class_select',
            options: [
              { value: '', name: 'None' },
              { value: 'uk-position-small', name: 'Small Position' },
              { value: 'uk-position-medium', name: 'Medium Position' },
              { value: 'uk-position-large', name: 'Large Position' },
            ],
            label: 'Overlay'
          },
          {
            type: 'class_select',
            options: [
              { value: '', name: 'None' },
              { value: 'uk-transition-fade', name: 'Fade' },
              { value: 'uk-transition-scale-up', name: 'Scale up' },
              { value: 'uk-transition-scale-down', name: 'Scale down' },
              { value: 'uk-transition-slide-bottom', name: 'Bottom' },
              { value: 'uk-transition-slide-top', name: 'Top' },
              { value: 'uk-transition-slide-left', name: 'Left' },
              { value: 'uk-transition-slide-right', name: 'Right' },
              { value: 'uk-transition-slide-bottom-small', name: 'Bottom Small' },
              { value: 'uk-transition-slide-top-small', name: 'Top Small' },
              { value: 'uk-transition-slide-left-small', name: 'Left Small' },
              { value: 'uk-transition-slide-right-small', name: 'Right Small' },
              { value: 'uk-transition-slide-bottom-medium', name: 'Bottom Medium' },
              { value: 'uk-transition-slide-top-medium', name: 'Top Medium' },
              { value: 'uk-transition-slide-left-medium', name: 'Left Medium' },
              { value: 'uk-transition-slide-right-medium', name: 'Right Medium' },
            ],
            label: 'Text Slide'
          },
        ].concat(defaultModel.prototype.defaults.traits)
      }),
      init2() {
      }
    }, {
      isComponent: function (el) {
        if (el && el.classList && el.classList.contains('image-overlay')) {
          return { type: 'image-overlay' };
        }
      }
    }),
    view: defaultView
  });

  domc.addType('uk-slideshow', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        traits: [
          {
            type: 'select',
            label: 'Animaton',
            name: 'animation',
            options: [
              { value: 'slide', name: 'Slide' },
              { value: 'fade', name: 'Fade' },
              { value: 'scale', name: 'Scale' },
              { value: 'pull', name: 'Pull' },
              { value: 'push', name: 'Push' }
            ],
            changeProp: 1
          },
          {
            type: 'checkbox',
            label: 'Autoplay',
            name: 'autoplay',
            changeProp: 1
          },
          {
            type: 'checkbox',
            label: 'Dotnav',
            name: 'dotnav',
            changeProp: 1
          },
          {
            type: 'checkbox',
            label: 'Navigation',
            name: 'navigation',
            changeProp: 1
          }
        ].concat(defaultModel.prototype.defaults.traits)
      }),
      init2() {
        const child = this.components();
        this.listenTo(child, 'add', this.refresh);
        this.listenTo(child, 'remove', this.refresh);
        this.listenTo(this, 'change:animation', this.updateAnimation);
        this.listenTo(this, 'change:autoplay', this.updateAutoplay);
        this.listenTo(this, 'change:dotnav', this.updateDotnav);
        this.listenTo(this, 'change:navigation', this.updateNavigation);

        const attributes = this.getAttributes()['uk-slideshow']
        if (attributes) {
          const attrs = attributes.split(';');

          for (let idx in attrs) {
            const attribute = attrs[idx].split(':');
            if (attribute.length > 1) {
              this.set(attribute[0].replace(/\s/g, ''), attribute[1].replace(/\s/g, ''));
            }
          }
        };

        this.set('navigation', true);
      },
      updateAnimation() { this.updateSlideShow('animation') },
      updateAutoplay() { this.updateSlideShow('autoplay') },
      updateSlideShow(attribut) {
        const state = this.get(attribut);
        let slideShow = this.getAttributes()['uk-slideshow'];

        if (!slideShow) {
          slideShow = '';
        }
        if (state === '' && item.includes(` ${attribut}: `)) {
          item = item.replace(new RegExp(` ${attribut}: ([^;]+);`), '');
        } else if (slideShow.includes(attribut)) {
          slideShow = slideShow.replace(new RegExp(` ${attribut}: ([^;]+);`), ` ${attribut}: ${state};`);
        } else if (state) {
          slideShow += ` ${attribut}: ${state};`;
        }

        let attrs = [];
        attrs['uk-slideshow'] = slideShow
        this.addAttributes(attrs);

        this.refresh();
      },
      updateNavigation() {
        const navigation = `<div uk-slideshow-items-navigation><a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
          <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a></div>`

        const state = this.get('navigation');
        let container = this.components().filter(function (comp) {
          return comp.attributes.attributes['uk-slideshow-container'] === '';
        })[0];

        let existing = container.components().filter(function (comp) {
          return comp.attributes.content.includes('uk-slideshow-items-navigation');
        });

        if (state && (!existing || existing.length === 0)) {
          var comp = container.components().add({
            content: navigation
          });
        } else if (!state && existing) {
          for (let ex of existing) {
            ex.destroy();
          }
        }

        this.refresh();
      },
      updateDotnav() {
        const state = this.get('dotnav');
        let children = this.components();
        let existing = children.filter(function (comp) {
          return comp.attributes.content.includes('uk-dotnav');
        })[0]; // should only be one of each.

        if (state && !existing) {
          var comp = children.add({
            content: '<ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin" uk-dotnav></ul>'
          });
        } else if (!state && existing) {
          existing.destroy();
        }

        this.refresh();
      },
      refresh() {
        UIkit.update(document.body, 'update');
      }
    }, {
      isComponent: function (el) {
        if (el && el.hasAttribute && el.hasAttribute('uk-slideshow')) {
          return { type: 'uk-slideshow' };
        }
      }
    }),
    view: defaultView
  });

  domc.addType('slideshow-container', {
    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        draggable: false,
        copyable: false,
        removable: false,
      },
    }, {
      isComponent(el) {
        if (el.hasAttribute && el.hasAttribute('uk-slideshow-container')) {
          return { type: 'slideshow-container' };
        }
      },
    }),

    view: defaultView,
  });

  domc.addType('background-image', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        classes: [],
        traits: [
          {
            type: 'href',
            label: 'Source (URL)',
            name: 'data-src',
            changeProp: 1
          },
        ].concat(defaultModel.prototype.defaults.traits)
      }),
      init2() {
        this.listenTo(this, 'change:data-src', this.updateImage);
      },
      updateImage() {
        const state = this.get('data-src');
        let attrs = [];
        attrs['data-src'] = state;
        this.addAttributes(attrs);

        UIkit.update(document.body, 'update');
      }
    },
      {
        isComponent(el) {
          if (el && el.classList && el.classList.contains('background-image')) {
            return { type: 'background-image' };
          }
        }
      }),
    view: defaultView
  });

  domc.addType('lightbox', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        'name': 'Lightbox',
        traits: [
          {
            type: 'select',
            options: [
              { value: 'slide', name: 'slide' },
              { value: 'fade', name: 'fade' },
              { value: 'scale', name: 'scale' },
            ],
            label: 'Animation',
            name: 'animation',
            changeProp: 1
          },
          {
            type: 'number',
            label: 'autoplay',
            name: 'autoplay',
            changeProp: 1,
            step: 10,
          },
          {
            type: 'number',
            label: 'autoplay-interval',
            name: 'autoplay-interval',
            changeProp: 1,
            step: 10,
          },
          {
            type: 'checkbox',
            label: 'pause-on-hover',
            name: 'pause-on-hover',
            changeProp: 1
          },
        ].concat(defaultModel.prototype.defaults.traits)
      }),
      init2() {
        const child = this.components();

        this.listenTo(this, 'change:animation', this.updateAnimation);
        this.listenTo(this, 'change:autoplay', this.updateAutoplay);
        this.listenTo(this, 'change:autoplay-interval', this.updateAnimationInterval);
        this.listenTo(this, 'change:pause-on-hover', this.updatePauseOnHover);
        this.listenTo(child, 'add', this.refresh);

        const attributes = this.getAttributes()['uk-lightbox']
        if (attributes) {
          const attrs = attributes.split(';');

          for (let idx in attrs) {
            const attribute = attrs[idx].split(':');
            if (attribute.length > 1) {
              this.set(attribute[0].replace(/\s/g, ''), attribute[1].replace(/\s/g, ''));
            }
          }
        };
      },
      updateAnimation() {this.update('animation')},
      updateAutoplay() {this.update('autoplay')},
      updateAnimationInterval() {this.update('autoplay-interval')},
      updatePauseOnHover() {this.update('pause-on-hover')},
      refresh() {
        UIkit.update(document.body, 'update');
      },
      update(attribut) {
        const state = this.get(attribut);

        let item = this.getAttributes()['uk-lightbox'];

        if (!item) {
          item = '';
        }
        if (state === '' && item.includes(` ${attribut}: `)) {
          item = item.replace(new RegExp(` ${attribut}: ([^;]+);`), '');
        } else if (item.includes(` ${attribut}: `)) {
          item = item.replace(new RegExp(` ${attribut}: ([^;]+);`), ` ${attribut}: ${state};`);
        } else if (state && state != '') {
          item += ` ${attribut}: ${state};`;
        }
        let attrs = [];
        attrs['uk-lightbox'] = item
        this.addAttributes(attrs);
        this.refresh();
      }
    }, {
      isComponent: function (el) {
        if (el.hasAttribute && el.hasAttribute('uk-lightbox')) {
          return { type: 'lightbox' };
        }
      }
    }),
    view: defaultView
  });

  domc.addType('uk-lightbox-image', {
    model: linkModel.extend({
      defaults: Object.assign({}, linkModel.prototype.defaults, {
        'name': 'lightbox-image',
        traits: [
          {
            type: 'text',
            label: 'Photo Text',
            name: 'data-caption',
            changeProp: 1
          }
        ].concat(linkModel.prototype.defaults.traits)
      }),
      init() {
        this.listenTo(this, 'change:data-caption', this.dataCaption);
        UIkit.update(document.body, 'update');
      },
      updateDataCaption() {this.update('data-caption')},
      update(attribut) {
        const state = this.get(attribut);
        let attrs = [];
        attrs['data-caption'] = state
        this.addAttributes(attrs);
        UIkit.update(document.body, 'update');
      }
    }, {
      isComponent: function (el) {
        if (el.hasAttribute && el.hasAttribute('uk-lightbox-image')) {
          return { type: 'uk-lightbox-image' };
        }
      }
    }),
    view: linkView
  });

}
