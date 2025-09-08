// email-notification.js
class EmailNotification {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'sistema.biblioteca@itp.edu.mx',
                pass: 'ITP-Biblio2025*'
            }
        });
    }

    async sendEmailUpdate(data) {
        const mailOptions = {
            from: 'sistema.biblioteca@itp.edu.mx',
            to: this.getUserEmail(data.user),
            subject: `Actualización de ${data.type} - Sistema Biblioteca ITP`,
            html: this.generateEmailTemplate(data)
        };

        try {
            await this.transporter.sendMail(mailOptions);
            console.log(`Email sent to ${mailOptions.to}`);
        } catch (error) {
            console.error('Email sending error:', error);
        }
    }

    generateEmailTemplate(data) {
        return `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #18335d;">Sistema de Biblioteca ITP</h2>
                <p><strong>Fecha:</strong> ${new Date().toLocaleString()}</p>
                <p><strong>Tipo:</strong> ${data.type}</p>
                <p><strong>Acción:</strong> ${data.action}</p>
                <p><strong>Detalles:</strong> ${JSON.stringify(data.details)}</p>
                <p><strong>Estado:</strong> ${data.status}</p>
                <hr>
                <p style="color: #666;">Este es un mensaje automático, por favor no responder.</p>
            </div>
        `;
    }
}