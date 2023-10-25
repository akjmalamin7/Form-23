import styled from "styled-components";

const buttonBg = {
    info:"var(--info)",
    success:"var(--success)",
    danger:"var(--danger)",
    warning:"var(--warning)",
    secondary:"var(--secondary)",
    dark:"var(--dark)",
}

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
const display = {
    inline:"inline-block",
    block:"block"
}
export const ButtonStyle  = styled.button`
    background: ${props => buttonBg[props.btnBg]};
    height:${props => sizes[props.size] || "30px"};
    padding:0px 20px;
    border:1px solid ${props => buttonBg[props.btnBg] || "transparent"};
    border-radius:${props => radius[props.radius]};
    display:${props => display[props.display]};
    color:#ffffff;
`