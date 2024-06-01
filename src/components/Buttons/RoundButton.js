import styled from "styled-components";

export const RoundButton = styled.button`
background: #121C33;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
border-radius: 40px;
height: 56px;
width: 56px;
color: white;
border: 0;
position: fixed;
border: 0;
right: ${props => props.isOpen ? '29rem' : '10rem'};
font-size: 3rem;
cursor: pointer;
bottom: 4rem;
`;

export const PrimaryButton = styled.button`
display: flex;
align-items: center;
padding: 12px 24px;
min-width: 86px;
height: 48px;
background: #121C33;
color: white;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
border-radius: 8px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
cursor: pointer;
`;

export const SecondaryButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
padding: 12px 24px;
width: 86px;
height: 48px;
cursor: pointer;
background: rgba(18, 28, 51, 0.05);
border-radius: 8px;
border: 0;
`;

export const IconButton = styled(SecondaryButton)`
height: 32px;
width: 32px;
align-items: center;
justify-content: center;
border: 0;
font-size: 18px;
margin-left: auto;
cursor: pointer;
`;
