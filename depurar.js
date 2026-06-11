function validarReservaCafe(cantidadTazas) {
    const LIMITE_MAXIMO = 2;

    // Verificar si la cantidad es válida (mayor a cero)
    if (cantidadTazas <= 0) {
        return {
            puedeReservar: false,
            mensaje: "La cantidad de tazas debe ser al menos 1."
        };
    }

    // Aplicar la regla de negocio
    if (cantidadTazas > LIMITE_MAXIMO) {
        return {
            puedeReservar: false,
            mensaje: `Lo sentimos, no se pueden reservar más de ${LIMITE_MAXIMO} tazas por persona.`
        };
    }

    // Si pasa las validaciones, la reserva es exitosa
    return {
        puedeReservar: true,
        mensaje: "¡Reserva confirmada! Te esperamos para tu café."
    };
}