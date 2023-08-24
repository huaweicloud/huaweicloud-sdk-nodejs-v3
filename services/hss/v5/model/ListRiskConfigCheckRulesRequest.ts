

export class ListRiskConfigCheckRulesRequest {
    private 'enterprise_project_id'?: string;
    private 'check_name'?: string;
    public standard?: string;
    private 'result_type'?: string;
    private 'check_rule_name'?: string;
    public severity?: string;
    private 'host_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(checkName?: string, standard?: string) { 
        this['check_name'] = checkName;
        this['standard'] = standard;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListRiskConfigCheckRulesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCheckName(checkName: string): ListRiskConfigCheckRulesRequest {
        this['check_name'] = checkName;
        return this;
    }
    public set checkName(checkName: string  | undefined) {
        this['check_name'] = checkName;
    }
    public get checkName(): string | undefined {
        return this['check_name'];
    }
    public withStandard(standard: string): ListRiskConfigCheckRulesRequest {
        this['standard'] = standard;
        return this;
    }
    public withResultType(resultType: string): ListRiskConfigCheckRulesRequest {
        this['result_type'] = resultType;
        return this;
    }
    public set resultType(resultType: string  | undefined) {
        this['result_type'] = resultType;
    }
    public get resultType(): string | undefined {
        return this['result_type'];
    }
    public withCheckRuleName(checkRuleName: string): ListRiskConfigCheckRulesRequest {
        this['check_rule_name'] = checkRuleName;
        return this;
    }
    public set checkRuleName(checkRuleName: string  | undefined) {
        this['check_rule_name'] = checkRuleName;
    }
    public get checkRuleName(): string | undefined {
        return this['check_rule_name'];
    }
    public withSeverity(severity: string): ListRiskConfigCheckRulesRequest {
        this['severity'] = severity;
        return this;
    }
    public withHostId(hostId: string): ListRiskConfigCheckRulesRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withLimit(limit: number): ListRiskConfigCheckRulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListRiskConfigCheckRulesRequest {
        this['offset'] = offset;
        return this;
    }
}