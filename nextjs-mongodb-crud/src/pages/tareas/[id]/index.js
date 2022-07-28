import Error from "next/error";
import { useRouter } from "next/router";

const Detalle = ({task, error}) => {

  const router = useRouter()

  const handleDelete = async () => {
    try {
      await fetch(`http://localhost:3000/api/tareas/${task._id}` ,{
        method: 'DELETE'
      })

      router.push('/')

    } catch (error) {
      return console.error(error.errorMessage)
    }
  }

  if (error) {
    return <Error title={error.errorMessage} statusCode={error.statusCode}/>
  }

  return (
    <div className="card" key={task._id}>
      <div className="card-body">
          <h5 className="card-title">{ task.title }</h5>
          <p className="card-text">{ task.description }</p>
          <button className="btn btn-primary" onClick={() => { router.push('/') }}>Volver</button>
          <button className="btn btn-danger" onClick={handleDelete}>Eliminar</button>
      </div>
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
        errorMessage: 'Invalid Request'
      }
    }
  }
}
  
export default Detalle