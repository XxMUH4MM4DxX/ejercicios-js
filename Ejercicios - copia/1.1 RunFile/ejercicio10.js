try {
    let cadena = "11"; // Cadena que no es un número válido
    let numero = Number(cadena);

    if (isNaN(numero)) {
        throw new Error("No se puede convertir la cadena a un número válido.");
    }

    console.log("Número convertido:", numero);
} catch (error) {
    console.error("Error:", error.message);
}