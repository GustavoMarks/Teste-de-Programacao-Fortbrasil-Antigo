import React, { Component } from 'react';
import api from '../API/Api';


class CreateNewData extends Component {

    state = {
        id: new Date().getTime(),
        nome: "",
        local: "",
    }

    handleInputs = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    create = () => {
        api.post('/estabelecimentos', this.state).then( () => {
            alert("Novo estabelecimento criado!")
            this.props.goBack(0);
        }).catch( err => {
            alert("Erro inesperado!")
            this.props.goBack(0);
        })
    }

    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <h2>REGISTRAR NOVO ESTABELECIMENTO</h2>

                    <label htmlFor='userInput'>NOME:</label>
                    <input className='App-input' id='userInput' type='text' name="nome" onChange={this.handleInputs} value={this.state.nome}/>

                    <label htmlFor='passwordInput'>LOCAL:</label>
                    <input className='App-input' id='passwordInput' name="local" onChange={this.handleInputs} value={this.state.local}/>

                    <button className='App-button' onClick={() => this.create()} >
                        ENVIAR
                    </button>
                    <button className='App-button' type='button' onClick={() => this.props.goBack(0)}>
                        CANCELAR
                    </button>
                    
                </header>
            </div> 
        )
    }
    
}

export default CreateNewData;