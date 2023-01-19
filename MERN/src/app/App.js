import React, { Component } from 'react';

class App extends Component {

    constructor() {
        super();

        this.state = {
            _id: '',
            title: '',
            description: '',
            tasks: []
        }
    }

    componentDidMount() {
        this.getTask();
    }

    addTask(e) {
        if (this.state._id) {
            fetch(`/api/tareas/${this.state._id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(item => {
                M.toast({html: 'Tarea Actualizada!'});
                this.setState({
                    _id: '',
                    title: '',
                    description: ''
                });
                this.getTask();
            })
            .catch(err => console.error(err));


        } else {
            fetch('/api/tareas', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                this.setState({ title: '', description: '' });
                this.getTask();
                M.toast({html: 'Tarea Guardada!'});
            })
            .catch(err => console.error(err));
        }

        e.preventDefault();
    }

    getTask() {
        fetch('/api/tareas')
        .then(res => res.json())
        .then(items => {
            this.setState({ tasks: items.data });
        })
        .catch(err => console.error(err));
    }

    deleteTask(id) {
        if (confirm('¿Estas seguro de eliminar esta tarea?')) {
            fetch(`/api/tareas/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(resp => {
                M.toast({html: 'Tarea Eliminada!'});
                this.getTask()
            })
            .catch(err => console.error(err));
        }        
    }

    editTask(id) {
        fetch(`/api/tareas/${id}`)
        .then(res => res.json())
        .then(item => {
            this.setState({
                _id: item.data._id,
                title: item.data.title,
                description: item.data.description
            });
        })
        .catch(err => console.error(err));
    }

    handleInput(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <nav className='light-blue darken-4'>
                    <div className='container'>
                        <a className='brand-logo' href="/">MERN</a>
                    </div>
                </nav>

                <div className='container'>
                    <div className='row'>
                        <div className='col s5'>
                            <div className='card'>
                                <div className='card-content'>
                                    <form onSubmit={(e) => this.addTask(e) }>
                                        <div className='row'>
                                            <div className='input-field col s12'>
                                                <input type="text" name='title' onChange={(e) => this.handleInput(e)} value={this.state.title} placeholder='Ingresa el Título de la Tarea' />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='input-field col s12'>
                                                <textarea className='materialize-textarea' name='description' onChange={(e) => this.handleInput(e)} value={this.state.description} placeholder='Ingresa la descripción de la Tarea'></textarea>
                                            </div>
                                        </div>
                                        <button className='btn light-blue darken-4' type='submit'> Guardar Tarea</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className='col s7'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>TAREA</th>
                                        <th>DESCRIPCION</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.tasks.map(task => {
                                            return(
                                                <tr key={task._id}>
                                                    <td>{ task.title }</td>
                                                    <td>{ task.description }</td>
                                                    <td> 
                                                        <button className='btn light-blue darken-4' onClick={ () => this.editTask(task._id) }> 
                                                            <i className='material-icons'>edit</i>
                                                        </button> 
                                                    </td>
                                                    <td> 
                                                        <button className='btn light-blue darken-4' onClick={ () => this.deleteTask(task._id) }> 
                                                            <i className='material-icons'>delete</i> 
                                                        </button> 
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;