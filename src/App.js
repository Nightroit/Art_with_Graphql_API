import React, { useState, useEffect }  from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from "@apollo/react-hooks"
import {PokemonContainer}  from './containers/PokemonsContainer';



function App() {

  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/"
  });


  return (
    <ApolloProvider client = {client}>

            <PokemonContainer/>
    </ApolloProvider>
  )
}

export default App;