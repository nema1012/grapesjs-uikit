import contexts from '../uikit-contexts';
import { capitalize } from "../utils";

export default (domc) => {
    const contexts_w_white = contexts.concat(['white']);
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;

    const imageType = domc.getType('image');
    const imageModel = imageType.model;
    const imageView = imageType.view;

    domc.addType('image', {
        model: imageModel.extend({
            defaults: Object.assign({}, imageModel.prototype.defaults, {
                traits: [
                    {
                        type: 'class_select',
                        options: [
                            { value: '', name: 'Default' },
                            { value: 'border', name: 'Full' },
                            { value: 'border-top-0', name: 'No top' },
                            { value: 'border-right-0', name: 'No right' },
                            { value: 'border-bottom-0', name: 'No bottom' },
                            { value: 'border-left-0', name: 'No left' },
                            { value: 'border-0', name: 'None' }
                        ],
                        label: 'Border width'
                    },
                    {
                        type: 'class_select',
                        options: [
                            { value: '', name: 'None' },
                            { value: 'uk-border-rounded', name: 'rounded' },
                            { value: 'uk-border-circle', name: 'circle' },
                            { value: 'uk-border-pill', name: 'pill' },
                        ],
                        label: 'Border Radius'
                    },
                    {
                        type: 'class_select',
                        options: [
                            { value: '', name: 'None' },
                            { value: 'uk-box-shadow-small', name: 'Small' },
                            { value: 'uk-box-shadow-medium', name: 'Medium' },
                            { value: 'uk-box-shadow-large', name: 'Large' },
                            { value: 'uk-box-shadow-xlarge', name: 'XLarge' },
                        ],
                        label: 'Box Shadow'
                    },
                    {
                        type: 'class_select',
                        options: [
                            { value: '', name: 'None' },
                            { value: 'uk-box-shadow-bottom', name: 'Bottom' }
                        ],
                        label: 'Bottom Shadow'
                    },
                    {
                        type: 'class_select',
                        options: [
                            { value: '', name: 'None' },
                            { value: 'uk-box-shadow-hover-small', name: 'Small' },
                            { value: 'uk-box-shadow-hover-medium', name: 'Medium' },
                            { value: 'uk-box-shadow-hover-large', name: 'Large' },
                            { value: 'uk-box-shadow-hover-xlarge', name: 'XLarge' }
                        ],
                        label: 'Hover Shadow'
                    },
                    {
                        type: 'class_select',
                        options: [
                            { value: '', name: 'None' },
                            { value: 'uk-container-xsmall', name: 'xsmall' },
                            { value: 'uk-container-small', name: 'small' },
                            { value: 'uk-container-large', name: 'Large' },
                            { value: 'uk-container-xlarge', name: 'XLarge' },
                            { value: 'uk-container-expand', name: 'Expand' }
                        ],
                        label: 'Container size'
                    },
                    {
                        type: 'text',
                        label: 'ID',
                        name: 'id',
                        placeholder: 'my_element'
                    },
                    {
                        type: 'text',
                        label: 'Title',
                        name: 'title',
                        placeholder: 'My Element'
                    }
                ].concat(imageModel.prototype.defaults.traits)
            }),
            init() {
                const classes = this.get('classes');
                classes.bind('add', this.classesChanged.bind(this));
                classes.bind('change', this.classesChanged.bind(this));
                classes.bind('remove', this.classesChanged.bind(this));
                this.init2();
            },
            /* BS comps use init2, not init */
            init2() { },
            /* method where we can check if we should changeType */
            classesChanged() { },
            /* replace the comp with a copy of a different type */
            changeType(new_type) {
                const coll = this.collection;
                const at = coll.indexOf(this);
                const button_opts = {
                    type: new_type,
                    style: this.getStyle(),
                    attributes: this.getAttributes(),
                    content: this.view.el.innerHTML
                }
                coll.remove(this);
                coll.add(button_opts, { at });
                this.destroy();
            }
        }),
        view: imageView
    });


    domc.addType('default', {
        model: defaultModel.extend({
            defaults: Object.assign({}, defaultModel.prototype.defaults, {
                tagName: 'div',
                traits: [
                    {
                        type: 'class_select',
                        options: [
                            { value: '', name: 'Default' },
                            ...contexts_w_white.map(function (v) { return { value: 'text-' + v, name: capitalize(v) } })
                        ],
                        label: 'Text color'
                    },
                    {
                        type: 'class_select',
                        options: [
                            { value: '', name: 'Default' },
                            ...contexts_w_white.map(function (v) { return { value: 'bg-' + v, name: capitalize(v) } })
                        ],
                        label: 'Background color'
                    },
                    {
                        type: 'class_select',
                        options: [
                            { value: '', name: 'Default' },
                            { value: 'border', name: 'Full' },
                            { value: 'border-top-0', name: 'No top' },
                            { value: 'border-right-0', name: 'No right' },
                            { value: 'border-bottom-0', name: 'No bottom' },
                            { value: 'border-left-0', name: 'No left' },
                            { value: 'border-0', name: 'None' }
                        ],
                        label: 'Border width'
                    },
                    {
                        type: 'class_select',
                        options: [
                            { value: '', name: 'None' },
                            { value: 'uk-box-shadow-small', name: 'Small' },
                            { value: 'uk-box-shadow-medium', name: 'Medium' },
                            { value: 'uk-box-shadow-large', name: 'Large' },
                            { value: 'uk-box-shadow-xlarge', name: 'XLarge' },
                        ],
                        label: 'Box Shadow'
                    },
                    {
                        type: 'class_select',
                        options: [
                            { value: '', name: 'None' },
                            { value: 'uk-box-shadow-bottom', name: 'Bottom' }
                        ],
                        label: 'Bottom Shadow'
                    },
                    {
                        type: 'class_select',
                        options: [
                            { value: '', name: 'None' },
                            { value: 'uk-border-rounded', name: 'rounded' },
                            { value: 'uk-border-circle', name: 'circle' },
                            { value: 'uk-border-pill', name: 'pill' },
                        ],
                        label: 'Border Radius'
                    },
                    {
                        type: 'class_select',
                        options: [
                            { value: '', name: 'None' },
                            { value: 'uk-box-shadow-hover-small', name: 'Small' },
                            { value: 'uk-box-shadow-hover-medium', name: 'Medium' },
                            { value: 'uk-box-shadow-hover-large', name: 'Large' },
                            { value: 'uk-box-shadow-hover-xlarge', name: 'XLarge' }
                        ],
                        label: 'Hover Shadow'
                    },
                    {
                        type: 'class_select',
                        options: [
                            { value: '', name: 'None' },
                            { value: 'uk-container-xsmall', name: 'xsmall' },
                            { value: 'uk-container-small', name: 'small' },
                            { value: 'uk-container-large', name: 'Large' },
                            { value: 'uk-container-xlarge', name: 'XLarge' },
                            { value: 'uk-container-expand', name: 'Expand' }
                        ],
                        label: 'Container size'
                    },
                    {
                        type: 'class_select',
                        options: [
                            { value: '', name: 'Default' },
                            ...contexts_w_white.map(function (v) { return { value: 'border border-' + v, name: capitalize(v) } })
                        ],
                        label: 'Border color'
                    },
                    {
                        type: 'text',
                        label: 'ID',
                        name: 'id',
                        placeholder: 'my_element'
                    },
                    {
                        type: 'text',
                        label: 'Title',
                        name: 'title',
                        placeholder: 'My Element'
                    }
                ].concat(defaultModel.prototype.defaults.traits)
            }),
            init() {
                const classes = this.get('classes');
                classes.bind('add', this.classesChanged.bind(this));
                classes.bind('change', this.classesChanged.bind(this));
                classes.bind('remove', this.classesChanged.bind(this));
                this.init2();
            },
            /* BS comps use init2, not init */
            init2() { },
            /* method where we can check if we should changeType */
            classesChanged() { },
            /* replace the comp with a copy of a different type */
            changeType(new_type) {
                const coll = this.collection;
                const at = coll.indexOf(this);
                const button_opts = {
                    type: new_type,
                    style: this.getStyle(),
                    attributes: this.getAttributes(),
                    content: this.view.el.innerHTML
                }
                coll.remove(this);
                coll.add(button_opts, { at });
                this.destroy();
            }
        }),
        view: defaultView
    });

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
}

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