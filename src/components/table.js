import React from 'react'
import {updateState} from '../service/AutosService'

const Table = ({autos}) => {

    const updateS = (event, id) =>{
        event.preventDefault();
        updateState(id).then(alert('Actualizado estado'))
     
      }
    return (
        <div>
            <table className="table table-success table-striped">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Marca</th>
          <th scope="col">Color</th>
          <th scope="col">Numero_Pasajeros</th>
          <th scope="col">Placa</th>
          <th scope="col">Estado</th>
          <th scope="col">Cambio</th>
        </tr>
      </thead>
        <tbody>
          
          {
            autos.map(auto => 
              <tr>
                <th scope="row">{auto.id}</th>
                <th>{auto.marca}</th>
                <th>{auto.color}</th>
                <th>{auto.numPas}</th>
                <th>{auto.placa}</th>
                <th>{auto.estado ? 'activo':'inactivo'}</th>
                <th>
                    <button onClick={e => updateS(e,auto.id)}>Actualizar</button>
                </th>
              </tr>
            )
          }
          </tbody>
      </table>
            
        </div>
    )
}

export default Table
