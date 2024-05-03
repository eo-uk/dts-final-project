<template>
  <div>
    <label for="name-input">
        Your Name
    </label>
    <input
        id="name-input"
        name="name-input"
        :value="name"
        @input="setName"
        placeholder="Your Name"
    />

    <label for="email-input">
        Your Email
    </label>
    <input
        id="email-input"
        name="email-input"
        :value="email"
        @input="setEmail"
        placeholder="Your Email"
    />

    <label for="subject-input">
        Select Subject
    </label>
    <select
        id="subject-input"
        name="subject-input"
        :value="subject"
        @change="setSubject"
        placeholder="Select Subject"
    >
        <option v-for="subjectOption in subjectOptions" :key="subjectOption.key" :value="subjectOption.value">
            {{ subjectOption.text }}
        </option>
    </select>

    <label for="message-input">
        Your Message
    </label>
    <textarea
        id="message-input"
        name="message-input"
        :value="message"
        @input="setMessage"
        placeholder="Your Message"
        :rows=10
    ></textarea>

    <button
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
    >
        Submit
    </button>

    <a class="link" href="/">
        View Web Components Page
    </a>
  </div>
</template>

<script>

export default {

  data() {
    return {
        name: '',
        email: '',
        subject: "",
        subjectOptions: [
            {key: 0, text: 'Select Subject', value: ''},
            {key: 1, text: 'Option 1', value: 'one'},
            {key: 2, text: 'Option 2', value: 'two'},
        ],
        message: "",
    }
  },

  methods: {
    setName(event) {
        this.name = event.target.value;
    },
    setEmail(event) {
        this.email = event.target.value;;
    },
    setSubject(event) {
        this.subject = event.target.value;;
    },
    setMessage(event) {
        this.message = event.target.value;;
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
    label {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
    }

    form .form-item {
      display: block;
      margin: 1em 0;
    }
    form {
        display: flex;
        flex-direction: column;
    }

    input,
    select,
    textarea,
    button {
        width: 100%;
        margin: 0.5em 0;
        padding: 0.5em;
    }

    button {
        color: white;
        background-color: green;
        width: 100%;
        transition: 0.3s ease-in-out;
    }
    button:hover {
        background-color: darkgreen;
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