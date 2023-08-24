

export class ShowCheckRuleDetailRequest {
    private 'enterprise_project_id'?: string;
    private 'check_name'?: string;
    private 'check_type'?: string;
    private 'check_rule_id'?: string;
    public standard?: string;
    private 'host_id'?: string;
    public constructor(checkName?: string, checkType?: string, checkRuleId?: string, standard?: string) { 
        this['check_name'] = checkName;
        this['check_type'] = checkType;
        this['check_rule_id'] = checkRuleId;
        this['standard'] = standard;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowCheckRuleDetailRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCheckName(checkName: string): ShowCheckRuleDetailRequest {
        this['check_name'] = checkName;
        return this;
    }
    public set checkName(checkName: string  | undefined) {
        this['check_name'] = checkName;
    }
    public get checkName(): string | undefined {
        return this['check_name'];
    }
    public withCheckType(checkType: string): ShowCheckRuleDetailRequest {
        this['check_type'] = checkType;
        return this;
    }
    public set checkType(checkType: string  | undefined) {
        this['check_type'] = checkType;
    }
    public get checkType(): string | undefined {
        return this['check_type'];
    }
    public withCheckRuleId(checkRuleId: string): ShowCheckRuleDetailRequest {
        this['check_rule_id'] = checkRuleId;
        return this;
    }
    public set checkRuleId(checkRuleId: string  | undefined) {
        this['check_rule_id'] = checkRuleId;
    }
    public get checkRuleId(): string | undefined {
        return this['check_rule_id'];
    }
    public withStandard(standard: string): ShowCheckRuleDetailRequest {
        this['standard'] = standard;
        return this;
    }
    public withHostId(hostId: string): ShowCheckRuleDetailRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
}