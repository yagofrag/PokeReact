import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
const PokeLista =(props) =>{

    const[pokemons,setPokemons]= useState([]);
    const params=useParams();
    
    const ID = params.id;


        /*
    axios.get("https://pokeapi.co/api/v2/pokemon")
    .then(response =>{

        setPokemons(response.data.results);


    })
        */
    useEffect(() => {
        axios.get ("https://pokeapi.co/api/v2/pokemon/"+ ID)
        .then(response=>{
            
            setPokemons(response.data.results);
        })})



    return <div>
        <h1>Lista</h1>
        { pokemons.map(p => <p>Bo Nadal</p>)}
    </div>
}

export default PokeLista;