import Error from "next/error";
import { useRouter } from "next/router"
import { useState } from "react"

const Editar = ({task, error}) => {
  const router = useRouter()
  const [errors, setErrors] = useState({})
  const [newTask, setNewTask] = useState({
    title: task.title,
    description: task.description
  })

  if (error) {
    return <Error title={error.errorMessage} statusCode={error.statusCode}/>
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let errors = handleErrors()

    if (Object.keys(errors).length > 0) {  
      return setErrors(errors)
    }

    await editarTarea()
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

  const editarTarea = async () => {
    try {
      await fetch(`http://localhost:3000/api/tareas/${task._id}` ,{
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
      })

      router.push('/')

    } catch (error) {
      return console.error(error.errorMessage)
    }
  }
  
  return (
    <div className="container">
      <h1>Crea Una Tarea</h1>
      <form className="col-md-6" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Título</label>
          <input type="text" className="form-control" style={errors.title ? { borderColor: 'red' } : {}} id="title" aria-describedby="title" placeholder="Escriba un Titulo" onChange={handleState} value={newTask.title}/>
          <p>{ errors.title ? errors.title : '' } </p>
        </div>
        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea rows="3" className="form-control" style={errors.description ? { borderColor: 'red' } : {}} id="description" placeholder="Escriba una Descripcion" onChange={handleState} value={newTask.description}></textarea>
          <p>{ errors.description ? errors.description : '' } </p>
        </div>
        <div>
          <button type="submit" className="btn btn-info">Editar</button>
        </div>
      </form>
    </div>
  )
}

export async function getServerSideProps({ query: {id} }){
  const resp = await fetch(`http://localhost:3000/api/tareas/${id}`)
  
  if (resp.status === 200) {
    const task = await resp.json()
    return {
      props: { task }
    }
  }

  return {
    props: {
      error: {
        status: resp.status,
        errorMessage: 'Invalid Request Edit'
      }
    }
  }
}

export default Editar
