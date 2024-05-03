import { expect, fixture, html } from '@open-wc/testing';
import { Button, SelectInput, TextInput, TextArea } from '../lib.mjs';


describe('c-button', () => {
    it('renders the correct text', async () => {

        const expectedButtonText = 'Test Button';

        const el = await fixture(html`
            <c-button
                .text=${expectedButtonText}
            ></c-button>
        `);

        const actualButtonText = el.shadowRoot.querySelector('button').innerText;

        expect(actualButtonText).to.equal(expectedButtonText);
    });

    it('renders the correct extra style', async () => {

        const expectedButtonText = 'Test Button';
        const expectedExtraStyle = "button { color: red; }"

        const el = await fixture(html`
            <c-button
                .extraStyle=${expectedExtraStyle}
                .text=${expectedButtonText}
            ></c-button>
        `);

        const actualStyleEl = el.shadowRoot.querySelector('style');

        expect(actualStyleEl.innerText.includes(expectedExtraStyle)).to.equal(true);
    });
});

describe('c-text-input', () => {
    it('renders', async () => {

        const el = await fixture(html`
            <c-text-input
                .name=${'test-input'}
                .placeholder=${'Test Input'}
                .value=${''}
                .setValue=${() => {}}
            ></c-text-input>
        `);

        const actualInputEl = el.shadowRoot.querySelector('input');
        const actualLabelEl = el.shadowRoot.querySelector('label');

        expect(actualInputEl).to.be.ok;
        expect(actualLabelEl).to.be.ok;
    });

    it('renders label hidden class correctly', async () => {

        const el = await fixture(html`
            <c-text-input
                .name=${'test-input'}
                .placeholder=${'Test Input'}
                .value=${''}
                .setValue=${() => {}}
                .labelVisible=${false}
            ></c-text-input>
        `);

        const actualLabelEl = el.shadowRoot.querySelector('label');
        expect(actualLabelEl).to.have.class('hidden');
    });

    it('calls setValue function on input', async () => {

        const expectedNewValue = 'New Input';

        let value = '';

        const setValue = (newValue) => {
            value = newValue;
        }

        const el = await fixture(html`
            <c-text-input
                .name=${'test-input'}
                .placeholder=${'Test Input'}
                .value=${''}
                .setValue=${setValue}
            ></c-text-input>
        `);
        
        const input = el.shadowRoot.querySelector('input');
        input.value = expectedNewValue;
        input.dispatchEvent(new Event('input'));

        expect(value).to.equal(expectedNewValue);
    })

    it('to not render if no name is passed', async () => {

        // Store actual console.error func to restore later
        const originalConsoleErrorFunc = console.error;

        // Change console.error to test if it is called
        let errorLogged = false;
        console.error = () => errorLogged = true

        const el = await fixture(html`
            <c-text-input
                .placeholder=${'Test Input'}
                .value=${''}
                .setValue=${() => {}}
            ></c-text-input>
        `);

        const actualInputEl = el.shadowRoot.querySelector('input');

        expect(actualInputEl).to.equal(null);
        expect(errorLogged).to.equal(true);

        // Restore actual console.error func
        console.error = originalConsoleErrorFunc;
    })
});

describe('c-text-area', () => {
    it('renders', async () => {

        const el = await fixture(html`
            <c-text-area
                .name=${'test-input'}
                .placeholder=${'Test Input'}
                .value=${''}
                .setValue=${() => {}}
            ></c-text-area>
        `);

        const actualTextareaEl = el.shadowRoot.querySelector('textarea');
        const actualLabelEl = el.shadowRoot.querySelector('label');

        expect(actualTextareaEl).to.be.ok;
        expect(actualLabelEl).to.be.ok;
    });

    it('renders label hidden class correctly', async () => {

        const el = await fixture(html`
            <c-text-area
                .name=${'test-input'}
                .placeholder=${'Test Input'}
                .value=${''}
                .setValue=${() => {}}
                .labelVisible=${false}
            ></c-text-area>
        `);

        const actualLabelEl = el.shadowRoot.querySelector('label');
        expect(actualLabelEl).to.have.class('hidden');
    });


    it('calls setValue function on input', async () => {

        const expectedNewValue = 'New Input';

        let value = '';

        const setValue = (newValue) => {
            value = newValue;
        }

        const el = await fixture(html`
            <c-text-area
                .name=${'test-input'}
                .placeholder=${'Test Input'}
                .value=${''}
                .setValue=${setValue}
            ></c-text-area>
        `);
        
        const input = el.shadowRoot.querySelector('textarea');
        input.value = expectedNewValue;
        input.dispatchEvent(new Event('input'));

        expect(value).to.equal(expectedNewValue);
    })

    it('to not render if no name is passed', async () => {

        // Store actual console.error func to restore later
        const originalConsoleErrorFunc = console.error;

        // Change console.error to test if it is called
        let errorLogged = false;
        console.error = () => errorLogged = true

        const el = await fixture(html`
            <c-text-area
                .placeholder=${'Test Input'}
                .value=${''}
                .setValue=${() => {}}
            ></c-text-area>
        `);

        const actualInputEl = el.shadowRoot.querySelector('textarea');

        expect(actualInputEl).to.equal(null);
        expect(errorLogged).to.equal(true);

        // Restore actual console.error func
        console.error = originalConsoleErrorFunc;
    })
});

describe('c-select-input', () => {
    it('renders', async () => {

        const el = await fixture(html`
            <c-select-input
                .name=${'test-input'}
                .placeholder=${'Test Input'}
                .value=${''}
                .setValue=${() => {}}
                .options=${[
                    {value: "option 1", text: "Option 1"},
                    {value: "option 2", text: "Option 2"},
                ]}
            ></c-select-input>
        `);

        const actualTextareaEl = el.shadowRoot.querySelector('select');
        const actualLabelEl = el.shadowRoot.querySelector('label');

        expect(actualTextareaEl).to.be.ok;
        expect(actualLabelEl).to.be.ok;
    });

    it('renders label hidden class correctly', async () => {

        const el = await fixture(html`
            <c-select-input
                .name=${'test-input'}
                .placeholder=${'Test Input'}
                .value=${''}
                .setValue=${() => {}}
                .options=${[
                    {value: "option 1", text: "Option 1"},
                    {value: "option 2", text: "Option 2"},
                ]}
                .labelVisible=${false}
            ></c-select-input>
        `);

        const actualLabelEl = el.shadowRoot.querySelector('label');
        expect(actualLabelEl).to.have.class('hidden');
    });


    it('to not render if no name is passed', async () => {

        // Store actual console.error func to restore later
        const originalConsoleErrorFunc = console.error;

        // Change console.error to test if it is called
        let errorLogged = false;
        console.error = () => errorLogged = true

        const el = await fixture(html`
            <c-select-input
                .placeholder=${'Test Input'}
                .value=${''}
                .setValue=${() => {}}
                .options=${[
                    {value: "option 1", text: "Option 1"},
                    {value: "option 2", text: "Option 2"},
                ]}
            ></c-select-input>
        `);

        const actualInputEl = el.shadowRoot.querySelector('select');

        expect(actualInputEl).to.equal(null);
        expect(errorLogged).to.equal(true);

        // Restore actual console.error func
        console.error = originalConsoleErrorFunc;
    })
});