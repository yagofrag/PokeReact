import axios from "axios";
import { useState } from "react"
import { useParams } from "react-router-dom";

const Pokemon = (props) =>{
    const[nivel, setNivel]= useState(1);
    const[nombre, setNombre]=useState();
    const[imagen1, setImagefront]=useState();
    const[imagen2, setImageback]=useState();
    const[baseHP, setHP]=useState();
    const[baseAtaque, setAtaque]=useState();
    const[baseDefensa, setDefensa]=useState();




    const params=useParams();


    const ID = params.id;

    function getStats (nombreStat, arrayStats){
        const filterArray= arrayStats.filter(s =>s.stat.name=== nombreStat);
        if(filterArray.length ===0){
            return  -1;
        }
        return filterArray[0].base_stat;
    }


    //la sinatxis mas moderna es async-await
    axios.get ("https://pokeapi.co/api/v2/pokemon/"+ ID)
    .then(response=>{
        console.log(response.data.name);
        setNombre(response.data.name);
        setImagefront(response.data.sprites.front_default);
        setImageback(response.data.sprites.back_default);
        setHP(getStats("hp",response.data.stats));
        setAtaque(getStats("attack",response.data.stats));
        setDefensa(getStats("defense",response.data.stats));
    })





    const onSubirNivel = (event) => {
        setNivel (n => n+1)
    }



    
    const onBajarNivel = (event) => {
        setNivel (n => n-1)
    }



    const calcularHP = (event) =>{

        return baseHP + (nivel * 3)
    }
    const calcularAtaque = (event) =>{

        return baseAtaque + (nivel * 2)
    }
    const calcularDefensa = (event) =>{

        return baseDefensa + (nivel * 2)
    }


    return <div>
        <h1>{nombre}</h1>

        <img src={imagen1}/> 
        <img src={imagen2}/>
        <h2>NIVEL: {nivel}</h2>
        <button onClick={onSubirNivel}>Subir Nivel</button>

        <button onClick={onBajarNivel}>Bajar Nivel</button>
        <p>HP:{calcularHP()}</p>
        <p>Ataque:{calcularAtaque()}</p>
        <p>Defensa:{calcularDefensa()}</p>









    </div>


}

export default Pokemon;