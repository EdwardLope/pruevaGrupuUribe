import React, { useState, useEffect } from 'react';

function Inicio() {
    const [clientes, setClientes] = useState([]);
    const [filtroTitular, setFiltroTitular] = useState('');
    const [filtroDestino, setFiltroDestino] = useState('');
    const [filtroPagadoMas5Millones, setFiltroPagadoMas5Millones] = useState(false);

    useEffect(() => {
        // Simulación de datos de clientes
        const datosClientes = [
            { id: 1, titular: 'Juan Pérez', destino: 'París', pago: 4000000, cantidadPersonas: 2 },
            { id: 2, titular: 'María García', destino: 'Londres', pago: 6000000, cantidadPersonas: 1 },
            { id: 3, titular: 'Pedro Gómez', destino: 'Nueva York', pago: 4500000, cantidadPersonas: 3 },
            { id: 4, titular: 'Ana Martínez', destino: 'Roma', pago: 3500000, cantidadPersonas: 2 },
            { id: 5, titular: 'Carlos Sánchez', destino: 'Madrid', pago: 7000000, cantidadPersonas: 4 }
        ];

        setClientes(datosClientes);
    }, []);

    const handleFiltroTitularChange = (e) => {
        setFiltroTitular(e.target.value);
    };

    const handleFiltroDestinoChange = (e) => {
        setFiltroDestino(e.target.value);
    };

    const handleFiltroPagadoMas5MillonesChange = (e) => {
        setFiltroPagadoMas5Millones(e.target.checked);
    };

    const filtrarClientes = () => {
        let clientesFiltrados = clientes;

        if (filtroTitular) {
            clientesFiltrados = clientesFiltrados.filter(cliente =>
                cliente.titular.toLowerCase().includes(filtroTitular.toLowerCase())
            );
        }

        if (filtroDestino) {
            clientesFiltrados = clientesFiltrados.filter(cliente =>
                cliente.destino.toLowerCase().includes(filtroDestino.toLowerCase())
            );
        }

        if (filtroPagadoMas5Millones) {
            clientesFiltrados = clientesFiltrados.filter(cliente =>
                cliente.pago > 5000000
            );
        } else {
            clientesFiltrados = clientesFiltrados.filter(cliente =>
                cliente.pago < 5000000
            );
        }

        return clientesFiltrados;
    };

    const clientesFiltrados = filtrarClientes();

    return (
        <div>
            <h1>Nos Fuimos</h1>

            <form>
                <label htmlFor="filtroTitular">Filtrar por titular:</label>
                <input type="text" id="filtroTitular" value={filtroTitular} onChange={handleFiltroTitularChange} />

                <label htmlFor="filtroDestino">Filtrar por destino:</label>
                <input type="text" id="filtroDestino" value={filtroDestino} onChange={handleFiltroDestinoChange} />

                <label htmlFor="filtroPagadoMas5Millones">Pagado más de 5 millones:</label>
                <input type="checkbox" id="filtroPagadoMas5Millones" checked={filtroPagadoMas5Millones} onChange={handleFiltroPagadoMas5MillonesChange} />
            </form>

            <ul>
                {clientesFiltrados.map(cliente => (
                    <li key={cliente.id}>
                        Titular: {cliente.titular}, Destino: {cliente.destino}, Pago: {cliente.pago}, Cantidad de personas: {cliente.cantidadPersonas}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Inicio;
