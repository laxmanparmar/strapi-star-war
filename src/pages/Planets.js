import Card from "../components/Card/Card";
import { Container } from "../components/Container";
import { useState } from "react";
import { RoundButton } from "../components/Buttons/RoundButton";
import Details from "./Details";
import Loader from "../components/Loader";
import AddPlanet from "./AddPlanet";
import NoPlanet from "./NoPlanet";
import { useQuery } from "@apollo/client";
import { fetchPlanetsQuery } from "../query";

const Planets = () => {
    const { loading, data = {} } = useQuery(fetchPlanetsQuery(), {
        notifyOnNetworkStatusChange: true
    });

    const [active, setActive] = useState(false);
    const [planet, setPlanet] = useState(null);

    const closeHandler = () => setPlanet(null);
    if (loading) return <Loader />;
    return (
        <>
            {
                !data.planets?.nodes?.length ? <NoPlanet onClickHandler={setActive} /> :
                    <>
                        <Container>
                            {
                                data.planets.nodes.map((planet, index) => (
                                    <Card
                                        key={index}
                                        onClickHandler={() => setPlanet(planet)} {...planet} />
                                ))
                            }
                        </Container>
                        <RoundButton isOpen={!!planet} onClick={setActive}>+</RoundButton>
                        {planet ? <Details {...planet} closeHandler={closeHandler}
                            addCharacterHandler={setActive}
                            isPlanet={true} /> : null}
                    </>
            }

            <AddPlanet active={active} setActive={setActive} />
        </>
    )
}
export default Planets;
