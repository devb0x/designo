import React from 'react'
import { useForm } from "react-hook-form"

import classes from './FormContact.module.css'
import Button from "../../../UI/Button/Button"

import iconError from '../../../../assets/contact/desktop/icon-error.svg'

const FormContact = () => {
  const { register, handleSubmit, formState: {errors}, reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  })

  const onSubmit = (data) => {
    console.log(data)
    alert(`Thank you ${data.name}.`)
    reset()
  }

  const ErrorDisplay = (props) => {

    return (
      <div className={`${classes['error-div']}`}>
        {props.required &&
          <>Can't be empty <img src={iconError} alt="icon error"/></>
        }
        {props.pattern &&
          <>Please use a valid email address <img src={iconError} alt="icon error"/></>
        }
      </div>
    )
  }

  return (
    <form
      className={`${classes['form']}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={`${classes['form-div']}`}>
        <label htmlFor="">
          Name
        </label>
        <input
          type="text"
          placeholder="Name"
          {...register(
            "name",
            {
              required: true
            }
          )}
        />
        {errors.name?.type === 'required' && <ErrorDisplay required={true} />}
      </div>
      <div className={`${classes['form-div']}`}>
        <label htmlFor="">
          Email Address
        </label>
        <input
          type="email"
          placeholder="Email Address"
          {...register(
            "email",
            {
              required: true,
              pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            }
          )}
        />
        {errors.email?.type === 'required' && <ErrorDisplay required={true} />}
        {errors.email?.type === 'pattern' && <ErrorDisplay pattern={true} />}
      </div>
      <div className={`${classes['form-div']}`}>
        <label htmlFor="">
          Phone
        </label>
        <input
          type="text"
          placeholder="Phone"
          {...register(
            "phone",
            {
              required: true,
              pattern: /^[+]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/
            }
          )}
        />
        {errors.phone?.type === 'required' && <ErrorDisplay required={true} />}
        {errors.phone?.type === 'pattern' && <ErrorDisplay pattern={true} />}
      </div>
      <div className={`${classes['form-div']}`}>
        <label htmlFor="">
          Your Message
        </label>
        <textarea
          rows="4"
          placeholder="Your Message"
          {...register(
            "message",
            {
              required: true,
              minLength: 3
            }
          )}
        />
        {errors.message?.type === 'required' && <ErrorDisplay required={true} />}
      </div>
      <Button class="btn btn-on-dark" type="submit">
        Submit
      </Button>
    </form>
  )
}

export default FormContact