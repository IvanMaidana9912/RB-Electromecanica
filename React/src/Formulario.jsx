import React, { useState } from 'react';

export const Formulario = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [spanText, setSpanText] = useState('');

    const validarFormulario = () => {
        let count = null;

        if (name === '') {
            const msj = 'Ingrese un valor para el campo de Nombre';
            setNameError(msj);
            return false;
        } else {
            const names = name;
            for (let i = 0; i < names.length; i++) {
                if (names[i] === '@') {
                    count = i;
                    for (let j = i; j < names.length; j++) {
                        if (names[j] === '.') {
                            const msj = 'Seleccionó Email';
                            setNameError(msj);
                        }
                    }
                }
            }
            if (count === null) {
                count = name.length
                const msj = 'Seleccionó Nombre de Usuario';
                setNameError(msj);
            }
        }

        if (password === '') {
            const msj = 'Ingrese un valor para el campo de Contraseña';
            setPasswordError(msj);
            return false;
        } else {
            setPasswordError('');
        }

        if (password.length >= 8) {
            const nameCapitalize1 = name.charAt(0).toUpperCase();
            const nameCapitalize2 = name.slice(1, count);
            const nameCapitalize = nameCapitalize1 + nameCapitalize2;
            const msj = `Hola ${nameCapitalize}! seamos cientificos de datos 😎`;
            setSpanText(msj);
            return false;
        } else {
            const msj = 'Ingrese un valor con más de 8 caracteres para el campo de Contraseña';
            setPasswordError(msj);
        }
    };

    return (
        <div className="container py-5">
            <div className="row mb-5">
                <div className="col-md-6 offset-md-3">
                    <form>
                        <h1 className="text-center mb-5">Iniciar Sesión</h1>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" autoComplete="current-password" className="form-control" id="nombre" placeholder="Ingrese su nombre de Usuario o Email" value={name} onChange={(e) => setName(e.target.value)} />
                            <div id="nombreERROR" className="form-text text-danger">{nameError}</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña</label>
                            <input type="password" autoComplete="current-password" className="form-control" id="password" placeholder="Ingrese su contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <div id="passwordERROR" className="form-text text-danger">{passwordError}</div>
                        </div>
                        <button type="button" id="btn-formulario" className="btn btn-primary" onClick={validarFormulario}>Iniciar Sesión</button>
                    </form>
                </div>
            </div>
            <h1 id="span" className="text-center">{spanText}</h1>
        </div>
    );
};