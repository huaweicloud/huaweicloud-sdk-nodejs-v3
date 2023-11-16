

export class ShowRuleRequest {
    private 'domain_id'?: string;
    private 'rule_id'?: string;
    private 'cloud_project_id'?: string;
    public constructor(domainId?: string, ruleId?: string) { 
        this['domain_id'] = domainId;
        this['rule_id'] = ruleId;
    }
    public withDomainId(domainId: string): ShowRuleRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRuleId(ruleId: string): ShowRuleRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withCloudProjectId(cloudProjectId: string): ShowRuleRequest {
        this['cloud_project_id'] = cloudProjectId;
        return this;
    }
    public set cloudProjectId(cloudProjectId: string  | undefined) {
        this['cloud_project_id'] = cloudProjectId;
    }
    public get cloudProjectId(): string | undefined {
        return this['cloud_project_id'];
    }
}