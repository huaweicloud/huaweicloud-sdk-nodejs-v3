

export class HoneypotPortPolicyContentPortsList {
    public port?: number;
    public protocol?: string;
    public constructor(port?: number, protocol?: string) { 
        this['port'] = port;
        this['protocol'] = protocol;
    }
    public withPort(port: number): HoneypotPortPolicyContentPortsList {
        this['port'] = port;
        return this;
    }
    public withProtocol(protocol: string): HoneypotPortPolicyContentPortsList {
        this['protocol'] = protocol;
        return this;
    }
}