

export class ServerRemoteConsole {
    public protocol: string;
    public type: string;
    public url: string;
    public constructor(protocol?: any, type?: any, url?: any) { 
        this['protocol'] = protocol;
        this['type'] = type;
        this['url'] = url;
    }
    public withProtocol(protocol: string): ServerRemoteConsole {
        this['protocol'] = protocol;
        return this;
    }
    public withType(type: string): ServerRemoteConsole {
        this['type'] = type;
        return this;
    }
    public withUrl(url: string): ServerRemoteConsole {
        this['url'] = url;
        return this;
    }
}