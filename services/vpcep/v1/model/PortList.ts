

export class PortList {
    private 'client_port'?: number;
    private 'server_port'?: number;
    public protocol?: PortListProtocolEnum | string;
    public constructor() { 
    }
    public withClientPort(clientPort: number): PortList {
        this['client_port'] = clientPort;
        return this;
    }
    public set clientPort(clientPort: number  | undefined) {
        this['client_port'] = clientPort;
    }
    public get clientPort(): number | undefined {
        return this['client_port'];
    }
    public withServerPort(serverPort: number): PortList {
        this['server_port'] = serverPort;
        return this;
    }
    public set serverPort(serverPort: number  | undefined) {
        this['server_port'] = serverPort;
    }
    public get serverPort(): number | undefined {
        return this['server_port'];
    }
    public withProtocol(protocol: PortListProtocolEnum | string): PortList {
        this['protocol'] = protocol;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PortListProtocolEnum {
    TCP = 'TCP'
}
