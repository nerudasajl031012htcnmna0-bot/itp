// live-dashboard.js
class LiveDashboard {
    constructor() {
        this.connection = new WebSocket('wss://biblioteca-itp-websocket');
        this.initDashboard();
    }

    initDashboard() {
        this.connection.onmessage = (event) => {
            const data = JSON.parse(event.data);
            this.updateDashboard(data);
        };

        this.connection.onopen = () => {
            console.log('Conexión WebSocket establecida');
        };

        this.connection.onerror = (error) => {
            console.error('Error WebSocket:', error);
        };
    }

    updateDashboard(data) {
        // Actualizar UI en tiempo real
        this.updateCubicles(data.cubicles);
        this.updateBooks(data.books);
        this.updateLoans(data.loans);
        this.updateMovements(data.movements);
    }
}