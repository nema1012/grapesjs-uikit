import contexts from '../uikit-contexts';
import { capitalize } from "../utils";
import {
    isUndefined,
    isFunction,
    isBoolean,
    isString
} from 'underscore';

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
                        type: 'text',
                        label: 'Source (URL)',
                        name: 'src',
                    },
                    {
                        type: 'number',
                        label: 'width',
                        name: 'width'
                    },
                    {
                        type: 'number',
                        label: 'height',
                        name: 'height'
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
                            { value: 'uk-blend-multiply', name: 'blend mode to multiply' },
                            { value: 'uk-blend-screen', name: 'blend mode to screen' },
                            { value: 'uk-blend-overlay', name: 'blend mode to overlay' },
                            { value: 'uk-blend-darken', name: 'blend mode to darken' },
                            { value: 'uk-blend-lighten', name: 'blend mode to lighten' },
                            { value: 'uk-blend-color-dodge', name: 'blend mode to color dodge' },
                            { value: 'uk-blend-color-burn', name: 'blend mode to color burn' },
                            { value: 'uk-blend-hard-light	', name: 'blend mode to hard light' },
                            { value: 'uk-blend-soft-light', name: 'blend mode to soft light' },
                            { value: 'uk-blend-difference', name: 'blend mode to difference' },
                            { value: 'uk-blend-exclusion', name: 'blend mode to exclusion' },
                            { value: 'uk-blend-hue', name: 'blend mode to hue' },
                            { value: 'uk-blend-saturation', name: 'blend mode to saturation' },
                            { value: 'uk-blend-color', name: 'blend mode to color' },
                            { value: 'uk-blend-luminosity', name: 'blend mode to luminosity' }
                        ],
                        label: 'Blend modes'
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
                        label: 'ID',
                        name: 'id',
                        placeholder: 'my_element'
                    },
                    {
                        type: 'text',
                        label: 'data-srcset',
                        name: 'data-srcset',
                        placeholder: 'https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80 650w, https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=1300&h=866&q=80 1300w'
                    },
                    {
                        type: 'text',
                        label: 'data-sizes',
                        name: 'data-sizes',
                        placeholder: '(min-width: 650px) 650px, 100vw'
                    }
                ].concat(imageModel.prototype.defaults.traits)
            }),
            toHTML(opts = {}) {
                const model = this;
                const attrs = [];
                const customTag = opts.tag;
                const tag = customTag || model.get('tagName');
                const sTag = model.get('void');
                const customAttr = opts.attributes;
                let attributes = this.getAttrToHTML();
                delete opts.tag;

                // Get custom attributes if requested
                if (customAttr) {
                    if (isFunction(customAttr)) {
                        attributes = customAttr(model, attributes) || {};
                    } else if (isObject(customAttr)) {
                        attributes = customAttr;
                    }
                }

                for (let attr in attributes) {
                    const val = attributes[attr];
                    const value = isString(val) ? val.replace(/"/g, '&quot;') : val;
                    if (attr === 'src') {
                        if (attributes['data-src'] !== '') {
                            attrs.push(`data-src="${value}"`);
                        }
                    } else if (!isUndefined(value)) {
                        if (isBoolean(value)) {
                            value && attrs.push(attr);
                        } else {
                            attrs.push(`${attr}="${value}"`);
                        }
                    }
                }

                const comps = model.get('components');
                const content = !comps.length ? model.get('content') : '';
                const attrString = attrs.length ? ` ${attrs.join(' ')}` : '';
                let code = `<${tag}${attrString}${sTag ? '/' : ''}>${content}`;
                comps.forEach(comp => (code += comp.toHTML(opts)));
                !sTag && (code += `</${tag}>`);

                return code;
            },
            init() {
                const classes = this.get('classes');
                this.addAttributes({ 'uk-img': '' });
                this.addAttributes({ 'loading': 'lazy' });

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
        view: Object.assign({}, imageView, {
            onRender({ el }) {
                let src = el.getAttribute('src');
                let dataSrc = el.getAttribute('data-src');
                if (src && !dataSrc) {
                    el.setAttribute('data-src', src);
                }
                if (src) {
                    el.removeAttribute('src');
                }
            },
        })
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
                            { value: '', name: 'None' },
                            { value: 'uk-blend-multiply', name: 'blend mode to multiply' },
                            { value: 'uk-blend-screen', name: 'blend mode to screen' },
                            { value: 'uk-blend-overlay', name: 'blend mode to overlay' },
                            { value: 'uk-blend-darken', name: 'blend mode to darken' },
                            { value: 'uk-blend-lighten', name: 'blend mode to lighten' },
                            { value: 'uk-blend-color-dodge', name: 'blend mode to color dodge' },
                            { value: 'uk-blend-color-burn', name: 'blend mode to color burn' },
                            { value: 'uk-blend-hard-light	', name: 'blend mode to hard light' },
                            { value: 'uk-blend-soft-light', name: 'blend mode to soft light' },
                            { value: 'uk-blend-difference', name: 'blend mode to difference' },
                            { value: 'uk-blend-exclusion', name: 'blend mode to exclusion' },
                            { value: 'uk-blend-hue', name: 'blend mode to hue' },
                            { value: 'uk-blend-saturation', name: 'blend mode to saturation' },
                            { value: 'uk-blend-color', name: 'blend mode to color' },
                            { value: 'uk-blend-luminosity', name: 'blend mode to luminosity' }
                        ],
                        label: 'Blend modes'
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
                    },
                    {
                        type: 'text',
                        label: 'data-srcset',
                        name: 'data-srcset',
                        placeholder: 'https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=650&h=433&q=80 650w, https://images.unsplash.com/photo-1490822180406-880c226c150b?fit=crop&w=1300&h=866&q=80 1300w'
                    },
                    {
                        type: 'text',
                        label: 'data-sizes',
                        name: 'data-sizes',
                        placeholder: '(min-width: 650px) 650px, 100vw'
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
}