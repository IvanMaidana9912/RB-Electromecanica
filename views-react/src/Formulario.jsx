import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import db from './../public/ddbb.json'

const [users, pass] = db

export const Formulario = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [spanSuccess, setSpanSuccess] = useState('');

    let count = null;
    const enable = (user, pw) => {
        if ((!user.includes('.') || user.includes('<') || user.includes('*') || user.includes('/') || !user.includes('@') || !parseInt(user.length) < 6) && (parseInt(pw.length) < 8 || pw.includes('select') || pw.includes('SELECT') || pw.includes(' ') || pw.includes('<') || pw.includes('/'))) { return 'error' }
    }

    const validateEnable = name !== '' && password !== '' ? enable(name, password) : 'error';

    const validarFormulario = () => {
        if (name === '' || name.includes(' ') || name.includes('<') || name.includes('/') || name.includes('select') || name.includes('SELECT')) {
            const msj = 'Ingrese un valor para el campo de Email';
            setNameError(msj);
            return false;
        } else {
            for (let i = 0; i < name.length; i++) {
                if (name[i] === '@') {
                    count = i;
                }
            }
        }

        if (password === '' || password.includes(' ') || password.includes('<') || password.includes('/') || password.includes('select') || password.includes('SELECT')) {
            const msj = 'Ingrese un valor para el campo de Contraseña';
            setPasswordError(msj);
            return false;
        }
        if (password.length < 8) {
            const msj = 'Ingrese un valor con más de 8 caracteres para el campo de Contraseña';
            setPasswordError(msj);
        } else {
            const nameCapitalize1 = name.charAt(0).toUpperCase();
            const nameCapitalize2 = name.slice(1, count);
            const nameCapitalize = nameCapitalize1 + nameCapitalize2;
            const msj = `Hola ${nameCapitalize}! sea Bienvenido 😎`;
            const relative = `${window.location.href}`.split('LogIn')
            const [redirect] = relative

            const promise = new Promise((resolve) => {
                const reddFunc = () => {
                    setSpanSuccess(msj)
                    window.location.href = `${redirect}user`
                }

                setTimeout(() => {
                    resolve(Boolean(users.username.find(user => user === name)) && Boolean(pass.password.find(pw => pw === password)) ? reddFunc() : setSpanSuccess("Ingresó mal el usuario o la contraseña.\n Vuelva a intentar, por favor."))
                }, 1000)
            }
            )
        }
    };

    return (
        <div className="container py-5 vh-100">
            <Link className='fs-3 text-decoration-none' to={'/'}>⬅</Link>
            <div className="row mb-5">
                <div className="col-md-6 offset-md-3">
                    <form>
                        <h1 className="text-center mb-5">Iniciar Sesión</h1>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Email</label>
                            <input type="text" autoComplete="current-password" className="form-control" id="nombre" placeholder="Ingrese su Email" value={name} onChange={(e) => setName(e.target.value)} />
                            <div id="nombreERROR" className="form-text text-danger">{nameError}</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input type="password" required autoComplete="current-password" className="form-control" id="password" placeholder="Ingrese su contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <div id="passwordERROR" className="form-text text-danger">{passwordError}</div>
                        </div>
                        <button type="button" id="btn-formulario" className="btn btn-primary" onClick={validarFormulario} disabled={validateEnable}>Iniciar Sesión</button>
                    </form>
                </div>
            </div>
            <h1 id="span" className="text-center">{spanSuccess}</h1>
        </div>
    );
};