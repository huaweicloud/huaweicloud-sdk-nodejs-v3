

export class WafServer {
    private 'front_protocol'?: WafServerFrontProtocolEnum | string;
    private 'back_protocol'?: WafServerBackProtocolEnum | string;
    public weight?: number;
    public address?: string;
    public port?: number;
    public type?: WafServerTypeEnum | string;
    private 'vpc_id'?: string;
    public constructor() { 
    }
    public withFrontProtocol(frontProtocol: WafServerFrontProtocolEnum | string): WafServer {
        this['front_protocol'] = frontProtocol;
        return this;
    }
    public set frontProtocol(frontProtocol: WafServerFrontProtocolEnum | string  | undefined) {
        this['front_protocol'] = frontProtocol;
    }
    public get frontProtocol(): WafServerFrontProtocolEnum | string | undefined {
        return this['front_protocol'];
    }
    public withBackProtocol(backProtocol: WafServerBackProtocolEnum | string): WafServer {
        this['back_protocol'] = backProtocol;
        return this;
    }
    public set backProtocol(backProtocol: WafServerBackProtocolEnum | string  | undefined) {
        this['back_protocol'] = backProtocol;
    }
    public get backProtocol(): WafServerBackProtocolEnum | string | undefined {
        return this['back_protocol'];
    }
    public withWeight(weight: number): WafServer {
        this['weight'] = weight;
        return this;
    }
    public withAddress(address: string): WafServer {
        this['address'] = address;
        return this;
    }
    public withPort(port: number): WafServer {
        this['port'] = port;
        return this;
    }
    public withType(type: WafServerTypeEnum | string): WafServer {
        this['type'] = type;
        return this;
    }
    public withVpcId(vpcId: string): WafServer {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum WafServerFrontProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS'
}
/**
    * @export
    * @enum {string}
    */
export enum WafServerBackProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS'
}
/**
    * @export
    * @enum {string}
    */
export enum WafServerTypeEnum {
    IPV4 = 'ipv4',
    IPV6 = 'ipv6'
}
