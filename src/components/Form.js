import React, {useState} from 'react'
import {createAuto, getAllAutos} from '../service/AutosService'

const Form = () => {
    const [user, setUser] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault();
        createAuto(user).then(alert('Se ha guardado la información'))
        console.log(event)
    }

    const handleChange = (event) => {
        var changeUser = user
        if(event.target.name === 'Marca'){
            changeUser.marca = event.target.value
            setUser( changeUser)
        }else if(event.target.name === 'Placa'){
            changeUser.placa = event.target.value
            setUser( changeUser)
        }else if(event.target.name === 'numPas'){
            changeUser.numPas = event.target.value
            setUser( changeUser)
        }else if(event.target.name === 'Color'){
            changeUser.color = event.target.value
            setUser( changeUser)
        }
      
    }


    return (
        <div className="container">
            <form className="well form-horizontal" action=" " method="post"  id="contact_form">
            
            <center><h2><b>Registration Form</b></h2></center>

            <div className="form-group" onSubmit={handleSubmit}>
                <label className="col-md-4 control-label">Marca</label>  
                <div className="col-md-4 inputGroupContainer">
                    <div className="input-group">  
                        <input  name="Marca" placeholder="Marca" className="form-control" onChange={handleChange} type="text"/>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <label className="col-md-4 control-label">Placa</label>  
                <div className="col-md-4 inputGroupContainer">
                    <div className="input-group">  
                        <input  name="Placa" placeholder="Placa" className="form-control" onChange={handleChange} type="text"/>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <label className="col-md-4 control-label">Numero Pasajeros</label>  
                <div className="col-md-4 inputGroupContainer">
                    <div className="input-group">  
                        <input  name="numPas" placeholder="Numero Pasajeros" className="form-control" onChange={handleChange} type="number"/>
                    </div>
                </div>
            </div>
           
            <div className="form-group"> 
                <label className="col-md-4 control-label">Color</label>
                <div className="col-md-4 selectContainer">
                    <div className="input-group">
                        <select name="Color" className="form-control selectpicker" onChange={handleChange} >
                            <option value="">Rojo</option>
                            <option>Verde</option>
                            <option>Negro</option>
                            <option >Azul</option>
                            <option >Blanco</option>
                            <option >Gris</option>
                            <option >Plata</option>
                            <option >Dorado / Amarillo</option>
                            <option >Beige / Café</option>
                            <option >Otro</option>
                        </select>
                    </div>
                </div>
            </div>
            <button onClick={handleSubmit} className="btn btn-md btn-block btn-dark mb-4 mt-3" >
                Enviar
            </button>
        </form>

    </div>
    )
}

export default Form
