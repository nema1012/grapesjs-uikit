import UIkit from "uikit";

export const Grid = (bm, c) => {
  bm.add('grid', {
    label: 'grid',
    category: 'Grid',
    content: `<div class="uk-child-width-expand-at-s uk-text-center" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body"><p>Item</p></div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body"><p>Item</p></div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-card-body"><p>Item</p></div>
    </div>
</div>`
  });
};

export const NestedGrid = (bm, c) => {
  bm.add('nestedGrid', {
    label: 'Nested Grid',
    category: 'Grid',
    content: `<div class="uk-child-width-1-2 uk-text-center" uk-grid>
    <div>
        <div class="uk-card uk-card-default uk-card-body"><p>Item</p></div>
    </div>
    <div>
        <div class="uk-child-width-1-2 uk-text-center" uk-grid>
            <div>
                <div class="uk-card uk-card-primary uk-card-body"><p>Item</p></div>
            </div>
            <div>
                <div class="uk-card uk-card-primary uk-card-body"><p>Item</p></div>
            </div>
        </div>
    </div>
</div>>`
  });
};

export const GridDivider = (bm, c) => {
  bm.add('GridDivider', {
    label: 'Grid Divider',
    category: 'Grid',
    content: `<div class="uk-grid-divider uk-child-width-expand-at-s" uk-grid>
    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    <div>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
    <div>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
</div>`
  });
}

export const GridWitdh = (bm, c) => {
  bm.add('GridWitdh', {
    label: 'Grid Width',
    category: 'Grid',
    content: `<div class="uk-text-center" uk-grid>
    <div class="uk-width-auto-at-m">
        <div class="uk-card uk-card-default uk-card-body"<p>>Auto</p></div>
    </div>
    <div class="uk-width-1-3-at-m">
        <div class="uk-card uk-card-default uk-card-body"><p>1-3</p></div>
    </div>
    <div class="uk-width-expand-at-m">
        <div class="uk-card uk-card-default uk-card-body"><p>Expand</p></div>
    </div>
</div>`
  });
}

export const GridMasonry = (bm, c) => {
  bm.add('GridMasonry', {
    label: 'Grid Masonry',
    category: 'Grid',
    content: `<div class="uk-child-width-1-2-at-s uk-child-width-1-3-at-m" uk-grid="masonry: true">
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 100px"><p>Item</p></div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 130px"><p>Item</p></div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 150px"><p>Item</p></div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 160px"><p>Item</p></div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 120px"><p>Item</p></div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 140px"><p>Item</p></div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 200px"><p>Item</p></div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 180px"><p>Item</p></div>
    </div>
    <div>
        <div class="uk-card uk-card-default uk-flex uk-flex-center uk-flex-middle" style="height: 140px"><p>Item</p></div>
    </div>
</div>`
  });
}


export default (domc, editor) => {
  const comps = editor.DomComponents;
  const defaultType = comps.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;

  domc.addType('uk-grid', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        name: 'Grid',
        traits: [
          {
            type: 'checkbox',
            label: 'masonry',
            name: 'masonry',
            changeProp: 1
          },
        ].concat(defaultModel.prototype.defaults.traits)
      }),
      init2() {
        this.listenTo(this, 'change:masonry', this.masonry);
        const attributes = this.getAttributes()['uk-grid']
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
      masonry() { this.updateGrid('masonry') },
      updateGrid(attribut) {
        const state = this.get(attribut);

        let grid = this.getAttributes()['uk-grid'];

        if (!grid) {
          grid = '';
        }
        if (grid.includes(` ${attribut}: `)) {
          grid = grid.replace(new RegExp(`(\s|)${attribut}: ([^;]+);`), ` ${attribut}: ${state};`);
        } else if (state) {
          grid += ` ${attribut}: ${state};`;
        }
        let attrs = [];
        attrs['uk-grid'] = grid
        this.addAttributes(attrs);
        UIkit.update(document.body, 'update');
      }
    }, {
      isComponent(el) {
        if (el.hasAttribute && el.hasAttribute('uk-grid')) {
          return { type: 'uk-grid' };
        }
      },
    }),

    view: defaultView,
  });
}
