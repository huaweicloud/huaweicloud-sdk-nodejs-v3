import { Area } from './Area';


export class CreateAcceleratorOptionIpSets {
    private 'ip_type': CreateAcceleratorOptionIpSetsIpTypeEnum | undefined;
    public area: Area;
    public constructor(ipType?: any, area?: any) { 
        this['ip_type'] = ipType;
        this['area'] = area;
    }
    public withIpType(ipType: CreateAcceleratorOptionIpSetsIpTypeEnum): CreateAcceleratorOptionIpSets {
        this['ip_type'] = ipType;
        return this;
    }
    public set ipType(ipType: CreateAcceleratorOptionIpSetsIpTypeEnum | undefined) {
        this['ip_type'] = ipType;
    }
    public get ipType() {
        return this['ip_type'];
    }
    public withArea(area: Area): CreateAcceleratorOptionIpSets {
        this['area'] = area;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAcceleratorOptionIpSetsIpTypeEnum {
    IPV4 = 'IPV4'
}
