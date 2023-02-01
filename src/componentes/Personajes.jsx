import React from "react";
import '../estilos/Personajes.css'

function Personaje(props) {
    return (
        <div className='contenedor-personajes'>
                <img 
                className='imagen-personaje'
                src={require(`../imagenes/personaje-${props.imagen}.png`)}
                alt='Foto de Bojack' />
             <div className="contenedor-texto-personaje">
                <p className="nombre-personaje">{props.nombre}</p>
                <p className="cargo-personaje">{props.cargo}</p>
                <p className="texto-personaje">{props.texto}</p>
             </div>
        </div>
    );
}

export default Personaje;