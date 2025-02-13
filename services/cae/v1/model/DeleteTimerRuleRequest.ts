

export class DeleteTimerRuleRequest {
    private 'X-Enterprise-Project-ID'?: string;
    private 'X-Environment-ID'?: string;
    private 'timer_rule_id'?: string;
    public constructor(xEnvironmentID?: string, timerRuleId?: string) { 
        this['X-Environment-ID'] = xEnvironmentID;
        this['timer_rule_id'] = timerRuleId;
    }
    public withXEnterpriseProjectID(xEnterpriseProjectID: string): DeleteTimerRuleRequest {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
        return this;
    }
    public set xEnterpriseProjectID(xEnterpriseProjectID: string  | undefined) {
        this['X-Enterprise-Project-ID'] = xEnterpriseProjectID;
    }
    public get xEnterpriseProjectID(): string | undefined {
        return this['X-Enterprise-Project-ID'];
    }
    public withXEnvironmentID(xEnvironmentID: string): DeleteTimerRuleRequest {
        this['X-Environment-ID'] = xEnvironmentID;
        return this;
    }
    public set xEnvironmentID(xEnvironmentID: string  | undefined) {
        this['X-Environment-ID'] = xEnvironmentID;
    }
    public get xEnvironmentID(): string | undefined {
        return this['X-Environment-ID'];
    }
    public withTimerRuleId(timerRuleId: string): DeleteTimerRuleRequest {
        this['timer_rule_id'] = timerRuleId;
        return this;
    }
    public set timerRuleId(timerRuleId: string  | undefined) {
        this['timer_rule_id'] = timerRuleId;
    }
    public get timerRuleId(): string | undefined {
        return this['timer_rule_id'];
    }
}