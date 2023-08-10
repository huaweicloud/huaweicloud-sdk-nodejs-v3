

export class UpdateProxyPortRequestBody {
    public port?: number;
    public constructor(port?: number) { 
        this['port'] = port;
    }
    public withPort(port: number): UpdateProxyPortRequestBody {
        this['port'] = port;
        return this;
    }
}