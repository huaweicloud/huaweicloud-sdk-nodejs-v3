

export class DeleteRuleNewRequest {
    private 'domain_name'?: string;
    private 'rule_id'?: string;
    public constructor(domainName?: string, ruleId?: string) { 
        this['domain_name'] = domainName;
        this['rule_id'] = ruleId;
    }
    public withDomainName(domainName: string): DeleteRuleNewRequest {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withRuleId(ruleId: string): DeleteRuleNewRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
}