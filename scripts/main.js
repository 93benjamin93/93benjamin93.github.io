document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value;
      const email = document.getElementById('email').value;
      const mensaje = document.getElementById('mensaje').value;

      try {
        const response = await fetch('http://localhost:3001/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ nombre, email, mensaje })
        });
        const data = await response.json();
        if (response.ok) {
          alert('¡Gracias por contactarnos!');
          form.reset();
        } else {
          alert('Hubo un error al enviar el mensaje. Intenta nuevamente.');
        }
      } catch (error) {
        alert('Error de conexión con el servidor.');
      }
    });
  }
});