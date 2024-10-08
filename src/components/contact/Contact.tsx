import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

// Toast
import toast from 'react-hot-toast'

// Components
import { Input, Button } from 'components'

// Types
type Error = [boolean, string]
type ErrorState = { name: Error; phone: Error; message: Error }

export default function Contact(): JSX.Element {
  const [btnDisable, setBtnDisable] = useState<boolean>(false)
  const [error, setError] = useState<ErrorState>({
    name: [false, ''],
    phone: [false, ''],
    message: [false, ''],
  })

  function changeInputs(name: string): void {
    setError((p: ErrorState) => ({ ...p, [name]: [false, ''] }))
  }

  // Form data checking validation
  function checkValidate(name: string, phone: string, message: string): boolean {
    let isNotValid: boolean = false

    // Checking name
    if (!name.trim().length) {
      setError((p: ErrorState) => ({
        ...p,
        name: [true, 'Name is required!'],
      }))

      isNotValid = true
    } else if (name.trim().length < 7) {
      setError((p: ErrorState) => ({
        ...p,
        name: [true, 'Name is too short, enter at least 7 characters.'],
      }))

      isNotValid = true
    } else if (name.trim().length > 55) {
      setError((p: ErrorState) => ({
        ...p,
        name: [true, 'You can enter a maximum of 55 characters.'],
      }))

      isNotValid = true
    }

    // Checking phone
    if (!phone.trim().length) {
      setError((p: ErrorState) => ({
        ...p,
        phone: [true, 'Phone is required!'],
      }))

      isNotValid = true
    }

    // Checking message
    if (!message.trim().length) {
      setError((p: ErrorState) => ({
        ...p,
        message: [true, 'Message is required!'],
      }))

      isNotValid = true
    } else if (message.trim().length < 5) {
      setError((p: ErrorState) => ({
        ...p,
        message: [true, 'You wrote a very short message. The message must be at least 5 characters long.'],
      }))

      isNotValid = true
    } else if (message.trim().length > 1200) {
      setError((p: ErrorState) => ({
        ...p,
        message: [true, 'You wrote a very long message. The message should be no more than 1200 characters long.'],
      }))

      isNotValid = true
    }

    return isNotValid
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault()

    const API_URL: string = `https://api.telegram.org/bot${process?.env?.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN || '5833819728:AAH1dRS8nucWa5_Mh_CmoKUJOIx5uTsYg6I'}/sendMessage`

    let name: string = (e.currentTarget[0] as HTMLInputElement).value
    let phone: string = (e.currentTarget[1] as HTMLInputElement).value
    let message: string = (e.currentTarget[2] as HTMLInputElement).value

    if (checkValidate(name, phone, message)) return
    setBtnDisable(true)
    let text: string = `<b>Ismi:</b> ${name} \n\n<b>Telefon raqami:</b> ${phone} \n\n<b>Xabar:</b> ${message}`

    try {
      await axios.post(
        API_URL,
        {
          chat_id: process?.env?.NEXT_PUBLIC_TELEGRAM_CHAT_ID || '-1001680103791',
          parse_mode: 'html',
          text,
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      ;(e.target as HTMLFormElement)?.reset()
      toast.success('Message sent successfully!')
    } catch {
      toast.error('There was a problem sending the message. Please try again!')
    } finally {
      setBtnDisable(false)
    }
  }

  return (
    <StyledContact id='contact'>
      <div className='container'>
        <h2>Contact</h2>

        <div className='content'>
          <form onSubmit={handleSubmit}>
            <div className='input'>
              <label htmlFor='fullname'>F.I.O:</label>
              <Input type='text' forID='fullname' isError={error?.name[0]} placeholder='Write your fullname' onChange={() => changeInputs('name')} />

              {error?.name[0] && <span className='error-message'>{error?.name[1]}</span>}
            </div>
            <div className='input'>
              <label htmlFor='tel'>Phone:</label>
              <Input
                type='tel'
                forID='tel'
                isError={error?.phone[0]}
                placeholder='Write your phone number'
                pattern='[+]{1}[0-9]{3}[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}'
                onChange={(e) => {
                  changeInputs('phone')
                  e.target.setCustomValidity('')

                  if (!e.target.validity.valid) {
                    e.target.setCustomValidity('The number was entered incorrectly ! Example: +998971050505')
                  }
                }}
              />

              {error?.phone[0] && <span className='error-message'>{error?.phone[1]}</span>}
            </div>

            <div className='input'>
              <label htmlFor='message'>Message:</label>
              <Input type='textarea' forID='message' isError={error?.message[0]} placeholder='Write your short message' onChangeArea={() => changeInputs('message')} />

              {error?.message[0] && <span className={'error-message' + (error?.message[1].trim().length >= 24 ? ' long' : '')}>{error?.message[1]}</span>}
            </div>

            <div className='input'>
              <Button type='submit' content='Send message' disable={btnDisable} animatedBtn={false} />
            </div>
          </form>
        </div>
      </div>
    </StyledContact>
  )
}

const StyledContact = styled.section`
  padding: 10px 0px 80px;

  .container {
    h2 {
      color: #ffffff;
      text-align: center;
      margin-bottom: 30px;
    }
    
    .content {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;

      form {
        padding-top: 30px;
        width: 420px;
        height: 100%;

        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        row-gap: 40px;
        z-index: 2;

        .input {
          position: relative;
          width: 100%;
          max-width: 420px;

          label {
            color: #fff;
            font-weight: 500;
          }

          .error-message {
            position: absolute;
            bottom: -17px;
            left: 0px;

            color: red;
            font-size: 0.84rem;
            font-weight: 600;
            text-shadow: 0px 0px 15px #000;

            &.long {
              bottom: -34px;
            }
          }
        }
      }
    }
  }
`