#!/bin/bash
# install-system.sh

echo "Instalando Sistema de Biblioteca en Tiempo Real ITP"

# Instalar dependencias
npm install express socket.io nodemailer mysql2 jsonwebtoken bcryptjs

# Configurar base de datos
mysql -u root -p < database-schema.sql

# Configurar servicio de correo
cp email-config.json /etc/biblioteca/

# Configurar SSL para WebSocket
cp ssl-certificate.pem /etc/ssl/
cp private-key.pem /etc/ssl/

# Iniciar servicios
systemctl start biblioteca-socket
systemctl start biblioteca-api
systemctl start biblioteca-email

echo "Sistema instalado exitosamente"