

export class ExternalAccesses {
    public protocol?: ExternalAccessesProtocolEnum | string;
    public address?: string;
    private 'forward_port'?: number;
    public constructor() { 
    }
    public withProtocol(protocol: ExternalAccessesProtocolEnum | string): ExternalAccesses {
        this['protocol'] = protocol;
        return this;
    }
    public withAddress(address: string): ExternalAccesses {
        this['address'] = address;
        return this;
    }
    public withForwardPort(forwardPort: number): ExternalAccesses {
        this['forward_port'] = forwardPort;
        return this;
    }
    public set forwardPort(forwardPort: number  | undefined) {
        this['forward_port'] = forwardPort;
    }
    public get forwardPort(): number | undefined {
        return this['forward_port'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExternalAccessesProtocolEnum {
    HTTP = 'http',
    HTTPS = 'https'
}
