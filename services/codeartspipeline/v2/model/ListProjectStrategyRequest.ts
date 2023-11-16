

export class ListProjectStrategyRequest {
    public offset?: number;
    public limit?: number;
    private 'include_tenant_rule_set'?: boolean;
    public name?: string;
    private 'is_valid'?: boolean;
    public type?: string;
    public constructor(offset?: number, limit?: number, includeTenantRuleSet?: boolean) { 
        this['offset'] = offset;
        this['limit'] = limit;
        this['include_tenant_rule_set'] = includeTenantRuleSet;
    }
    public withOffset(offset: number): ListProjectStrategyRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListProjectStrategyRequest {
        this['limit'] = limit;
        return this;
    }
    public withIncludeTenantRuleSet(includeTenantRuleSet: boolean): ListProjectStrategyRequest {
        this['include_tenant_rule_set'] = includeTenantRuleSet;
        return this;
    }
    public set includeTenantRuleSet(includeTenantRuleSet: boolean  | undefined) {
        this['include_tenant_rule_set'] = includeTenantRuleSet;
    }
    public get includeTenantRuleSet(): boolean | undefined {
        return this['include_tenant_rule_set'];
    }
    public withName(name: string): ListProjectStrategyRequest {
        this['name'] = name;
        return this;
    }
    public withIsValid(isValid: boolean): ListProjectStrategyRequest {
        this['is_valid'] = isValid;
        return this;
    }
    public set isValid(isValid: boolean  | undefined) {
        this['is_valid'] = isValid;
    }
    public get isValid(): boolean | undefined {
        return this['is_valid'];
    }
    public withType(type: string): ListProjectStrategyRequest {
        this['type'] = type;
        return this;
    }
}