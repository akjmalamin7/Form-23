import styled from "styled-components"
import { Button, Input } from "../../shared"
import style from "./form1.module.css"
import { useState } from "react"
const Form1 = () => {
  const [values, setValues] = useState({})
  const handleChange = (e) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
  }
  return (
    <div className={style.form_wrapper}>
      <form onSubmit={handleSubmit}>
        <div className={style.items}>
          <Input
            type={"text"}
            label='Name'
            placeholder="Enter your name"
            errors=""
            name="name"
            size='md'
            radius="sm"
            onChange={handleChange}
          // message="Lorem ipsum message"
          />
          <Input
            type={"email"}
            label='Email'
            placeholder="Enter your email"
            errors=""
            name="email"
            size='md'
            radius="sm"
            onChange={handleChange}
          // message="Lorem ipsum message"
          />
          <Input
            type={"tel"}
            label='Phone'
            placeholder="Enter your phone"
            errors=""
            name="phone"
            size='md'
            radius="sm"
            onChange={handleChange}
          // message="Lorem ipsum message"
          />
          <Input
            type={"password"}
            label='Password'
            placeholder="Enter your password"
            errors=""
            name="password"
            size='md'
            radius="sm"
            onChange={handleChange}
          // message="Lorem ipsum message"
          />
        </div>
        <div className={style.button_wrapper}>
          <Button btnBg="success" sizes="lg" radius="sm">Submit</Button>
        </div>
      </form>
    </div>
  )
}

export default Form1