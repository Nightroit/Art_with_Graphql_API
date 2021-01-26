import React from 'react';
import {useQuery} from '@apollo/react-hooks'
import {GET_POKEMONS} from '../graphql/get-pokemons'
import {Pokemon} from '../components/Pokemon'
import Slider from "react-slick";
export const PokemonContainer = () => {
    
    const {data: {pokemons = []} = {}} = useQuery(GET_POKEMONS, {
        variables: {first: 9}, 
    })

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className = "pokemons">
            <Slider {...settings}>
                {pokemons.map(pokemon =>( console.log(pokemon)))}
            { pokemons &&  pokemons.map(pokemon =>( 
                    <div>
    
                        <><Pokemon pokemon = {pokemon}/></>
                    </div>
            ))} 
            </Slider>
        </div>
    )
}
