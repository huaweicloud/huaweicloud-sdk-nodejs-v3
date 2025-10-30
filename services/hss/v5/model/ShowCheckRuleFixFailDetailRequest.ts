

export class ShowCheckRuleFixFailDetailRequest {
    private 'enterprise_project_id'?: string;
    private 'host_id'?: string;
    private 'check_name'?: string;
    private 'check_rule_id'?: string;
    public standard?: string;
    public constructor(checkRuleId?: string) { 
        this['check_rule_id'] = checkRuleId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowCheckRuleFixFailDetailRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHostId(hostId: string): ShowCheckRuleFixFailDetailRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withCheckName(checkName: string): ShowCheckRuleFixFailDetailRequest {
        this['check_name'] = checkName;
        return this;
    }
    public set checkName(checkName: string  | undefined) {
        this['check_name'] = checkName;
    }
    public get checkName(): string | undefined {
        return this['check_name'];
    }
    public withCheckRuleId(checkRuleId: string): ShowCheckRuleFixFailDetailRequest {
        this['check_rule_id'] = checkRuleId;
        return this;
    }
    public set checkRuleId(checkRuleId: string  | undefined) {
        this['check_rule_id'] = checkRuleId;
    }
    public get checkRuleId(): string | undefined {
        return this['check_rule_id'];
    }
    public withStandard(standard: string): ShowCheckRuleFixFailDetailRequest {
        this['standard'] = standard;
        return this;
    }
}