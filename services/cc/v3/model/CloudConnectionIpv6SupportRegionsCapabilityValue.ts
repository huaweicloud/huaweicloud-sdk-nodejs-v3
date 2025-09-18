

export class CloudConnectionIpv6SupportRegionsCapabilityValue {
    private 'support_regions'?: Array<string>;
    public constructor(supportRegions?: Array<string>) { 
        this['support_regions'] = supportRegions;
    }
    public withSupportRegions(supportRegions: Array<string>): CloudConnectionIpv6SupportRegionsCapabilityValue {
        this['support_regions'] = supportRegions;
        return this;
    }
    public set supportRegions(supportRegions: Array<string>  | undefined) {
        this['support_regions'] = supportRegions;
    }
    public get supportRegions(): Array<string> | undefined {
        return this['support_regions'];
    }
}