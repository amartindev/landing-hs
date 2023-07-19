(function () {
  'use strict';

  // Obtiene todos los formularios a los que queremos aplicar la validación de Bootstrap
  const forms = document.querySelectorAll('.needs-validation');

  // Itera sobre los formularios y previene el envío si no son válidos
  Array.from(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        // Imprimir los datos del formulario en la consola
        console.log("Datos del formulario:");
        const formData = new FormData(form);
        formData.forEach((value, key) => {
          console.log(key + ': ' + value);
        });

        // El formulario es válido, redirigir a gracias.html
        window.location.href = 'gracias.html';
        event.returnValue = false;
        
      }

      form.classList.add('was-validated');
    }, false);
  });
})();
