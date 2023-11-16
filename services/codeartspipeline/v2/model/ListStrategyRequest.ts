

export class ListStrategyRequest {
    private 'domain_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'include_tenant_rule_set'?: boolean;
    public name?: string;
    private 'is_valid'?: boolean;
    public type?: string;
    private 'cloud_project_id'?: string;
    public constructor(domainId?: string, offset?: number, limit?: number, includeTenantRuleSet?: boolean) { 
        this['domain_id'] = domainId;
        this['offset'] = offset;
        this['limit'] = limit;
        this['include_tenant_rule_set'] = includeTenantRuleSet;
    }
    public withDomainId(domainId: string): ListStrategyRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withOffset(offset: number): ListStrategyRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListStrategyRequest {
        this['limit'] = limit;
        return this;
    }
    public withIncludeTenantRuleSet(includeTenantRuleSet: boolean): ListStrategyRequest {
        this['include_tenant_rule_set'] = includeTenantRuleSet;
        return this;
    }
    public set includeTenantRuleSet(includeTenantRuleSet: boolean  | undefined) {
        this['include_tenant_rule_set'] = includeTenantRuleSet;
    }
    public get includeTenantRuleSet(): boolean | undefined {
        return this['include_tenant_rule_set'];
    }
    public withName(name: string): ListStrategyRequest {
        this['name'] = name;
        return this;
    }
    public withIsValid(isValid: boolean): ListStrategyRequest {
        this['is_valid'] = isValid;
        return this;
    }
    public set isValid(isValid: boolean  | undefined) {
        this['is_valid'] = isValid;
    }
    public get isValid(): boolean | undefined {
        return this['is_valid'];
    }
    public withType(type: string): ListStrategyRequest {
        this['type'] = type;
        return this;
    }
    public withCloudProjectId(cloudProjectId: string): ListStrategyRequest {
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