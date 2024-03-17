export function Tabla(){
    return(
        <table className="table table-striped table-hover" id="tabla">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Dirección</th>
                    <th>Telefono</th>
                    <th>Email</th>
                    <th>Documento</th>
                    <th>Lugar de expedición</th>
                </tr>
            </thead>

            <tbody id="tablabody">
            </tbody>

        </table>
    )
}