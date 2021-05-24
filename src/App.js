import React, {useState, useEffect} from 'react'
import {getAllAutos} from './service/AutosService'
import Table from './components/table'
import Form from './components/Form'

const App = () => {

  const [autos, setAutos] = useState([]);

  useEffect(() => {
    getAllAutos().then(data => setAutos(data))
  }, [])

  
  const handleUpdate = (event) =>{
    event.preventDefault();
    getAllAutos().then(data => setAutos(data))
  }

  return (
    <div>
      <Form></Form>
      <Table autos={autos}></Table>
      <div class="d-grid gap-2 col-6 mx-auto">
        <button onClick={handleUpdate} className="btn btn-md btn-block btn-dark center" >
                Actualizar Tabla
        </button>
      </div>
      
    </div>
  )
}

export default App
