import React from 'react';
import Swal from 'sweetalert2';

const Footer: React.FC = () => {
    // Obtener fecha actual
    const today = new Date();
    const formatDate = today.toLocaleDateString('es-Es' ,{
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    // Mostrar destalle de contacto
    const showContacDetails = () => {
        Swal.fire({
            title: 'Contáctanos',
            text: 'Para más información, envíanos un correo a soporte@tuspelisfavoritas.com',
            input: 'info',
            confirmButtonText: 'Cerrar'
        });
    };

    // Mostrar información sobre la plataforma
    const showAboutDetails = () => {
        Swal.fire({
            title: 'Acerca de nosotoros',
            text: 'Bienvenido a nuestra plataforma de películas, creada con pasión y tecnología de vanguardia. Nuestra misión es ofrecerte una experiencia única para descubrir, explorar y disfrutar del cine.',
            icon: 'info',
            confirmButtonText: 'Cerrar'
        });
    };

    return (
        <footer className='footer'>
            <p>&copy; {formatDate} Tus Películas Favoritas. Todos los derechos reservados.</p>
            <div className='footer-buttons'>
                <button className='footer-btn' onClick={showContacDetails}>Contáctanos</button>
                <button className='footer-btn' onClick={showAboutDetails}>Sobre nosotros</button>
            </div>
        </footer>
    );
}

export default Footer;