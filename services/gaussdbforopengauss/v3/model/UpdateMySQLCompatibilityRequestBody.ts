

export class UpdateMySQLCompatibilityRequestBody {
    public port?: string;
    public constructor(port?: string) { 
        this['port'] = port;
    }
    public withPort(port: string): UpdateMySQLCompatibilityRequestBody {
        this['port'] = port;
        return this;
    }
}