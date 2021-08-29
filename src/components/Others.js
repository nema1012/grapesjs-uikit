import UIkit from "uikit";

export const Container = (bm, c) => {
    bm.add('container', {
        label: 'Container',
        category: 'Components',
        content: '<div data-gjs-type="uk-container"><p>Container</p></div>'
    });
};

export const Article = (bm, c) => {
    bm.add('article', {
        label: 'Article',
        category: 'Components',
        content: `<article class="uk-article">

        <h1 class="uk-article-title"><a class="uk-link-reset" href="">Heading</a></h1>
    
        <p class="uk-article-meta">Written by <a href="#">Super User</a> on 12 April 2012. Posted in <a href="#">Blog</a></p>
    
        <p class="uk-text-lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
    
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    
    </article>`
    });
};

export const Column = (bm, c) => {
    bm.add('column', {
        label: 'Column',
        category: 'Components',
        content: `<div class="uk-column-1-2-at-s uk-column-1-3-at-m uk-column-1-4-at-l">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
        </div>`
    });
};

export const ColumnDivider = (bm, c) => {
    bm.add('columndivider', {
        label: 'Column with Divider',
        category: 'Components',
        content: `<div class="uk-column-1-2 uk-column-divider">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
        </div>`
    });
};

export const ColumnDividerWithSpan = (bm, c) => {
    bm.add('columndividerSpan', {
        label: 'Column with Divider and Span',
        category: 'Components',
        content: `<div class="uk-column-1-2 uk-column-divider">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
            <blockquote cite="#" class="uk-column-span">
                <p>All we have to decide is what to do with the time that is given us.</p>
                <footer>Gandalf in in <cite><a href="">The Fellowship of the Ring</a></cite></footer>
            </blockquote>
        
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
        </div>`
    });
};

export const ViewPortHeight = (bm, c) => {
    bm.add('viewPortHeight', {
        label: 'Viewport Height',
        category: 'Components',
        content: `<div class="uk-height-viewport" uk-height-viewport="expand: true">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
            <blockquote cite="#" class="uk-column-span">
                <p>All we have to decide is what to do with the time that is given us.</p>
                <footer>Gandalf in in <cite><a href="">The Fellowship of the Ring</a></cite></footer>
            </blockquote>
        
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
        </div>`
    });
};

export const Icon = (bm, c) => {
  bm.add('ukicon', {
    attributes: {
      class: 'fa fa-smile-o'
    },
      label: 'UK-Icon',
      category: 'Components',
      content: `<span uk-icon=" icon: heart;"></span>`
  });
};

export default (domc, editor) => {
  const comps = editor.DomComponents;
  const defaultType = comps.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;

  domc.addType('uk-container', {
    model: defaultModel.extend({
        defaults: Object.assign({}, defaultModel.prototype.defaults, {
            name: 'Container',
            classes: ['uk-container'],
            traits: [
            ].concat(defaultModel.prototype.defaults.traits)
        }),
        init2() {
        },
    }, {
        isComponent(el) {
            if (el.hasAttribute && el.hasAttribute('uk-container')) {
                return { type: 'uk-container' };
            }
        },
    }),

    view: defaultView,
});

domc.addType('viewportHeight', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        'name': 'viewport height',
        traits: [
          {
            type: 'checkbox',
            label: 'offset-top',
            name: 'offset-top',
            changeProp: 1
          },
          {
            type: 'text',
            label: 'offset-bottom',
            name: 'offset-bottom',
            changeProp: 1,
          },
          {
            type: 'checkbox',
            label: 'expand',
            name: 'expand',
            changeProp: 1
          },
          {
            type: 'number',
            label: 'min-height',
            name: 'min-height',
            changeProp: 1
          },
        ].concat(defaultModel.prototype.defaults.traits)
      }),
      init2() {    
        this.listenTo(this, 'change:offset-top', this.updateOffsetTop);
        this.listenTo(this, 'change:offset-bottom', this.updateOffsetBottom);
        this.listenTo(this, 'change:expand', this.updateExpand);
        this.listenTo(this, 'change:min-height', this.updateMinHeight);

        const attributes = this.getAttributes()['uk-height-viewport']
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
      updateOffsetTop() {this.update('offset-top')},
      updateOffsetBottom() {this.update('offset-bottom')},
      updateExpand() {this.update('expand')},
      updateMinHeight() {this.update('min-height')},
      refresh() {
        UIkit.update(document.body, 'update');
      },
      update(attribut) {
        const state = this.get(attribut);

        let item = this.getAttributes()['uk-height-viewport'];

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
        attrs['uk-height-viewport'] = item
        this.addAttributes(attrs);
        this.refresh();
      }
    }, {
      isComponent: function (el) {
        if ((el.hasAttribute && el.hasAttribute('uk-height-viewport')) || (el && el.classList && el.classList.contains('uk-height-viewport'))) {
          return { type: 'viewportHeight' };
        }
      }
    }),
    view: defaultView
  });

  domc.addType('uiicon', {
    model: defaultModel.extend({
      defaults: Object.assign({}, defaultModel.prototype.defaults, {
        'name': 'ui-icon',
        traits: [
          {
            type: 'text',
            label: 'icon',
            name: 'icon',
            changeProp: 1
          },
          {
            type: 'number',
            label: 'ratio',
            name: 'ratio',
            changeProp: 1,
          },
        ].concat(defaultModel.prototype.defaults.traits)
      }),
      init2() {    
        this.listenTo(this, 'change:icon', this.updateIcon);
        this.listenTo(this, 'change:ratio', this.updateRatio);

        const attributes = this.getAttributes()['uk-icon']
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
      updateIcon() {this.update('icon')},
      updateRatio() {this.update('ratio')},
      refresh() {
        UIkit.update(document.body, 'update');
      },
      update(attribut) {
        const state = this.get(attribut);

        let item = this.getAttributes()['uk-icon'];
        if (this.view && this.view.$el[0].children[0]) {
          this.view.$el[0].removeChild(this.view.$el[0].children[0])
        }
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
        attrs['uk-icon'] = item
        this.addAttributes(attrs);

        this.refresh();
      }
    }, {
      isComponent: function (el) {
        if ((el.hasAttribute && el.hasAttribute('uk-icon')) || (el && el.classList && el.classList.contains('uk-icon'))) {
          return { type: 'uiicon' };
        }
      }
    }),
    view: defaultView
  });
}
