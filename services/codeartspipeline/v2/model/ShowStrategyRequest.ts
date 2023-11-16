

export class ShowStrategyRequest {
    private 'rule_set_id'?: string;
    private 'domain_id'?: string;
    private 'cloud_project_id'?: string;
    public constructor(ruleSetId?: string, domainId?: string) { 
        this['rule_set_id'] = ruleSetId;
        this['domain_id'] = domainId;
    }
    public withRuleSetId(ruleSetId: string): ShowStrategyRequest {
        this['rule_set_id'] = ruleSetId;
        return this;
    }
    public set ruleSetId(ruleSetId: string  | undefined) {
        this['rule_set_id'] = ruleSetId;
    }
    public get ruleSetId(): string | undefined {
        return this['rule_set_id'];
    }
    public withDomainId(domainId: string): ShowStrategyRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withCloudProjectId(cloudProjectId: string): ShowStrategyRequest {
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