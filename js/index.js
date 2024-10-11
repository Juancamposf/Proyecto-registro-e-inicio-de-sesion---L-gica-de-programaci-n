document.getElementById('logout').addEventListener('click', function() {
    // Mostrar alerta de confirmación antes de hacer logout
    Swal.fire({
        title: '¿Estás seguro de que quieres cerrar sesión?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, cerrar sesión',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            // Redirigir a la página de signin
            window.location.href = 'signup.html';
        }
    });
});