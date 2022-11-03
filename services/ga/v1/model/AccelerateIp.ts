import { Area } from './Area';


export class AccelerateIp {
    private 'ip_type': AccelerateIpIpTypeEnum | undefined;
    private 'ip_address'?: string | undefined;
    public area?: Area;
    public constructor(ipType?: any) { 
        this['ip_type'] = ipType;
    }
    public withIpType(ipType: AccelerateIpIpTypeEnum): AccelerateIp {
        this['ip_type'] = ipType;
        return this;
    }
    public set ipType(ipType: AccelerateIpIpTypeEnum | undefined) {
        this['ip_type'] = ipType;
    }
    public get ipType() {
        return this['ip_type'];
    }
    public withIpAddress(ipAddress: string): AccelerateIp {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress() {
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
    IPV4 = 'IPV4'
}
