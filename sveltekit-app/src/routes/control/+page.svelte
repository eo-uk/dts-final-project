<script>

	import {afterUpdate, beforeUpdate, onDestroy, onMount} from 'svelte';


	let name = '', setName = (newName) => {name = newName};
	
	let email = '', setEmail = (newEmail) => {email = newEmail};

	let subject = '', setSubject = (newSubject) => {subject = newSubject};

	let message = '', setMessage = (newMessage) => {message = newMessage};

</script>

<svelte:head>
	<title>Control Page</title>
	<meta name="description" content="SvelteKit example control page" />
</svelte:head>

<section>
	<h1>Sveltekit Example Control Page</h1>

	<form>
		<label class="visually-hidden" for="name">Name</label>
		<input
			type={'text'}
			id={'name'}
			name={'name'}
			placeholder={'Your Name'}
			value={name}
			on:change={(e) => setName(e.target.value)}
		/>

		<label class="visually-hidden" for="email">Email</label>
		<input
			type={'email'}
			id={'email'}
			name={'email'}
			placeholder={'Your Email'}
			value={email}
			on:change={(e) => setEmail(e.target.value)}
		/>

		<label class="visually-hidden" for="subject">Subject</label>
		<select
			name="subject"
			id="subject-input"
			value={subject}
			on:change={(e) => setSubject(e.target.value)}
		>
			<option value="">Select Subject</option>
			<option value="option-one">Option One</option>
			<option value="option-two">Option Two</option>
		</select>

		<label class="visually-hidden" for="message">Message</label>
		<textarea
			id={'message'}
			name={'message'}
			placeholder={'Your Message'}
			rows={10}
			value={message}
			on:change={(e) => setMessage(e.target.value)}
		></textarea>

		<button
			on:click={() => {
				alert(`
					Submit Clicked!
					- Name: ${name}
					- Email: ${email}
					- Subject: ${subject}
					- Message: ${message}
				`)
			}}
		>
			Submit
		</button>
	</form>

	<a class='link' href='/'>View Web Component Page</a>
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

	input,
	select,
	textarea,
	button {
		padding: 0.5em;
	}

	button {
		display: block;
		width: 100%;
		margin: auto;
		color: white;
		background-color: red;
		cursor: pointer;
	}
	button:hover {
		background-color: darkred;
	}
</style>
