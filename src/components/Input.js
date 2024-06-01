import styled from "styled-components";

const InputStyle = styled.input`
padding: 8px 16px;
min-width: 339px;
height: 24px;
background: #F5F5F5;
border-radius: 8px;
border: 0;
margin-bottom: 3px;
`;

const InputContainer = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 24px;
.helperText {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #121C33;
    opacity: 0.6;
}
.label {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #121C33;
}
.error {
    font-family: 'Poppins';
    font-style: normal;
    font-size: 16px;
    line-height: 24px;
    color: #AB192F;
}
`;
const Input = ({
    inputProps,
    label,
    helperText,
    error
}) => {
    return <InputContainer>
    <label className="label">{label}</label>
    <InputStyle {...inputProps} />
    {
    helperText
    ? <label className="helperText">{helperText}</label>
    : null
    }
    { error && <label className="error">{error}</label> }
    </InputContainer>
}

export default Input;
