import { gql } from "@apollo/client";

export const fetchPlanetsQuery = (page = 1, pageSize = 10, characterLimit) => {
    return gql`
    query {
        planets(page: ${page}, pageSize: ${pageSize}) {
          nodes {
            code
            name
            pictureUrl
            description
            id
            characters {
              name
              pictureUrl
              id
              friendsCount
            }
          }
        }
      },
    `
};

export const fetchCharactersQuery = () => {
  return gql`
    query {
      characters {
        nodes {
          id
          name
          description
          friendsCount
          pictureUrl
          planet {
            name
          }
          friends {
            name
            description
            pictureUrl
          }
        }
      }
    }
  `
};

export const addNewPlanet = () => {
  return gql`
    mutation($planetInfo: PlanetPayload!) {
      createPlanet(planetInfo: $planetInfo) {
        name
        id
        description
      }
    }
  `;
};

export const addCharacter = () => {
  return gql`
    mutation($characterInfo: CharacterPayload!) {
      createCharacter(characterInfo: $characterInfo) {
        name
        id
      }
    }
  `
};
