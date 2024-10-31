

export class StartMySQLCompatibilityRequestBody {
    public port?: string;
    public constructor(port?: string) { 
        this['port'] = port;
    }
    public withPort(port: string): StartMySQLCompatibilityRequestBody {
        this['port'] = port;
        return this;
    }
}