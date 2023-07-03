import { Link } from "react-router-dom"

export const Register = () => {
    return (
        <div className="container py-5 vh-100">
            <Link className='fs-3 text-decoration-none' to={'/'}>⬅</Link>
            <div className="row mb-5">
                <div className="col-md-6 offset-md-3">
                    <form>
                        <h1 className="text-center mb-5">Sign Up</h1>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" autoComplete="current-password" className="form-control" id="nombre" placeholder="Registre su nombre de Usuario o Email"  required={true}/>
                            <div id="nombreERROR" className="form-text text-danger"></div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input type="password" autoComplete="current-password" className="form-control" id="password" placeholder="Ingrese la contraseña" />
                            <div id="passwordERROR" className="form-text text-danger"></div>
                        </div>
                        <button type="button" id="btn-formulario" className="btn btn-primary">Sign Up!</button>
                    </form>
                </div>
            </div>
            <div id="span" className="text-center fs-3"></div>
        </div>
    )
}