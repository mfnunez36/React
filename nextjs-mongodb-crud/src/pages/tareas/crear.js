import { useRouter } from "next/router"
import { useState } from "react"

const Crear = () => {
  const router = useRouter()

  const [errors, setErrors] = useState({})

  const [newTask, setNewTask] = useState({
    title: '',
    description: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    let errors = handleErrors()

    if (Object.keys(errors).length > 0) {  
      return setErrors(errors)
    }

    await crearTarea()
    await router.push('/')
  }

  const handleState = (e) => {
    setNewTask({ ...newTask, [e.target.id]: e.target.value })
  }

  const handleErrors = () => {
    const errors = {}

    if (!newTask.title) { errors.title = "El título es requerido" }
    if (!newTask.description) { errors.description = "La descripción es requerida" }
    
    return errors
  }

  const crearTarea = async () => {
    try {
      await fetch('http://localhost:3000/api/tareas', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
      })
    
    } catch (error) {
      console.error(error.errorMessage)
    }
  }

  return (
    <div className="container">
      <h1>Crea Una Tarea</h1>
      <form className="col-md-6" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input type="text" className="form-control" style={errors.title ? { borderColor: 'red' } : {}} id="title" aria-describedby="title" placeholder="Escriba un Titulo" onChange={handleState}/>
          <p>{ errors.title ? errors.title : '' } </p>
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea rows="3" className="form-control" style={errors.description ? { borderColor: 'red' } : {}} id="description" placeholder="Escriba una Descripcion" onChange={handleState}></textarea>
          <p>{ errors.description ? errors.description : '' } </p>
        </div>
        <div>
          <button type="submit" className="btn btn-primary">Crear</button>
        </div>
      </form>
    </div>
  )
}

export default Crear
