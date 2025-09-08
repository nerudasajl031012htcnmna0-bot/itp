// realtime-system.js
class RealTimeSystem {
    constructor() {
        this.socket = io.connect('https://biblioteca-itp-socket.io');
        this.history = new MovementHistory();
        this.notification = new EmailNotification();
        this.initRealTimeEvents();
    }

    initRealTimeEvents() {
        // Conexión en tiempo real para cubículos
        this.socket.on('cubicle-status-update', (data) => {
            this.updateCubicleUI(data);
            this.history.recordMovement(data);
            this.notification.sendEmailUpdate(data);
        });

        // Conexión en tiempo real para libros
        this.socket.on('book-status-update', (data) => {
            this.updateBookUI(data);
            this.history.recordMovement(data);
            this.notification.sendEmailUpdate(data);
        });

        // Actualizaciones de préstamos
        this.socket.on('loan-status-update', (data) => {
            this.updateLoanUI(data);
            this.history.recordMovement(data);
            this.notification.sendEmailUpdate(data);
        });
    }
}