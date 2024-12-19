

export class AddWafWhiteIpRuleV2RequestBody {
    private 'domain_name'?: string;
    public ips?: Array<string>;
    private 'overseas_type'?: number;
    public type?: number;
    public constructor(domainName?: string, ips?: Array<string>, overseasType?: number, type?: number) { 
        this['domain_name'] = domainName;
        this['ips'] = ips;
        this['overseas_type'] = overseasType;
        this['type'] = type;
    }
    public withDomainName(domainName: string): AddWafWhiteIpRuleV2RequestBody {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withIps(ips: Array<string>): AddWafWhiteIpRuleV2RequestBody {
        this['ips'] = ips;
        return this;
    }
    public withOverseasType(overseasType: number): AddWafWhiteIpRuleV2RequestBody {
        this['overseas_type'] = overseasType;
        return this;
    }
    public set overseasType(overseasType: number  | undefined) {
        this['overseas_type'] = overseasType;
    }
    public get overseasType(): number | undefined {
        return this['overseas_type'];
    }
    public withType(type: number): AddWafWhiteIpRuleV2RequestBody {
        this['type'] = type;
        return this;
    }
}