import { useRouter } from "next/router"

/* eslint-disable @next/next/no-img-element */
export default function HomePage({ tareas }) {
  const router = useRouter()
  
  if (tareas.length === 0) { 
    return (
        <div className="row text-center">
            <div className="col">
                <h1>No Existen Tareas</h1>
                <img width="150" height="200" src="https://cdn.iconscout.com/icon/free/png-256/data-not-found-1965034-1662569.png" alt="nodataIMG"/>
                <div>
                  <button className="btn btn-primary">Crear Tarea</button>
                </div>
            </div>
        </div>
    )
  }
  
  return (
    <div className='md-6 p-5'>
      {
        tareas.map(task => {
          return (
            <div className="card" key={task._id}>
                <div className="card-body">
                    <h5 className="card-title">{ task.title }</h5>
                    <p className="card-text">{ task.description }</p>
                    <button className="btn btn-secondary" onClick={() => { router.push(`/tareas/${task._id}`) }}>Ver</button>
                    <button className="btn btn-danger" onClick={() => { router.push(`/tareas/${task._id}/editar`) }}>Editar</button>
                </div>
            </div>
          )
        })
      }
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const tareas = await fetch('http://localhost:3000/api/tareas').then(resp => resp.json())
  return {
    props: {
      tareas
    }
  }
}