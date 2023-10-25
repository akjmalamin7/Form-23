import styled from "styled-components"

const sizes = {
    sm:'13px',
    md:"14px",
    lg:"16px",
    xxLg:"20px"
}
const colors = {
    error:"#ff4757",
    dark:"#303030",
    white:"#ffffff"
}
const TextWrapper = styled.p`
    font-size:${props => sizes[props.size] || "13px"};
    color:${props => colors[props.color] || "#303030"};
`
const Text = ({children, color}) => {
  return (
    <TextWrapper color={color}>{children}</TextWrapper>
  )
}

export default Text