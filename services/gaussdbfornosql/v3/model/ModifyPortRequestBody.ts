

export class ModifyPortRequestBody {
    public port?: number;
    public constructor(port?: number) { 
        this['port'] = port;
    }
    public withPort(port: number): ModifyPortRequestBody {
        this['port'] = port;
        return this;
    }
}