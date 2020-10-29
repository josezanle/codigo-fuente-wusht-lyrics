import React, { useState } from 'react';

function Formulario({consultarAPILetra}) {

    const [busqueda, agregarBusqueda] = useState({
        artista: '',
        cancion: ''
    })

    // Función para actualizar el state de los inputs
    const actualizarState = e => {
        agregarBusqueda({
            ...busqueda, 
            [e.target.name] : e.target.value
        });
    }

    // Cuando hacemos submit al form
    const enviarInformacion = e => {
        e.preventDefault();

        consultarAPILetra(busqueda);

    }

    return (
        <div className="bg-info bg-dark">
          <div className="container">
                
              <div className="row">
                  <form 
                    onSubmit={enviarInformacion}
                    className="col card text-white bg-transparent  mb-1 pt-5 pb-2">
                      <fieldset>
                            <h1 className="mb-1">
                                <span>W</span>
                                <span>u</span>
                                <span>s</span>
                                <span>h</span>
                                <span>t</span>
                            </h1>
                            <p className="text-left mb-5">Buscador de Letras de Canciones</p>
                          <div className="row">
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artista</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="artista" 
                                        placeholder="Nombre Artista"
                                            autoComplete="off"
                                        onChange={actualizarState} 
                                        required
                                    />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                    <label>Canción</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="cancion" 
                                        placeholder="Nombre Canción"
                                        autoComplete="off"
                                        onChange={actualizarState}  
                                        required
                                    />
                                </div>
                              </div>
                          </div>
                          <button type="submit" className="btn btn-primary float-left">Buscar</button>
                      </fieldset>
                  </form>
              </div>
          </div>
      </div>
    )
}

export default Formulario;