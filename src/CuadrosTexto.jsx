export function CuadrosTexto(props) {
    //props debe ser el parámetro del componente o va a haber un error.

    /*los props son las propiedades que definen para el componente que luego
    se declaran cuando este sea llamado en el index.js*/

    return(<div className={props.tamanoinput}>
        <label htmlFor="">{props.titulolabel}</label>
        <input type={props.tipoinput} name={props.nombreinput} id={props.idinput} placeholder={props.placeholderinput} className="form-control"></input>
        </div>
    )
}