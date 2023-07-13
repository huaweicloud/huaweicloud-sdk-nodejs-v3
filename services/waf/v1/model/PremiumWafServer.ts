

export class PremiumWafServer {
    private 'front_protocol': PremiumWafServerFrontProtocolEnum | undefined;
    private 'back_protocol': PremiumWafServerBackProtocolEnum | undefined;
    public weight?: number;
    public address: string;
    public port: number;
    public type: PremiumWafServerTypeEnum;
    private 'vpc_id': string | undefined;
    public constructor(frontProtocol?: any, backProtocol?: any, address?: any, port?: any, type?: any, vpcId?: any) { 
        this['front_protocol'] = frontProtocol;
        this['back_protocol'] = backProtocol;
        this['address'] = address;
        this['port'] = port;
        this['type'] = type;
        this['vpc_id'] = vpcId;
    }
    public withFrontProtocol(frontProtocol: PremiumWafServerFrontProtocolEnum): PremiumWafServer {
        this['front_protocol'] = frontProtocol;
        return this;
    }
    public set frontProtocol(frontProtocol: PremiumWafServerFrontProtocolEnum | undefined) {
        this['front_protocol'] = frontProtocol;
    }
    public get frontProtocol() {
        return this['front_protocol'];
    }
    public withBackProtocol(backProtocol: PremiumWafServerBackProtocolEnum): PremiumWafServer {
        this['back_protocol'] = backProtocol;
        return this;
    }
    public set backProtocol(backProtocol: PremiumWafServerBackProtocolEnum | undefined) {
        this['back_protocol'] = backProtocol;
    }
    public get backProtocol() {
        return this['back_protocol'];
    }
    public withWeight(weight: number): PremiumWafServer {
        this['weight'] = weight;
        return this;
    }
    public withAddress(address: string): PremiumWafServer {
        this['address'] = address;
        return this;
    }
    public withPort(port: number): PremiumWafServer {
        this['port'] = port;
        return this;
    }
    public withType(type: PremiumWafServerTypeEnum): PremiumWafServer {
        this['type'] = type;
        return this;
    }
    public withVpcId(vpcId: string): PremiumWafServer {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PremiumWafServerFrontProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS'
}
/**
    * @export
    * @enum {string}
    */
export enum PremiumWafServerBackProtocolEnum {
    HTTP = 'HTTP',
    HTTPS = 'HTTPS'
}
/**
    * @export
    * @enum {string}
    */
export enum PremiumWafServerTypeEnum {
    IPV4 = 'ipv4',
    IPV6 = 'ipv6'
}
