// security-system.js
class SecuritySystem {
    constructor() {
        this.failedAttempts = new Map();
        this.MAX_ATTEMPTS = 3;
        this.LOCKOUT_TIME = 15 * 60 * 1000; // 15 minutos
    }

    async verifyAccess(userId, password) {
        if (this.isLockedOut(userId)) {
            throw new Error('Cuenta temporalmente bloqueada');
        }

        const isValid = await this.validateCredentials(userId, password);
        
        if (!isValid) {
            this.recordFailedAttempt(userId);
            throw new Error('Credenciales inválidas');
        }

        this.resetFailedAttempts(userId);
        return true;
    }

    recordFailedAttempt(userId) {
        const attempts = this.failedAttempts.get(userId) || 0;
        this.failedAttempts.set(userId, attempts + 1);

        if (attempts + 1 >= this.MAX_ATTEMPTS) {
            this.lockAccount(userId);
        }
    }
}