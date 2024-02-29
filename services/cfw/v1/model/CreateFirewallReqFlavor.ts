

export class CreateFirewallReqFlavor {
    public version?: CreateFirewallReqFlavorVersionEnum | string;
    private 'extend_eip_count'?: number;
    private 'extend_bandwidth'?: number;
    private 'extend_vpc_count'?: number;
    public constructor() { 
    }
    public withVersion(version: CreateFirewallReqFlavorVersionEnum | string): CreateFirewallReqFlavor {
        this['version'] = version;
        return this;
    }
    public withExtendEipCount(extendEipCount: number): CreateFirewallReqFlavor {
        this['extend_eip_count'] = extendEipCount;
        return this;
    }
    public set extendEipCount(extendEipCount: number  | undefined) {
        this['extend_eip_count'] = extendEipCount;
    }
    public get extendEipCount(): number | undefined {
        return this['extend_eip_count'];
    }
    public withExtendBandwidth(extendBandwidth: number): CreateFirewallReqFlavor {
        this['extend_bandwidth'] = extendBandwidth;
        return this;
    }
    public set extendBandwidth(extendBandwidth: number  | undefined) {
        this['extend_bandwidth'] = extendBandwidth;
    }
    public get extendBandwidth(): number | undefined {
        return this['extend_bandwidth'];
    }
    public withExtendVpcCount(extendVpcCount: number): CreateFirewallReqFlavor {
        this['extend_vpc_count'] = extendVpcCount;
        return this;
    }
    public set extendVpcCount(extendVpcCount: number  | undefined) {
        this['extend_vpc_count'] = extendVpcCount;
    }
    public get extendVpcCount(): number | undefined {
        return this['extend_vpc_count'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateFirewallReqFlavorVersionEnum {
    STANDARD = 'Standard',
    PROFESSIONAL = 'Professional'
}
