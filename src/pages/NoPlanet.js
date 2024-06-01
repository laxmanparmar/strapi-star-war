import { ReactComponent as PlanetLoader } from '../assets/planet-loader.svg';
import { PrimaryButton } from '../components/Buttons/RoundButton';
import styled from 'styled-components';

const NoPlanetStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 4rem 0;

label {
    font-weight: 800;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    color: #121C33;
    margin-top: 40px;
    margin-bottom: 24px;
}
`
const NoPlanet = ({
    onClickHandler
}) => {
    return (
        <NoPlanetStyle>
            <PlanetLoader />
            <label>Space doesn’t have to be so empty.</label>
            {
                onClickHandler ?
                    <PrimaryButton onClick={onClickHandler}>
                        Create Planet
                    </PrimaryButton> : null
            }

        </NoPlanetStyle>
    )
};

export default NoPlanet;
