import styled from "styled-components";
import { Controller } from "react-hook-form";
import Select from "react-select";

const SelectStyle = styled(Select)`
    .addl-class__control {
        min-width: 339px;
        min-height: 40px;
        background: #F5F5F5;
        border-radius: 8px;
        border: 0;
        margin-bottom: 3px;
    }
`;

const SelectContainer = styled.div`
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
const SelectElement = ({
    options,
    control,
    label,
    helperText,
    error,
    name
}) => {
    return <SelectContainer>
        <label className="label">{label}</label>
        <Controller
            control={control}
            name={name}
            render={({ field: { onChange, value, ref, name } }) => (
                <SelectStyle
                    name={name}
                    isMulti
                    inputRef={ref}
                    classNamePrefix="addl-class"
                    options={options}
                    onChange={val => {
                        onChange(val.map(v => v.value));
                    }}
                />
            )}
        />
        {
            helperText
                ? <label className="helperText">{helperText}</label>
                : null
        }
        {error && <label className="error">{error}</label>}
    </SelectContainer>
}

export default SelectElement;
