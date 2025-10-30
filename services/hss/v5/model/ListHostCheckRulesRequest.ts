

export class ListHostCheckRulesRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'host_id'?: string;
    private 'policy_group_id'?: string;
    private 'result_type'?: string;
    public standard?: string;
    private 'check_name'?: string;
    private 'check_rule_name'?: string;
    public tag?: string;
    public severity?: string;
    public constructor(hostId?: string, standard?: string, checkName?: string) { 
        this['host_id'] = hostId;
        this['standard'] = standard;
        this['check_name'] = checkName;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListHostCheckRulesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListHostCheckRulesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListHostCheckRulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withHostId(hostId: string): ListHostCheckRulesRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withPolicyGroupId(policyGroupId: string): ListHostCheckRulesRequest {
        this['policy_group_id'] = policyGroupId;
        return this;
    }
    public set policyGroupId(policyGroupId: string  | undefined) {
        this['policy_group_id'] = policyGroupId;
    }
    public get policyGroupId(): string | undefined {
        return this['policy_group_id'];
    }
    public withResultType(resultType: string): ListHostCheckRulesRequest {
        this['result_type'] = resultType;
        return this;
    }
    public set resultType(resultType: string  | undefined) {
        this['result_type'] = resultType;
    }
    public get resultType(): string | undefined {
        return this['result_type'];
    }
    public withStandard(standard: string): ListHostCheckRulesRequest {
        this['standard'] = standard;
        return this;
    }
    public withCheckName(checkName: string): ListHostCheckRulesRequest {
        this['check_name'] = checkName;
        return this;
    }
    public set checkName(checkName: string  | undefined) {
        this['check_name'] = checkName;
    }
    public get checkName(): string | undefined {
        return this['check_name'];
    }
    public withCheckRuleName(checkRuleName: string): ListHostCheckRulesRequest {
        this['check_rule_name'] = checkRuleName;
        return this;
    }
    public set checkRuleName(checkRuleName: string  | undefined) {
        this['check_rule_name'] = checkRuleName;
    }
    public get checkRuleName(): string | undefined {
        return this['check_rule_name'];
    }
    public withTag(tag: string): ListHostCheckRulesRequest {
        this['tag'] = tag;
        return this;
    }
    public withSeverity(severity: string): ListHostCheckRulesRequest {
        this['severity'] = severity;
        return this;
    }
}