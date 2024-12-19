

export class DeleteWafWhiteIpRuleV2RequestBody {
    public ids?: Array<string>;
    private 'domain_name'?: string;
    private 'overseas_type'?: number;
    public constructor(ids?: Array<string>, domainName?: string, overseasType?: number) { 
        this['ids'] = ids;
        this['domain_name'] = domainName;
        this['overseas_type'] = overseasType;
    }
    public withIds(ids: Array<string>): DeleteWafWhiteIpRuleV2RequestBody {
        this['ids'] = ids;
        return this;
    }
    public withDomainName(domainName: string): DeleteWafWhiteIpRuleV2RequestBody {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withOverseasType(overseasType: number): DeleteWafWhiteIpRuleV2RequestBody {
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