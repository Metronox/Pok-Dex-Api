import { Container } from "@mui/system";
import React, {useEffect, useState} from "react";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/CartaP";
import { Grid } from "@mui/material";
import axios from "axios";


export const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);

    useEffect(() => {
        getPokemons();
    }, []);

    const getPokemons = () => {
        var endpoints = [];
        for (var i = 1; i < 300; i++) {
            endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
            .then((res) => {
                setPokemons(res);
                setFilteredPokemons(res);
            })

    };

    const pokemonFilter = (name) => {
        const filtered = pokemons.filter((pokemon) =>
            pokemon.data.name.toLowerCase().includes(name.toLowerCase())
        );
        setFilteredPokemons(filtered);
    };

    return (
        <div>
            <Navbar pokemonFilter={pokemonFilter} />
            <Container maxWidth="false" sx={{ backgroundColor: "gray" }}>
                <Grid container spacing={3}>
                    {filteredPokemons.map((pokemon, key) => (
                        <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                            <PokemonCard
                                name={pokemon.data.name}
                                image={pokemon.data.sprites.front_default}
                                types={pokemon.data.types}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};
