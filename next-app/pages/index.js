'use client'

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link';

import LibTextInput from '../components/LibTextInput'
import LibTextArea from '../components/LibTextArea'
import LibButton from '../components/LibButton'
import LibSelectInput from '../components/LibSelectInput'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    setIsEmailValid(email.includes('@'))
  }, [email])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Web Components Library Next.js Example</h1>

        <LibTextInput
          extraStyle={`
            input {
              margin: 0.5em 0;
            }
          `}
          name={'name'}
          value={name}
          setValue={setName}
          placeholder={'Your Name'}
        ></LibTextInput>

        <LibTextInput
          extraStyle={`
            input {
              margin: 0.5em 0;
            }
          `}
          name={'email'}
          value={email}
          setValue={setEmail}
          placeholder={'Your Email'}
        ></LibTextInput>
        {email && !isEmailValid && <small>{'Please enter a valid email'}</small>}

        <LibSelectInput
          extraStyle={`
            select {
              margin: 0.5em 0;
            }
          `}
          name={'subject'}
          value={subject}
          setValue={setSubject}
          placeholder={'Select Subject'}
          options={[
            {text: 'Option 1', value: 'one'},
            {text: 'Option 2', value: 'two'},
          ]}
        ></LibSelectInput>

        <LibTextArea
          extraStyle={`
            textarea {
              margin: 0.5em 0;
            }
          `}
          name={'message'}
          value={message}
          setValue={setMessage}
          placeholder={'Your Message'}
          rows={10}
        ></LibTextArea>

        <LibButton
          extraStyle={`
            button {
              width: 100%;
              margin: 0.5em 0;
              color: white;
              background-color: red;
            }
            button:hover {
              background-color: darkred;
            }
          `}
          text={'Submit'}
          handleClick={() => alert(`
            Submit Clicked!
            - Name: ${name}
            - Email: ${email}
            - Subject: ${subject}
            - Message: ${message}
          `)}
        ></LibButton>

        <Link
          href='/control'
          style={{
            display: 'block',
            margin: '1em',
            textAlign: 'center',
          }}
        >
          View Control Page
        </Link>

      </main>
    </>
  )
}