

export class UpdatePortRequest {
    public port?: number;
    public constructor(port?: number) { 
        this['port'] = port;
    }
    public withPort(port: number): UpdatePortRequest {
        this['port'] = port;
        return this;
    }
}