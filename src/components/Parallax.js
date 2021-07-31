import UIkit from "uikit";

export const Parallax = (bm, c) => {
  bm.add('Parallax', {
    attributes: {
      class: 'fa fa-image'
    },
    label: 'Parallax',
    category: 'Parallax',
    content: `<div uk-parallax>
        <h1>Test</h1>
        </div>`
  });
};

export const ParallaxTarget = (bm, c) => {
  bm.add('ParallaxTarget', {
    attributes: {
      class: 'fa fa-image'
    },
    label: 'Parallax with Target',
    category: 'Parallax',
    content: `<div id="test-target" class="uk-height-large uk-background-cover uk-light uk-flex" uk-parallax="bgy: -200" style="background-image: url('https://via.placeholder.com/1200x800/0000FF/808080');">
    <h1 class="uk-width-1-2-at-m uk-text-center uk-margin-auto uk-margin-auto-vertical" uk-parallax="target: #test-target; y: 100,0">Headline</h1>
      </div>`
  });
};

export const ParallaxHeadline = (bm, c) => {
  bm.add('ParallaxHeadline', {
    attributes: {
      class: 'fa fa-image'
    },
    label: 'Parallax Headline',
    category: 'Parallax',
    content: `<div class="uk-height-large uk-background-cover uk-light uk-flex" uk-parallax="bgy: -200" style="background-image: url('https://via.placeholder.com/1200x800/0000FF/808080');">
    <h1 class="uk-width-1-2-at-m uk-text-center uk-margin-auto uk-margin-auto-vertical">Headline</h1>
</div>`
  });
}

export const ParallaxMulti = (bm, c) => {
  bm.add('ParallaxMulti', {
    attributes: {
      class: 'fa fa-image'
    },
    label: 'Parallax Multi',
    category: 'Parallax',
    content: `<div class="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex uk-flex-top" style="background-image: url('https://via.placeholder.com/1200x800/0000FF/808080');">
    <div class="uk-width-1-2-at-m uk-text-center uk-margin-auto uk-margin-auto-vertical">
        <h1 uk-parallax="opacity: 0,1,1; y: -100,0,0; x: 100,100,0; scale: 2,1,1; viewport: 0.5;">Headline</h1>
        <p uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; viewport: 0.5;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</div>`
  });
}

export const ParallaxViewport = (bm, c) => {
  bm.add('ParallaxViewport', {
    attributes: {
      class: 'fa fa-image'
    },
    label: 'Parallax Viewport',
    category: 'Parallax',
    content: `<div class="uk-height-large uk-background-cover uk-light uk-flex uk-flex-top" style="background-image: url('https://via.placeholder.com/1200x800/0000FF/808080');">
    <h1 class="uk-width-1-2-at-m uk-text-center uk-margin-auto uk-margin-auto-vertical" uk-parallax="opacity: 0,1; y: 100,0; viewport: 0.5">Headline</h1>
</div>`
  });
}

export const ParallaxNesting = (bm, c) => {
  bm.add('ParallaxNesting', {
    attributes: {
      class: 'fa fa-image'
    },
    label: 'Parallax Nesting',
    category: 'Parallax',
    content: `<div class="uk-height-large uk-background-cover uk-light uk-flex uk-flex-top" uk-parallax="bgy: -200" style="background-image: url('https://via.placeholder.com/1200x800/0000FF/808080');">
    <h1 class="uk-width-1-2-at-m uk-text-center uk-margin-auto uk-margin-auto-vertical" uk-parallax="y: 100,0">Headline</h1>
</div>`
  });
}


export default (domc, editor) => {
  const comps = editor.DomComponents;
  const defaultType = comps.getType('default');
  const defaultModel = defaultType.model;

  const defaultView = defaultType.view;

  domc.addType('uk-parallax', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        name: 'Parallax',
        traits: [
          {
            type: 'text',
            label: 'target',
            name: 'target',
            changeProp: 1
          },
          {
            label: 'opacity',
            name: 'opacity',
            changeProp: 1,
            type: 'text',
          },
          {
            type: 'text',
            label: 'Animate translateX',
            name: 'x',
            changeProp: 1
          },
          {
            type: 'text',
            label: 'Animate translatey',
            name: 'y',
            changeProp: 1
          },
          {
            type: 'text',
            label: 'Animate background X position.',
            name: 'bgx',
            changeProp: 1
          },
          {
            type: 'text',
            label: 'Animate background Y position.',
            name: 'bgy',
            changeProp: 1
          },
          {
            type: 'text',
            label: 'Scale',
            name: 'scale',
            changeProp: 1
          },
          {
            type: 'number',
            label: 'Viewport',
            name: 'viewport',
            changeProp: 1,
            placeholder: '0-1',
            min: 0, // Minimum number value
            max: 1, // Maximum number value
            step: 0.1,
          },
        ].concat(defaultModel.prototype.defaults.traits)
      }),
      init2() {
        this.listenTo(this, 'change:opacity', this.opacity);
        this.listenTo(this, 'change:x', this.x);
        this.listenTo(this, 'change:y', this.y);
        this.listenTo(this, 'change:bgx', this.bgx);
        this.listenTo(this, 'change:bgy', this.bgy);
        this.listenTo(this, 'change:scale', this.scale);
        this.listenTo(this, 'change:viewport', this.viewport);

        const attributes = this.getAttributes()['uk-parallax']
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
      opacity() { this.updateParallax('opacity') },
      x() { this.updateParallax('x') },
      y() { this.updateParallax('y') },
      scale() { this.updateParallax('scale') },
      viewport() { this.updateParallax('viewport') },
      updateParallax(attribut) {
        const state = this.get(attribut);

        let parallax = this.getAttributes()['uk-parallax'];

        if (!parallax) {
          parallax = '';
        }
        if (parallax.includes(` ${attribut}: `)) {
          parallax = parallax.replace(new RegExp(` ${attribut}: ([^;]+);`), ` ${attribut}: ${state};`);
        } else if (state) {
          parallax += ` ${attribut}: ${state};`;
        }
        let attrs = [];
        attrs['uk-parallax'] = parallax
        this.addAttributes(attrs);
        UIkit.update(document.body, 'update');
      }
    }, {
      isComponent(el) {
        if (el.hasAttribute && el.hasAttribute('uk-parallax')) {
          return { type: 'uk-parallax' };
        }
      },
    }),

    view: defaultView,
  });
}
