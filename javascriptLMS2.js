fetch('https://www.el-tiempo.net/api/json/v2/provincias/44/municipios/44013')
    .then(res => res.json())
    .then(data => {
        const outputDiv = document.getElementById('output');
        let html = '';

        // Verifica si hay datos en la respuesta
        if (data && data.municipio && data.municipio.CODIGOINE) {
            // Agrega el nombre del municipio como un encabezado
            html += `<h3> Codigo de Municipio: ${data.municipio.CODIGOINE}</h3>`;
            html += `<h3> Nombre de Provincia: ${data.municipio.NOMBRE_PROVINCIA}</h3>`;
            html += `<h3> NOMBRE: ${data.municipio.NOMBRE}</h3>`;
            html += `<h3> POBLACION: ${data.municipio.POBLACION_MUNI}</h3>`;
            html += `<h3> SUPERFICIE: ${data.municipio.SUPERFICIE}</h3>`;
            html += `<h3> PERIMETRO: ${data.municipio.PERIMETRO}</h3>`;
            html += `<h3> ALTITUD: ${data.municipio.ALTITUD}</h3>`;


            // Verifica si hay temperaturas
            if (data.temperatura_actual) {
                html += '<h3>Temperaturas:</h3>';
                // Agrega la temperatura actual
                html += `<p>Actual: ${data.temperatura_actual} ºC ${data.stateSky.description}</p>`;
            }
        } else {
            // En caso de datos faltantes
            html += '<p>No se encontraron datos para este municipio.</p>';
        }

        // Inserta el HTML en el div de salida
        outputDiv.innerHTML = html;
    })
.catch(error => console.error('Error fetching JSON:', error));   
    