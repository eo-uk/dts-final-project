//import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import {LitElement, html, css} from 'lit';


export const libStyles = css`
    * {
        box-sizing: border-box;
        margin: 0;
    }
    ul {
        list-style: none;
        padding-left: 0;
    }

    .hidden {
        height: 1px;
        width: 1px;
        overflow: hidden;
        position: absolute;
    }
`;

export class TextInput extends LitElement {
    static properties = {  
        extraStyle: {},  // 'style' would conflict with React's style
        name: {},
        value: {},
        setValue: {},
        placeholder: {},
        labelVisible: {},
    }

    static styles = [
        libStyles,
        css`
            :host {
                height: 100%;
                width: 100%;
            }
            input {
                box-sizing: border-box;
                width: 100%;
                padding: 0.5em;
            }
            label {
                display: block;
                margin-bottom: 0.5em;
                padding-left: 0.3em;
            }

        `
    ]

    constructor() {
        super();
    }

    render() {

        // If accessibility criteria not met, do not render
        if (!this.name) {
            console.error("Accessibility Error: Please ensure to pass a 'name' property.");
            return html``;
        }

        return html`
            <style>
                ${this.extraStyle}
            </style>

            <label
                for=${this.name}
                class=${this.labelVisible ? 'visible' : 'hidden'}
            >
                ${this.placeholder}
            </label>

            <input
                part="base"
                type="text"
                name=${this.name}
                id=${this.name}
                aria-label
                value=${this.value}
                placeholder=${this.placeholder}
                @input=${event => this.setValue(event.target.value)}
            />
        `
    }
}
customElements.define('c-text-input', TextInput);

export class TextArea extends LitElement {
    static properties = {
        extraStyle: {},
        name: {},
        value: {},
        setValue: {},
        placeholder: {},
        rows: {},
        cols: {},
        labelVisible: {},
    }

    static styles = [
        libStyles,
        css`
            :host {
                height: 100%;
                width: 100%;
            }
            textarea {
                width: 100%;
                resize: vertical;
                padding: 0.5em;
            }
            label {
                display: block;
                margin-bottom: 0.5em;
                padding-left: 0.3em;
            }
        `
    ]

    constructor() {
        super();
    }

    render() {
        
        // If accessibility criteria not met, do not render
        if (!this.name) {
            console.error("Accessibility Error: Please ensure to pass a 'name' property.");
            return html``;
        }

        return html`
            <style>
                ${this.extraStyle}
            </style>

            <label
                for=${this.name}
                class=${this.labelVisible ? 'visible' : 'hidden'}
            >
                ${this.placeholder}
            </label>

            <textarea
                part="base"
                name=${this.name}
                id=${this.name}
                value=${this.value}
                placeholder=${this.placeholder}
                rows=${this.rows}
                @input=${event => this.setValue(event.target.value)}
            ></textarea>
        `
    }
}
customElements.define('c-text-area', TextArea);

export class Button extends LitElement {
    static properties = {
        extraStyle: {},
        text: {},
    }

    static styles = [
        libStyles,
        css`
            :host {
                height: 100%;
                width: 100%;
            }
            button {
                padding: 0.5rem;
                transition: 0.3s ease-in-out;
                transition-property: background-color;
                cursor: pointer;
            }
        `
    ]

    constructor() {
        super();
    }

    handleClick() {
        const customEvent = new CustomEvent('c-button-clicked', {
            bubbles: true,
            cancelable: true,
        });
          
        // Dispatch the custom event on a target element
        this.shadowRoot.host.dispatchEvent(customEvent);
    }

    render() {
        return html`
            <style>
                ${this.extraStyle}
            </style>
            <button @click=${this.handleClick}>
                ${this.text}
            </button>
        `
    }
}
customElements.define('c-button', Button);

export class SelectInput extends LitElement {
    static properties = {
        name: {},
        extraStyle: {},
        value: {},
        setValue: {},
        placeholder: {},
        options: {},
        labelVisible: {},
    }

    static styles = [
        libStyles,
        css`
            :host {
                height: 100%;
                width: 100%;
            }
            select {
                width: 100%;
                padding: 0.5em;
            }
        `
    ]

    constructor() {
        super();
    }

    render() {
        
        // If accessibility criteria not met, do not render
        if (!this.name) {
            console.error("Accessibility Error: Please ensure to pass a 'name' property.");
            return html``;
        }

        return html`
            <style>
                ${this.extraStyle}
            </style>

            <label
                for=${this.name}
                class=${this.labelVisible ? 'visible' : 'hidden'}
            >
                ${this.placeholder}
            </label>

            <select
                id=${this.name}
                value=${this.value}
                @change=${event => this.setValue(event.target.value)}
            >
                <option value="">${this.placeholder}</option>
                ${this.options ? this.options.map(option => html`
                    <option value=${option.value}>${option.text}</option>
                `) : ''}
            </select>
        `
    }
}
customElements.define('c-select-input', SelectInput);