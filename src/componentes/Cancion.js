import React from 'react';

function Cancion({letra}) {

    // nota: si no hay busqueda, el componente no se mostrara.

    if(letra.length === 0) return null;
    
    return (
        <>
            <h2>Letra Canción</h2>
            <p className="letra">{letra}</p>
        </>
    )
}
export default Cancion;