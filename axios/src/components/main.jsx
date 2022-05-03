import React from "react";
import Card from "./card";
import Pokeinfo from "./pokeinfo";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Main = () => {

    const [pokeData, setPokeData] = useState([])
    const [loading, setLoading] = useState(true);
    const [url, setURL] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState();

    const pokeFun = async () => {

        setLoading(true)
        const res = await axios.get(url);
        //console.log(res.data.results)
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
        //console.log(pokeData)

    }

    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url)
            //console.log(result.data)
            setPokeData(state => {
                state = [...state, result.data]
                state.sort((a, b)=>a.id>b.id?1:-1)
                return state;
            })
        })
    }

    useEffect(() => {
        pokeFun();
    }, [url])

    return (
        <>
        <div classsName="container">

            <div className="left-content">

                <Card pokemon={pokeData} loading={loading} infoPokemon={poke => setPokeDex(poke)} />

                <div className="btn-group">

                    {prevUrl && <button onClick={() => {
                        setPokeData([])
                        setURL(prevUrl)
                    }}>Previous</button>}
                    {nextUrl && <button onClick={() => {
                        setPokeData([])
                        setURL(nextUrl)
                    }}>Next</button>}

                </div>

            </div>

            <div className="right-content">

                <Pokeinfo data={pokeDex} />

            </div>

        </div>

        </>
    )
}

export default Main;