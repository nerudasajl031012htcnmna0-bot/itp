// history-manager.js
class MovementHistory {
    constructor() {
        this.movements = [];
        this.maxHistoryDays = 365;
    }

    recordMovement(data) {
        const movement = {
            id: this.generateUniqueId(),
            timestamp: new Date().toISOString(),
            type: data.type,
            user: data.user,
            details: data.details,
            status: data.status,
            action: data.action
        };

        this.movements.push(movement);
        this.saveToDatabase(movement);
        this.cleanOldRecords();
    }

    generateUniqueId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
}