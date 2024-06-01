import styled from 'styled-components';

const Box = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-between;
height: 200px;
width: 272px;
background: #FFFFFF;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
border-radius: 16px;
margin: 14px;
cursor: pointer;
&:hover {
    background: #F5F5F5;
  }
img {
    height: 136px;
    width: 100%;
    border-radius: 16px 16px 0 0;
}
`;

const BoxFooter = styled.div`
width: 100%;
padding-left: 2rem;
height: 54px;
`;

const BoxTitle = styled.label`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
`;

const BoxDescription = styled.label`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 18px;
display: flex;
align-items: center;
color: #121C33;
opacity: 0.6;
`;
const Card = ({
    name,
    onClickHandler,
    pictureUrl
}) => {
    return (
        <Box onClick={onClickHandler}>
            <img src={ pictureUrl } alt={name} />
            <BoxFooter>
            <BoxTitle>{name}</BoxTitle>
            <BoxDescription>Pop: 235</BoxDescription>
            </BoxFooter>
        </Box>
    )
}

export default Card;
