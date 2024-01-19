utils = {
    formulario: () => {
        
        const main = document.querySelector("#cargaDinamica");

        main.innerHTML = `<form action="mailto:agusting.moldavsky@gmail.com" method="post" enctype="text/plain">
        <label for="nombre">Nombre:</label>
        <input type="text" " title="Por favor, ingrese solo letras" id="nombre" name="nombre" required>
        <label for="email">Email:</label>
        <input type="email" title="Por favor, ingrese un email que sea valido" id="email" name="email" required>
        <label for="telefono">telefono:</label>
        <input type="tel" title="Por favor, ingrese solo números" id="telefono" name="telefono" required>
        <label for="mensaje">Mensaje:</label>
        <textarea id="mensaje" name="mensaje" required></textarea>
        <input type="submit" value="Enviar">
        
    </form>`;
    }

    }
