export function AgregaraLaTabla(){

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const direccion = document.getElementById('direccion').value;
        const telefono = document.getElementById('telefono').value;
        const email = document.getElementById('email').value;
        const documento = document.getElementById('documento').value;
        const expedicion = document.getElementById('expedicion').value;

        /*
        alert(nombre) //Prueba para verificar si la información se está capturando.
        alert(apellido)
        alert(direccion)
        alert(telefono)
        alert(email)
        alert(documento)
        alert(expedicion)
        */

        const tabla = document.getElementById('tabla').getElementsByTagName('tbody')[0];

        var fila = tabla.insertRow(0);

        let columna1 = fila.insertCell(0);
        let columna2 = fila.insertCell(1);
        let columna3 = fila.insertCell(2);
        let columna4 = fila.insertCell(3);
        let columna5 = fila.insertCell(4);
        let columna6 = fila.insertCell(5);
        let columna7 = fila.insertCell(6);

        columna1.innerText = nombre;
        columna2.innerText = apellido;
        columna3.innerText = direccion;
        columna4.innerText = telefono;
        columna5.innerText = email;
        columna6.innerText = documento;
        columna7.innerText = expedicion;

}