import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App.css";
import { bootstrap } from "./bootstrap.css";
import { styles } from "./styles.css";
import { CuadrosTexto } from './CuadrosTexto';
import { Tabla } from './Tabla';
import { AgregaraLaTabla } from './AgregaraLaTabla';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div className='container'>
  <h1 className='centrartexto'>Formulario nuevos usuarios</h1>
  <div className='row'>
  <CuadrosTexto titulolabel= "Nombre" tipoinput="text" nombreinput="nombre" idinput="nombre"
  placeholderinput="Su nombre aquí:" tamanoinput="col-md-4"/>

  <CuadrosTexto titulolabel= "Apellido" tipoinput="text" nombreinput="apellido" idinput="apellido"
  placeholderinput="Su apellido aquí:" tamanoinput="col-md-4"/>

<CuadrosTexto titulolabel= "Dirección" tipoinput="text" nombreinput="direccion" idinput="direccion"
  placeholderinput="Su dirección aquí:" tamanoinput="col-md-4"/>

  </div>
  <br></br>
  <div className='row'>

  <CuadrosTexto titulolabel= "Teléfono" tipoinput="number" nombreinput="telefono" idinput="telefono"
  placeholderinput="Su teléfono aquí:" tamanoinput="col-md-3"/>

  <CuadrosTexto titulolabel= "Email" tipoinput="email" nombreinput="email" idinput="email"
  placeholderinput="Su correo electrónico aquí:" tamanoinput="col-md-3"/>

<CuadrosTexto titulolabel= "Documento" tipoinput="number" nombreinput="documento" idinput="documento"
  placeholderinput="Su número de documento aquí:" tamanoinput="col-md-3"/>

  <CuadrosTexto titulolabel= "Lugar de expedición" tipoinput="text" nombreinput="expedicion" idinput="expedicion"
  placeholderinput="Lugar de expedición del documento:" tamanoinput="col-md-3"/>
  </div>
  <br/><br/>
  <button className='btn btn-primary centrarboton' onClick={AgregaraLaTabla}>Guardar y enviar</button>
  <div>
  <br/><br/>
  <hr></hr>
  </div>
  <Tabla/>
  </div>
);

/*
Tenemos el ejercicio completamente funcional. Con el objetivo de asegurarme de entender el concepto,
los nombres de las variables son diferentes y agregué también más columnas.
El error que estaba dando en el trabajo enviado con anterioridad fue corregido con solo actualizar
a la última versión de Node JS.
Encale del repositorio:
*/
