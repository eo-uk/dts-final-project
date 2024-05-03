<script>

	import {afterUpdate, beforeUpdate, onDestroy, onMount} from 'svelte';

	import { redirect } from '@sveltejs/kit';

	import {
		TextInput,
		TextArea,
		Button,
		SelectInput,
	} from 'web-components-lib/lib'


	let name = '', setName = (newName) => {name = newName};
	
	let email = '', setEmail = (newEmail) => {email = newEmail};

	let subject = '', setSubject = (newSubject) => {subject = newSubject};

	let message = '', setMessage = (newMessage) => {message = newMessage};

</script>

<svelte:head>
	<title>Library Page</title>
	<meta name="description" content="Web component library SvelteKit example" />
</svelte:head>

<section>
	<h1>Web Components Library Sveltekit Example</h1>

	<form>
		<c-text-input
			name={'name-input'}
			value={name}
			setValue={setName}
			placeholder={'Your Name'}
		></c-text-input>

		<c-text-input
			name={'email-input'}
			value={email}
			setValue={setEmail}
			placeholder={'Your Email'}
		></c-text-input>

		<c-select-input
			name={'subject-input'}
			value={subject}
			setValue={setSubject}
			placeholder={'Select Subject'}
			options={[
				{text: 'Option 1', value: 'one'},
				{text: 'Option 2', value: 'two'},
			]}
		></c-select-input>

		<c-text-area
			name={'message-input'}
			value={message}
			setValue={setMessage}
			placeholder={'Your Message'}
			rows={10}
		></c-text-area>

		<c-button
			extraStyle={`
				button {
					display: block;
					width: 100%;
					margin: auto;
					color: white;
					background-color: red;
				}
				button:hover {
					background-color: darkred;
				}
			`}
			text={"Submit"}
			on:click={() => {
				alert(`
					Submit Clicked!
					- Name: ${name}
					- Email: ${email}
					- Subject: ${subject}
					- Message: ${message}
				`)
			}}
		></c-button>
	</form>

	<a class='link' href='/control'>View Control Page</a>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
		width: 100%;
	}
</style>
