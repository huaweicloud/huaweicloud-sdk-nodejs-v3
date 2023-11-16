

export class ListProjectOpenSourceStrategyRequest {
    public name?: string;
    private 'creator_name'?: string;
    private 'include_tenant_rule_set'?: boolean;
    public limit?: number;
    public offset?: number;
    public constructor(includeTenantRuleSet?: boolean) { 
        this['include_tenant_rule_set'] = includeTenantRuleSet;
    }
    public withName(name: string): ListProjectOpenSourceStrategyRequest {
        this['name'] = name;
        return this;
    }
    public withCreatorName(creatorName: string): ListProjectOpenSourceStrategyRequest {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withIncludeTenantRuleSet(includeTenantRuleSet: boolean): ListProjectOpenSourceStrategyRequest {
        this['include_tenant_rule_set'] = includeTenantRuleSet;
        return this;
    }
    public set includeTenantRuleSet(includeTenantRuleSet: boolean  | undefined) {
        this['include_tenant_rule_set'] = includeTenantRuleSet;
    }
    public get includeTenantRuleSet(): boolean | undefined {
        return this['include_tenant_rule_set'];
    }
    public withLimit(limit: number): ListProjectOpenSourceStrategyRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListProjectOpenSourceStrategyRequest {
        this['offset'] = offset;
        return this;
    }
}