

export class ListWafGeoIpRuleRequest {
    private 'domain_name'?: string;
    private 'overseas_type'?: number;
    public constructor(domainName?: string, overseasType?: number) { 
        this['domain_name'] = domainName;
        this['overseas_type'] = overseasType;
    }
    public withDomainName(domainName: string): ListWafGeoIpRuleRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withOverseasType(overseasType: number): ListWafGeoIpRuleRequest {
        this['overseas_type'] = overseasType;
        return this;
    }
    public set overseasType(overseasType: number  | undefined) {
        this['overseas_type'] = overseasType;
    }
    public get overseasType(): number | undefined {
        return this['overseas_type'];
    }
}