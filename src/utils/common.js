export const transformCharacters = (characters = []) => {
    return characters.map((character) => {
        return {
            value: character.id,
            label: character.name
        }
    })
}
