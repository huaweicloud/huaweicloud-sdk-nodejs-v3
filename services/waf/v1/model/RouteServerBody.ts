

export class RouteServerBody {
    private 'back_protocol'?: RouteServerBodyBackProtocolEnum | string;
    public address?: string;
    public port?: number;
    public constructor() { 
    }
    public withBackProtocol(backProtocol: RouteServerBodyBackProtocolEnum | string): RouteServerBody {
        this['back_protocol'] = backProtocol;
        return this;
    }
    public set backProtocol(backProtocol: RouteServerBodyBackProtocolEnum | string  | undefined) {
        this['back_protocol'] = backProtocol;
    }
    public get backProtocol(): RouteServerBodyBackProtocolEnum | string | undefined {
        return this['back_protocol'];
    }
    public withAddress(address: string): RouteServerBody {
        this['address'] = address;
        return this;
    }
    public withPort(port: number): RouteServerBody {
        this['port'] = port;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RouteServerBodyBackProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS'
}
