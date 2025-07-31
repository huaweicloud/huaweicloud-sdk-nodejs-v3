

export class ListBaselineWhiteListsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'check_rule_name'?: string;
    private 'os_type'?: string;
    private 'rule_type'?: string;
    public tag?: string;
    public description?: string;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListBaselineWhiteListsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListBaselineWhiteListsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListBaselineWhiteListsRequest {
        this['limit'] = limit;
        return this;
    }
    public withCheckRuleName(checkRuleName: string): ListBaselineWhiteListsRequest {
        this['check_rule_name'] = checkRuleName;
        return this;
    }
    public set checkRuleName(checkRuleName: string  | undefined) {
        this['check_rule_name'] = checkRuleName;
    }
    public get checkRuleName(): string | undefined {
        return this['check_rule_name'];
    }
    public withOsType(osType: string): ListBaselineWhiteListsRequest {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withRuleType(ruleType: string): ListBaselineWhiteListsRequest {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): string | undefined {
        return this['rule_type'];
    }
    public withTag(tag: string): ListBaselineWhiteListsRequest {
        this['tag'] = tag;
        return this;
    }
    public withDescription(description: string): ListBaselineWhiteListsRequest {
        this['description'] = description;
        return this;
    }
}