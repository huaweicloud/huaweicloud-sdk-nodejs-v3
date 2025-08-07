

export class Listener {
    public name?: string;
    public id?: string;
    public protocol?: string;
    private 'protocol_port'?: number;
    public constructor() { 
    }
    public withName(name: string): Listener {
        this['name'] = name;
        return this;
    }
    public withId(id: string): Listener {
        this['id'] = id;
        return this;
    }
    public withProtocol(protocol: string): Listener {
        this['protocol'] = protocol;
        return this;
    }
    public withProtocolPort(protocolPort: number): Listener {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): number | undefined {
        return this['protocol_port'];
    }
}