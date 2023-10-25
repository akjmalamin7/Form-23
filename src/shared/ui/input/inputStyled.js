import { styled } from "styled-components"

const sizes = {
    sm: "28px",
    md: "32px",
    lg: "36px"
}
const radius = {
    sm: "3px",
    md: "5px",
    lg: "10px",
    round: "50%"
}
export const InputWrapper = styled.div`
    height:${props => sizes[props.size] || "30px"};
    position:relative;

`
export const InputField = styled.input`
    max-width:800px;
    width:100%;
    margin:0 auto;
    padding:0px 10px;
    height:100%;
    border:1px solid ${props => props.errors ? "red" : "var(--border__color)"};
    border-radius:${props => radius[props.radius]};
    font-size:13px;
    &:focus{
        border:1px solid #1e90ff;
    }
    position:absolute;

`;
export const LabelText = styled.label`
    display:inline-block;
    font-size:13px;
    color: #303030;
    margin-bottom:3px;
`