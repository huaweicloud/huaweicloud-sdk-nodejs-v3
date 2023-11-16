

export class ShowOpenSourceStrategyRequest {
    private 'domain_id'?: string;
    private 'rule_set_id'?: string;
    public constructor(domainId?: string, ruleSetId?: string) { 
        this['domain_id'] = domainId;
        this['rule_set_id'] = ruleSetId;
    }
    public withDomainId(domainId: string): ShowOpenSourceStrategyRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRuleSetId(ruleSetId: string): ShowOpenSourceStrategyRequest {
        this['rule_set_id'] = ruleSetId;
        return this;
    }
    public set ruleSetId(ruleSetId: string  | undefined) {
        this['rule_set_id'] = ruleSetId;
    }
    public get ruleSetId(): string | undefined {
        return this['rule_set_id'];
    }
}