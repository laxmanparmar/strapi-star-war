import Card from "../components/Card/Card";
import { Container } from "../components/Container";
import { RoundButton } from "../components/Buttons/RoundButton";
import { useQuery } from "@apollo/client";
import { fetchCharactersQuery } from "../query";
import Loader from "../components/Loader";
import NoPlanet from "./NoPlanet";
import { useState } from "react";
import Details from "./Details";
import AddCharacter from "./AddCharacter";
import { transformCharacters } from "../utils/common";


const Characters = () => {
    const { loading, data = {} } = useQuery(fetchCharactersQuery());
    const [characterDetails, setCharacter] = useState(null);
    const [active, setActive] = useState(false);

    const closeHandler = () => setCharacter(null);
    if (loading) return <Loader />;
    if (!data.characters?.nodes?.length) return <NoPlanet />;
    return (
        <>
            <Container>
                {
                    data.characters.nodes.map((character, index) => (
                        <Card
                            key={index}
                            onClickHandler={() => setCharacter(character)} {...character} />
                    ))
                }
            </Container>
            <RoundButton isOpen={!!characterDetails} onClick={setActive}>+</RoundButton>
            {characterDetails ? <Details {...characterDetails} closeHandler={closeHandler} /> : null}
            <AddCharacter active={active} setActive={setActive}
                options={transformCharacters(data.characters.nodes)} />
        </>
    )
}
export default Characters;
