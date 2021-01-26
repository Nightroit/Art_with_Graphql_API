import gql from 'graphql-tag'

export const GET_POKEMONS = gql`
    query pokemons($first: Int!) {
        pokemons(first: $first) {
            id
            name
            image
            maxHP
            maxCP
            weight {
                minimum
            }
            classification
            attacks {
                special {
                    name
                    damage
                }
            }
        }
    }
`