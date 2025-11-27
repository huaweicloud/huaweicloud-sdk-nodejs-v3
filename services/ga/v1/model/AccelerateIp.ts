import { Area } from './Area';


export class AccelerateIp {
    private 'ip_type'?: AccelerateIpIpTypeEnum | string;
    private 'ip_address'?: string;
    public area?: Area;
    public constructor(ipType?: string) { 
        this['ip_type'] = ipType;
    }
    public withIpType(ipType: AccelerateIpIpTypeEnum | string): AccelerateIp {
        this['ip_type'] = ipType;
        return this;
    }
    public set ipType(ipType: AccelerateIpIpTypeEnum | string  | undefined) {
        this['ip_type'] = ipType;
    }
    public get ipType(): AccelerateIpIpTypeEnum | string | undefined {
        return this['ip_type'];
    }
    public withIpAddress(ipAddress: string): AccelerateIp {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withArea(area: Area): AccelerateIp {
        this['area'] = area;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccelerateIpIpTypeEnum {
    IPV4 = 'IPV4',
    IPV6 = 'IPV6'
}
