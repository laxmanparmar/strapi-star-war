import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

const PLANETS = '/planets';
const CHARACTERS = '/characters';

const TabsContainer = styled.div`
display: flex;
`;

const Tab = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 8px 24px;
min-width: 68px;
height: 24px;
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
background: ${props => props.isActive ? 'rgba(18, 28, 51, 0.05)' : '#f5f5f5'};
border-radius: 8px;
margin: 0px 0px;
cursor: pointer;
color: ${props => props.theme.main};
`;

const Tabs = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const changeHandler = (path) => {
        navigate(path);
    }
    return (
        <TabsContainer>
            <Tab isActive={location.pathname === PLANETS || location.pathname === "/" } onClick={ () => changeHandler(PLANETS) }>PLANETS</Tab>
            <Tab isActive={location.pathname === CHARACTERS} onClick={ () => changeHandler(CHARACTERS) }>CHARACTERS</Tab>
        </TabsContainer>
    )
}
export default Tabs;
