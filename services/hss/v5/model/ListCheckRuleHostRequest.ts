

export class ListCheckRuleHostRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'check_rule_id'?: string;
    private 'check_name'?: string;
    private 'check_type'?: string;
    public standard?: string;
    private 'result_type'?: string;
    private 'host_type'?: string;
    private 'check_cce'?: boolean;
    private 'cluster_id'?: string;
    private 'policy_group_id'?: string;
    private 'host_name'?: string;
    public constructor(checkRuleId?: string, standard?: string) { 
        this['check_rule_id'] = checkRuleId;
        this['standard'] = standard;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListCheckRuleHostRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListCheckRuleHostRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCheckRuleHostRequest {
        this['limit'] = limit;
        return this;
    }
    public withCheckRuleId(checkRuleId: string): ListCheckRuleHostRequest {
        this['check_rule_id'] = checkRuleId;
        return this;
    }
    public set checkRuleId(checkRuleId: string  | undefined) {
        this['check_rule_id'] = checkRuleId;
    }
    public get checkRuleId(): string | undefined {
        return this['check_rule_id'];
    }
    public withCheckName(checkName: string): ListCheckRuleHostRequest {
        this['check_name'] = checkName;
        return this;
    }
    public set checkName(checkName: string  | undefined) {
        this['check_name'] = checkName;
    }
    public get checkName(): string | undefined {
        return this['check_name'];
    }
    public withCheckType(checkType: string): ListCheckRuleHostRequest {
        this['check_type'] = checkType;
        return this;
    }
    public set checkType(checkType: string  | undefined) {
        this['check_type'] = checkType;
    }
    public get checkType(): string | undefined {
        return this['check_type'];
    }
    public withStandard(standard: string): ListCheckRuleHostRequest {
        this['standard'] = standard;
        return this;
    }
    public withResultType(resultType: string): ListCheckRuleHostRequest {
        this['result_type'] = resultType;
        return this;
    }
    public set resultType(resultType: string  | undefined) {
        this['result_type'] = resultType;
    }
    public get resultType(): string | undefined {
        return this['result_type'];
    }
    public withHostType(hostType: string): ListCheckRuleHostRequest {
        this['host_type'] = hostType;
        return this;
    }
    public set hostType(hostType: string  | undefined) {
        this['host_type'] = hostType;
    }
    public get hostType(): string | undefined {
        return this['host_type'];
    }
    public withCheckCce(checkCce: boolean): ListCheckRuleHostRequest {
        this['check_cce'] = checkCce;
        return this;
    }
    public set checkCce(checkCce: boolean  | undefined) {
        this['check_cce'] = checkCce;
    }
    public get checkCce(): boolean | undefined {
        return this['check_cce'];
    }
    public withClusterId(clusterId: string): ListCheckRuleHostRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withPolicyGroupId(policyGroupId: string): ListCheckRuleHostRequest {
        this['policy_group_id'] = policyGroupId;
        return this;
    }
    public set policyGroupId(policyGroupId: string  | undefined) {
        this['policy_group_id'] = policyGroupId;
    }
    public get policyGroupId(): string | undefined {
        return this['policy_group_id'];
    }
    public withHostName(hostName: string): ListCheckRuleHostRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
}