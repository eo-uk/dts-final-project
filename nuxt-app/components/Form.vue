<template>
  <div>
      <form>
        <TextInput
            name="name-input"
            :value="name"
            :setValue="setName"
            placeholder="Your Name"
        />

        <TextInput
            name="email-input"
            :value="email"
            :setValue="setEmail"
            placeholder="Your Email"
        />

        <SelectInput
            name="subject-input"
            :value="subject"
            :setValue="setSubject"
            placeholder="Select Subject"
            :options="subjectOptions"
        />

        <TextAreaInput
            name="message-input"
            :value="message"
            :setValue="setMessage"
            placeholder="Your Message"
            :rows=10
        />

        <Button
            text="Submit"
            :onClick="handleSubmit"
            :extraStyle="`
                button {
                    background-color: green;
                    color: white;
                    width: 100%;
                }
                button:hover {
                    background-color: darkgreen;
                }
            `"
        />
    </form>

    <a class="link" href="/control">
        View Web Components Page
    </a>
  </div>
</template>

<script>
import TextInput from '~/components/TextInput.vue';
import SelectInput from '~/components/SelectInput.vue';
import TextAreaInput from '~/components/TextAreaInput.vue';

import Button from './Button.vue';

export default {
  components: {
    TextInput,
    TextAreaInput,
    SelectInput,
    Button,
  },

  data() {
    return {
        name: '',
        email: '',
        subject: "",
        subjectOptions: [
            {text: 'Option 1', value: 'one'},
            {text: 'Option 2', value: 'two'},
        ],
        message: "",
    }
  },

  methods: {
    setName(newName) {
        this.name = newName;
    },
    setEmail(newEmail) {
        this.email = newEmail;
    },
    setSubject(newSubject) {
        this.subject = newSubject;
    },
    setMessage(newMessage) {
        this.message = newMessage;
    },
    handleSubmit() {
        alert(`
            Submit clicked!
            Name: ${this.name}
            Email: ${this.email}
            Subject: ${this.subject}
            Message: ${this.message}
        `)
    },
  },
};
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
    .link {
        text-align: center;
        width: 100%;
        display: block;
        text-decoration: none;
        color: green;
        margin-top: 1em;
    }
</style>