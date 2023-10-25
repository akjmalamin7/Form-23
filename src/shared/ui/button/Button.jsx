import { useState } from "react"
import {ButtonStyle} from "./buttonStyle"
const Button = ({children, btnBg, sizes, radius, display, onClick}) => {
   
  return (
    <ButtonStyle btnBg={btnBg} sizes={sizes} radius={radius}  onClick={onClick} display={display} >{children}</ButtonStyle>
  )
}

export default Button