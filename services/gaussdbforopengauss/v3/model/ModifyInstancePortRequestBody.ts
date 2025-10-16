

export class ModifyInstancePortRequestBody {
    public port?: number;
    public constructor(port?: number) { 
        this['port'] = port;
    }
    public withPort(port: number): ModifyInstancePortRequestBody {
        this['port'] = port;
        return this;
    }
}