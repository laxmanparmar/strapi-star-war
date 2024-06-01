import styled from 'styled-components';
import {ReactComponent as PlanetLoader} from '../assets/planet-loader.svg';

const FadeStyle = styled.div`
    height: 100%;
    width: 100%;
    background-color: #0009;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2000;
`;
const LoaderContiner = styled.div`
    position: fixed;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ImageDiv = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 8px 16px rgb(0 0 0 / 10%);
    border-radius: 32px;
    height: 12rem;
    width: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Loader = () => {
   return (
       <FadeStyle>
        <LoaderContiner>
            <ImageDiv>
                <PlanetLoader />
            </ImageDiv>
        </LoaderContiner>
       </FadeStyle>
   ) 
}
export default Loader;
