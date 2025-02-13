

export class DeleteNoticeRuleRequest {
    private 'X-Enterprise-Project-ID'?: string;
    private 'X-Environment-ID'?: string;
    private 'rule_id'?: string;
    public constructor(xEnvironmentID?: string, ruleId?: string) { 
        this['X-Environment-ID'] = xEnvironmentID;
        this['rule_id'] = ruleId;
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): DeleteNoticeRuleRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withXEnvironmentID(xEnvironmentID: string): DeleteNoticeRuleRequest {
        this['X-Environment-ID'] = xEnvironmentID;
        return this;
    }
    public set xEnvironmentID(xEnvironmentID: string  | undefined) {
        this['X-Environment-ID'] = xEnvironmentID;
    }
    public get xEnvironmentID(): string | undefined {
        return this['X-Environment-ID'];
    }
    public withRuleId(ruleId: string): DeleteNoticeRuleRequest {
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