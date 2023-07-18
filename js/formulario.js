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
        // El formulario es válido, redirigir a gracias.html
        window.location.href = 'https://google.com';

      }

      form.classList.add('was-validated');
    }, false);
  });
})();
