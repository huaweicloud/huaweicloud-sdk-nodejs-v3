

export class UpdatePortRequestBody {
    public port?: number;
    public constructor(port?: number) { 
        this['port'] = port;
    }
    public withPort(port: number): UpdatePortRequestBody {
        this['port'] = port;
        return this;
    }
}