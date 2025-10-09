

export class ModifyInstancePortRequestBody {
    public port?: number;
    public constructor() { 
    }
    public withPort(port: number): ModifyInstancePortRequestBody {
        this['port'] = port;
        return this;
    }
}