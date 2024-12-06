import React, { useState, useEffect } from "react";

// Creación de boton para volver a la parte superior de la página
const BackButton: React.FC = () => {
    const [visible, setVisible] = useState(false);

    // Efecto para mostrar el botón cuando el scrolle se desplaza verticalmente y actualiza el estado visible
    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Función para volver a la parte superior de la página al hacer click en el botón
    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Renderiza el botón
    return (
        visible && (
            <button className="back-to-top" onClick={scrollToTop}>
                ↑
            </button>
        )
    );
};

export default BackButton;