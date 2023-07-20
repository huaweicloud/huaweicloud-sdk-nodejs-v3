

export class CloudWafServer {
    private 'front_protocol'?: CloudWafServerFrontProtocolEnum | string;
    private 'back_protocol'?: CloudWafServerBackProtocolEnum | string;
    public weight?: number;
    public address?: string;
    public port?: number;
    public type?: CloudWafServerTypeEnum | string;
    public constructor(frontProtocol?: string, backProtocol?: string, address?: string, port?: number, type?: string) { 
        this['front_protocol'] = frontProtocol;
        this['back_protocol'] = backProtocol;
        this['address'] = address;
        this['port'] = port;
        this['type'] = type;
    }
    public withFrontProtocol(frontProtocol: CloudWafServerFrontProtocolEnum | string): CloudWafServer {
        this['front_protocol'] = frontProtocol;
        return this;
    }
    public set frontProtocol(frontProtocol: CloudWafServerFrontProtocolEnum | string  | undefined) {
        this['front_protocol'] = frontProtocol;
    }
    public get frontProtocol(): CloudWafServerFrontProtocolEnum | string | undefined {
        return this['front_protocol'];
    }
    public withBackProtocol(backProtocol: CloudWafServerBackProtocolEnum | string): CloudWafServer {
        this['back_protocol'] = backProtocol;
        return this;
    }
    public set backProtocol(backProtocol: CloudWafServerBackProtocolEnum | string  | undefined) {
        this['back_protocol'] = backProtocol;
    }
    public get backProtocol(): CloudWafServerBackProtocolEnum | string | undefined {
        return this['back_protocol'];
    }
    public withWeight(weight: number): CloudWafServer {
        this['weight'] = weight;
        return this;
    }
    public withAddress(address: string): CloudWafServer {
        this['address'] = address;
        return this;
    }
    public withPort(port: number): CloudWafServer {
        this['port'] = port;
        return this;
    }
    public withType(type: CloudWafServerTypeEnum | string): CloudWafServer {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CloudWafServerFrontProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS'
}
/**
    * @export
    * @enum {string}
    */
export enum CloudWafServerBackProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS'
}
/**
    * @export
    * @enum {string}
    */
export enum CloudWafServerTypeEnum {
    IPV4 = 'ipv4',
    IPV6 = 'ipv6'
}
