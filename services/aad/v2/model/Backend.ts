

export class Backend {
    public protocol?: string;
    public port?: number;
    public host?: string;
    public constructor() { 
    }
    public withProtocol(protocol: string): Backend {
        this['protocol'] = protocol;
        return this;
    }
    public withPort(port: number): Backend {
        this['port'] = port;
        return this;
    }
    public withHost(host: string): Backend {
        this['host'] = host;
        return this;
    }
}