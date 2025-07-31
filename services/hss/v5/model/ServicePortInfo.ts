

export class ServicePortInfo {
    public desc?: string;
    public type?: string;
    public protocol?: string;
    private 'user_port'?: number;
    public port?: number;
    public constructor(desc?: string, protocol?: string, port?: number) { 
        this['desc'] = desc;
        this['protocol'] = protocol;
        this['port'] = port;
    }
    public withDesc(desc: string): ServicePortInfo {
        this['desc'] = desc;
        return this;
    }
    public withType(type: string): ServicePortInfo {
        this['type'] = type;
        return this;
    }
    public withProtocol(protocol: string): ServicePortInfo {
        this['protocol'] = protocol;
        return this;
    }
    public withUserPort(userPort: number): ServicePortInfo {
        this['user_port'] = userPort;
        return this;
    }
    public set userPort(userPort: number  | undefined) {
        this['user_port'] = userPort;
    }
    public get userPort(): number | undefined {
        return this['user_port'];
    }
    public withPort(port: number): ServicePortInfo {
        this['port'] = port;
        return this;
    }
}