

export class PolicyDetailsPortList {
    public port?: number;
    public protocol?: string;
    public constructor() { 
    }
    public withPort(port: number): PolicyDetailsPortList {
        this['port'] = port;
        return this;
    }
    public withProtocol(protocol: string): PolicyDetailsPortList {
        this['protocol'] = protocol;
        return this;
    }
}