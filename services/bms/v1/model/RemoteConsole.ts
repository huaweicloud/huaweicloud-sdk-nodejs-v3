

export class RemoteConsole {
    public protocol?: string;
    public type?: string;
    public constructor(protocol?: string, type?: string) { 
        this['protocol'] = protocol;
        this['type'] = type;
    }
    public withProtocol(protocol: string): RemoteConsole {
        this['protocol'] = protocol;
        return this;
    }
    public withType(type: string): RemoteConsole {
        this['type'] = type;
        return this;
    }
}