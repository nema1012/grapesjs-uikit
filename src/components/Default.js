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
}