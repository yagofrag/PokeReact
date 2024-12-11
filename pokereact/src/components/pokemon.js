
import { useState } from "react"

const Pokemon = (props) =>{
    const[nivel, setNivel]= useState(1);








    const onSubirNivel = (event) => {
        setNivel (n => n+1)
    }



    
    const onBajarNivel = (event) => {
        setNivel (n => n-1)
    }



    const calcularHP = (event) =>{

        return 65 +(nivel*3)
    }
    const calcularAtaque = (event) =>{

        return 65 +(nivel*3)
    }
    const calcularDefensa = (event) =>{

        return 65 +(nivel*3)
    }


    return <div>
        <h1>pokemon</h1>
        <h2>NIVEL: {nivel}</h2>
        <button onClick={onSubirNivel}>Subir Nivel</button>

        <button onClick={onBajarNivel}>Bajar Nivel</button>
        <p>HP:{calcularHP()}</p>
        <p>Ataque:{calcularAtaque()}</p>
        <p>Defensa:{calcularDefensa()}</p>









    </div>


}

export default Pokemon;