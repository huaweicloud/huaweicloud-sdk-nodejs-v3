

export class ListAllRiskConfigCheckRulesRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'check_type'?: string;
    public standard?: string;
    private 'statistics_scan_result'?: string;
    private 'check_rule_name'?: string;
    public severity?: string;
    private 'cluster_id'?: string;
    public tag?: string;
    private 'policy_group_id'?: string;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAllRiskConfigCheckRulesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListAllRiskConfigCheckRulesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAllRiskConfigCheckRulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withCheckType(checkType: string): ListAllRiskConfigCheckRulesRequest {
        this['check_type'] = checkType;
        return this;
    }
    public set checkType(checkType: string  | undefined) {
        this['check_type'] = checkType;
    }
    public get checkType(): string | undefined {
        return this['check_type'];
    }
    public withStandard(standard: string): ListAllRiskConfigCheckRulesRequest {
        this['standard'] = standard;
        return this;
    }
    public withStatisticsScanResult(statisticsScanResult: string): ListAllRiskConfigCheckRulesRequest {
        this['statistics_scan_result'] = statisticsScanResult;
        return this;
    }
    public set statisticsScanResult(statisticsScanResult: string  | undefined) {
        this['statistics_scan_result'] = statisticsScanResult;
    }
    public get statisticsScanResult(): string | undefined {
        return this['statistics_scan_result'];
    }
    public withCheckRuleName(checkRuleName: string): ListAllRiskConfigCheckRulesRequest {
        this['check_rule_name'] = checkRuleName;
        return this;
    }
    public set checkRuleName(checkRuleName: string  | undefined) {
        this['check_rule_name'] = checkRuleName;
    }
    public get checkRuleName(): string | undefined {
        return this['check_rule_name'];
    }
    public withSeverity(severity: string): ListAllRiskConfigCheckRulesRequest {
        this['severity'] = severity;
        return this;
    }
    public withClusterId(clusterId: string): ListAllRiskConfigCheckRulesRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withTag(tag: string): ListAllRiskConfigCheckRulesRequest {
        this['tag'] = tag;
        return this;
    }
    public withPolicyGroupId(policyGroupId: string): ListAllRiskConfigCheckRulesRequest {
        this['policy_group_id'] = policyGroupId;
        return this;
    }
    public set policyGroupId(policyGroupId: string  | undefined) {
        this['policy_group_id'] = policyGroupId;
    }
    public get policyGroupId(): string | undefined {
        return this['policy_group_id'];
    }
}