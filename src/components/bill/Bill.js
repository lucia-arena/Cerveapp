import React from 'react'
import './Bill.css';
import { Table, Button, Container, ModalBody, Modal, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';
import _ from 'lodash';

const data=[
    { id: 1, bebida: "cerveza", precio: "1,80" },
    
];

class Bill extends React.Component{
    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
          id: "",
          bebida: "",
          precio: "",
        },
      };

      mostrarModalActualizar = (dato) => {
        this.setState({
          form: dato,
          modalActualizar: true,
        });
      };
    
      cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
      };
    
      mostrarModalInsertar = () => {
        this.setState({
          modalInsertar: true,
        });
      };
    
      cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
      };
    
      editar = (dato) => {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
          if (dato.id == registro.id) {
            arreglo[contador].bebida = dato.bebida;
            arreglo[contador].precio = dato.precio;
          }
          contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
      };
    
      eliminar = (dato) => {
        var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
        if (opcion == true) {
          var contador = 0;
          var arreglo = this.state.data;
          arreglo.map((registro) => {
            if (dato.id == registro.id) {
              arreglo.splice(contador, 1);
            }
            contador++;
          });
          this.setState({ data: arreglo, modalActualizar: false });
        }
      };
    
      insertar= ()=>{
        var valorNuevo= {...this.state.form};
        valorNuevo.id=this.state.data.length+1;
        var lista= this.state.data;
        lista.push(valorNuevo);
        this.setState({ modalInsertar: false, data: lista });
      }
    
      _getTotal(){return _.sumBy(this.state.data, function(o) { return o.precio; 
      }
      );
    }

      handleChange = (e) => {
        this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
          },
        });
      };
    render(){
    return (
        <>
        <Container className="billContainer">
        <br/>
        <br/>
        <Table>
            <thead>
              <tr>
                <th>Nº Bebidas</th>
                <th>Bebida</th>
                <th>Precio</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.bebida}</td>
                  <td>{dato.precio}</td>
                  <td>
                    <Button color="warning" onClick={() => this.mostrarModalActualizar(dato)}> Editar </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="btn-add-container">
            <Button className="btn btn-add btn-lg" color="dark" onClick={()=>this.mostrarModalInsertar()}>+</Button>
          </div>   
          <div className="total-container">
              <h5>Total: $ {this._getTotal()}</h5> 
          </div>  
        </Container>
        
        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input className="form-control" readOnly type="text" value={this.state.form.id}/>
            </FormGroup>
            
            <FormGroup>
              <label>
                Bebida: 
              </label>
              <input className="form-control" name="bebida" type="text" onChange={this.handleChange} value={this.state.form.bebida}/>
            </FormGroup>
            
            <FormGroup>
              <label>
                Precio: 
              </label>
              <input className="form-control" name="precio" type="text" onChange={this.handleChange} value={this.state.form.precio}/>
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={() => this.editar(this.state.form)}>Editar </Button>
            <Button color="danger" onClick={() => this.cerrarModalActualizar()}>Cancelar</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar bebida</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              <input className="form-control" readOnly type="text" value={this.state.data.length+1}/>
            </FormGroup>
            
            <FormGroup>
              <div>
             	<tr><label for="select" tabindex="4">Selecciona una bebida: </label><br/>
                    <select name="select">
                        <option value="">--Selecciona--</option> 
                        <option value="value1">Cerveza</option> 
                        <option value="value2">Agua</option>
                        <option value="value3">Refresco</option>
                        <option value="value4">Vino</option> 
                    </select></tr>
            </div>
            </FormGroup>
            
            <FormGroup>
              <label>
                precio: 
              </label>
              <input
                className="form-control"
                name="precio"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="dark" onClick={() => this.insertar()}> Insertar </Button>
            <Button className="btn btn-danger" onClick={() => this.cerrarModalInsertar()}> Cancelar </Button>
          </ModalFooter>
        </Modal>
      </>
    )
    }
}

export default Bill

