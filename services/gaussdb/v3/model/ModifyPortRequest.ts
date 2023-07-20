

export class ModifyPortRequest {
    public port?: number;
    public constructor(port?: number) { 
        this['port'] = port;
    }
    public withPort(port: number): ModifyPortRequest {
        this['port'] = port;
        return this;
    }
}