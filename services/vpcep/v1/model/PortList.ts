

export class PortList {
    private 'client_port'?: number | undefined;
    private 'server_port'?: number | undefined;
    public protocol?: PortListProtocolEnum;
    public constructor() { 
    }
    public withClientPort(clientPort: number): PortList {
        this['client_port'] = clientPort;
        return this;
    }
    public set clientPort(clientPort: number | undefined) {
        this['client_port'] = clientPort;
    }
    public get clientPort() {
        return this['client_port'];
    }
    public withServerPort(serverPort: number): PortList {
        this['server_port'] = serverPort;
        return this;
    }
    public set serverPort(serverPort: number | undefined) {
        this['server_port'] = serverPort;
    }
    public get serverPort() {
        return this['server_port'];
    }
    public withProtocol(protocol: PortListProtocolEnum): PortList {
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
