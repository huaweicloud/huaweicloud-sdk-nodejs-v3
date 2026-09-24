

export class UpdateInstancesProxyPortRequestBody {
    public port?: number;
    public constructor(port?: number) { 
        this['port'] = port;
    }
    public withPort(port: number): UpdateInstancesProxyPortRequestBody {
        this['port'] = port;
        return this;
    }
}