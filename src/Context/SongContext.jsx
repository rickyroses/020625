import { createContext, useState, useEffect, Children } from "react";
import canciones from "../Utils/listaCanciones.json";

//* 1. CREAR CONTEXTO
const SongContext = createContext(); //creamos el contexto y mi contexto empieza vacio

//* 2. CREAR EL PROVIDER
// EL PROVIDER ES UN COMPONENTE QUE ENVUELVE A TODOS LOS COMPONENTES
// QUE VAN A TENER ACCESO AL CONTEXTO

function SongProvider({children}){
    const [list, setList] = useState([]); // estado que va a contener la lista de canciones
    const [loading, setLoading] = useState(true); // esta cargando la lista de canciones?
    const [selectedSong, setSelectedSong] = useState({}); // estado que va a contener la cancion seleccionada


    //simulamos la llamada a la API
    useEffect(() => {
        setTimeout(() => {
            setList(canciones)
            setLoading(false) // cambio a false ya estan cargando las canciones
            
        }, 2000)
    },[])


    const data = {
        list, 
        loading,
        selectedSong,
        setSelectedSong
    }
    // el provedor (provider)  es un componente que envuelve a otros componentes
    // y le pasa un objeto con los datos que queremos compartir
    return (
        <SongContext.Provider value={data}>
            {children}
        </SongContext.Provider>
    )
}

export {SongContext, SongProvider}