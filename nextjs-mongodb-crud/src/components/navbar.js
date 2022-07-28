/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
    const router = useRouter()
    
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link href='/'>
                    <img width='3%' height='3%' className="navbar-brand" src='/favicon.ico' alt='logo'/>
                </Link>
                
                <div className="navbar-text">
                    <button className='btn btn-primary' onClick={() => router.push("/tareas/crear") }>Crear Tarea</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar