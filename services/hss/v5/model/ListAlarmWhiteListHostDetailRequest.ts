

export class ListAlarmWhiteListHostDetailRequest {
    private 'enterprise_project_id'?: string;
    private 'rule_id'?: string;
    public constructor(ruleId?: string) { 
        this['rule_id'] = ruleId;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAlarmWhiteListHostDetailRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withRuleId(ruleId: string): ListAlarmWhiteListHostDetailRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
}