import { IconButton } from "../components/Buttons/RoundButton"
import styled from "styled-components";
import { FlexCenterDiv } from "../components/Container";
import UserDetails from "../components/UserDetails";

const DetailsContainer = styled.div`
width: 24rem;
border: 1px solid;
padding: 1.5rem;
position: fixed;
right: 1rem;
top: 2rem;
min-height: 100vh;
background-color: #fff;
border: 0;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
border-radius: 16px;
h1 {
    color: #121C33;
    margin-bottom: 10px;
    text-transform: capitalize;
}
label {
    opacity: 0.6;
    color: #121C33;
}
h4 {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin: 10px 0 0 0;
    color: #121C33;
}
h3 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin: 10px 0 0 0;
    color: #121C33;
}
p {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin: 0;
    color: #121C33;
}
.Details_friendsCount {
    margin-left: 4rem;
}
.Details_UserDetails {
    height: 63vh;
    overflow-y: auto;
}
`;

const Details = ({
    name,
    description,
    characters = [],
    closeHandler,
    isPlanet,
    planet,
    friendsCount,
    friends = []
}) => {
    const charList = [...characters, ...friends];
    return <DetailsContainer>
        <IconButton onClick={closeHandler}>X</IconButton>
        <h1>{name}</h1>
        <label>{description}</label>
        {
            isPlanet
                ? <div>
                    <h4>Population</h4>
                    <p>{characters.length}</p>
                </div> : <FlexCenterDiv>
                    <div>
                        <h4>Planet</h4>
                        <p>{planet.name}</p>
                    </div>
                    <div className="Details_friendsCount">
                        <h4>Friends</h4>
                        <p>{friendsCount}</p>
                    </div>
                </FlexCenterDiv>
        }
       
        
        <FlexCenterDiv>
            <h3>{isPlanet ? 'Characters' : 'Friends'}</h3>
        </FlexCenterDiv>
        <div className="Details_UserDetails">
            {
                charList.map(character => (
                    <UserDetails title={character.name}
                    pictureUrl={character.pictureUrl}
                    description={isPlanet ? `${character.friendsCount} friends` : character.description}/>
                ))
            }
        </div>    
        
    </DetailsContainer>
}

export default Details;
