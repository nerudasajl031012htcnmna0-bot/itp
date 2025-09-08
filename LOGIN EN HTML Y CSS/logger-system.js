// logger-system.js
class LoggerSystem {
    constructor() {
        this.logs = [];
        this.logLevel = 'info';
    }

    log(message, level = 'info') {
        const logEntry = {
            timestamp: new Date().toISOString(),
            level: level,
            message: message,
            user: this.getCurrentUser(),
            ip: this.getClientIP()
        };

        this.logs.push(logEntry);
        this.saveToFile(logEntry);
        this.sendToMonitoringService(logEntry);
    }

    saveToFile(logEntry) {
        // Implementar rotación de logs
        fs.appendFileSync(
            '/var/log/biblioteca/system.log', 
            JSON.stringify(logEntry) + '\n'
        );
    }
}