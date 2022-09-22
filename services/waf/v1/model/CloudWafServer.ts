

export class CloudWafServer {
    private 'front_protocol': CloudWafServerFrontProtocolEnum | undefined;
    private 'back_protocol': CloudWafServerBackProtocolEnum | undefined;
    public weight?: number;
    public address: string;
    public port: number;
    public type: CloudWafServerTypeEnum;
    public constructor(frontProtocol?: any, backProtocol?: any, address?: any, port?: any, type?: any) { 
        this['front_protocol'] = frontProtocol;
        this['back_protocol'] = backProtocol;
        this['address'] = address;
        this['port'] = port;
        this['type'] = type;
    }
    public withFrontProtocol(frontProtocol: CloudWafServerFrontProtocolEnum): CloudWafServer {
        this['front_protocol'] = frontProtocol;
        return this;
    }
    public set frontProtocol(frontProtocol: CloudWafServerFrontProtocolEnum | undefined) {
        this['front_protocol'] = frontProtocol;
    }
    public get frontProtocol() {
        return this['front_protocol'];
    }
    public withBackProtocol(backProtocol: CloudWafServerBackProtocolEnum): CloudWafServer {
        this['back_protocol'] = backProtocol;
        return this;
    }
    public set backProtocol(backProtocol: CloudWafServerBackProtocolEnum | undefined) {
        this['back_protocol'] = backProtocol;
    }
    public get backProtocol() {
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
    public withType(type: CloudWafServerTypeEnum): CloudWafServer {
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
