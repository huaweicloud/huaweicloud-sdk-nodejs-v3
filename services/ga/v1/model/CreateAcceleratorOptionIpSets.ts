import { Area } from './Area';


export class CreateAcceleratorOptionIpSets {
    private 'ip_type'?: CreateAcceleratorOptionIpSetsIpTypeEnum | string;
    public area?: Area;
    public constructor(ipType?: string, area?: Area) { 
        this['ip_type'] = ipType;
        this['area'] = area;
    }
    public withIpType(ipType: CreateAcceleratorOptionIpSetsIpTypeEnum | string): CreateAcceleratorOptionIpSets {
        this['ip_type'] = ipType;
        return this;
    }
    public set ipType(ipType: CreateAcceleratorOptionIpSetsIpTypeEnum | string  | undefined) {
        this['ip_type'] = ipType;
    }
    public get ipType(): CreateAcceleratorOptionIpSetsIpTypeEnum | string | undefined {
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
    IPV4 = 'IPV4',
    IPV6 = 'IPV6'
}
