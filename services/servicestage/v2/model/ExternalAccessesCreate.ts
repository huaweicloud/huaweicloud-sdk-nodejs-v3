

export class ExternalAccessesCreate {
    public protocol?: ExternalAccessesCreateProtocolEnum | string;
    public address?: string;
    private 'forward_port'?: number;
    public constructor(protocol?: string, address?: string, forwardPort?: number) { 
        this['protocol'] = protocol;
        this['address'] = address;
        this['forward_port'] = forwardPort;
    }
    public withProtocol(protocol: ExternalAccessesCreateProtocolEnum | string): ExternalAccessesCreate {
        this['protocol'] = protocol;
        return this;
    }
    public withAddress(address: string): ExternalAccessesCreate {
        this['address'] = address;
        return this;
    }
    public withForwardPort(forwardPort: number): ExternalAccessesCreate {
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
export enum ExternalAccessesCreateProtocolEnum {
    HTTP = 'http',
    HTTPS = 'https'
}
