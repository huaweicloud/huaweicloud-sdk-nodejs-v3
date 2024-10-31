

export class UpdateMySQLCompatibilityRequestBody {
    public port?: string;
    public constructor() { 
    }
    public withPort(port: string): UpdateMySQLCompatibilityRequestBody {
        this['port'] = port;
        return this;
    }
}