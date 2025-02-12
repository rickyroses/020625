//* 3.Crear un hook para usar o consumir el contexto de la lista de canciones

import { SongContext } from "../Context/SongContext";
import { useContext } from "react";


// hacer el export de una funcion

export const useSongContext = () => {
    //guardo mi contexto en una constante
    const context = useContext(SongContext) // quiero usar mi contexto y esto lo guardo en context

    // si no hay contexto, si es un undefined (vacio) lanzo un error
    if(!context){
        throw new Error('useSongContext debe ser usado dentro de SongProvider')
    }
    return context
}