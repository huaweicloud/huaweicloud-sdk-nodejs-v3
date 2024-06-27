

export class MySQLCompatibilityResult {
    public port?: string;
    public constructor() { 
    }
    public withPort(port: string): MySQLCompatibilityResult {
        this['port'] = port;
        return this;
    }
}