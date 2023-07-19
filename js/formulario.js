(function () {
  'use strict';

  // Obtiene todos los formularios a los que queremos aplicar la validación de Bootstrap
  const forms = document.querySelectorAll('.needs-validation');

  // Itera sobre los formularios y previene el envío si no son válidos
  Array.from(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (form.checkValidity()) {
        // El formulario es válido
        console.log('Formulario válido. Datos del formulario:');
        const formData = new FormData(form);
        formData.forEach((value, key) => {
          console.log(key, ':', value);
        });
        console.log(formData);

        setTimeout(function () {
          window.location.href = 'gracias.html';
        }, 0);
      }

      form.classList.add('was-validated');
    }, false);
  });
})();
