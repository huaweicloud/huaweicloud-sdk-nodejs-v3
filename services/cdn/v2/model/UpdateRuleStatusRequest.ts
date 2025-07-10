

export class UpdateRuleStatusRequest {
    private 'rule_id'?: string;
    public status?: string;
    public priority?: number;
    public constructor(ruleId?: string) { 
        this['rule_id'] = ruleId;
    }
    public withRuleId(ruleId: string): UpdateRuleStatusRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withStatus(status: string): UpdateRuleStatusRequest {
        this['status'] = status;
        return this;
    }
    public withPriority(priority: number): UpdateRuleStatusRequest {
        this['priority'] = priority;
        return this;
    }
}