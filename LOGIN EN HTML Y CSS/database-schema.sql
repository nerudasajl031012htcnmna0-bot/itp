-- database-schema.sql
CREATE TABLE movimientos (
    id VARCHAR(36) PRIMARY KEY,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    tipo_movimiento VARCHAR(50) NOT NULL,
    usuario_id VARCHAR(20) NOT NULL,
    detalles JSON NOT NULL,
    estado VARCHAR(20) NOT NULL,
    accion VARCHAR(50) NOT NULL
);

CREATE TABLE cubiculos (
    id INTEGER PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    estado VARCHAR(20) DEFAULT 'disponible',
    usuario_actual VARCHAR(20),
    hora_reserva TIMESTAMP,
    historial JSON
);

CREATE TABLE libros (
    id INTEGER PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    isbn VARCHAR(20) UNIQUE,
    estado VARCHAR(20) DEFAULT 'disponible',
    usuario_prestamo VARCHAR(20),
    fecha_prestamo TIMESTAMP,
    fecha_devolucion TIMESTAMP,
    historial JSON
);

CREATE TABLE usuarios (
    numero_control VARCHAR(20) PRIMARY KEY,
    nombre_completo VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    rol VARCHAR(20) DEFAULT 'usuario',
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    activo BOOLEAN DEFAULT true
);