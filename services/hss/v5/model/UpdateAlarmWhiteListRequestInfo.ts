

export class UpdateAlarmWhiteListRequestInfo {
    private 'rule_id'?: string;
    public scope?: boolean;
    private 'agent_ids'?: Array<string>;
    private 'instance_ids'?: Array<string>;
    public constructor(ruleId?: string) { 
        this['rule_id'] = ruleId;
    }
    public withRuleId(ruleId: string): UpdateAlarmWhiteListRequestInfo {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withScope(scope: boolean): UpdateAlarmWhiteListRequestInfo {
        this['scope'] = scope;
        return this;
    }
    public withAgentIds(agentIds: Array<string>): UpdateAlarmWhiteListRequestInfo {
        this['agent_ids'] = agentIds;
        return this;
    }
    public set agentIds(agentIds: Array<string>  | undefined) {
        this['agent_ids'] = agentIds;
    }
    public get agentIds(): Array<string> | undefined {
        return this['agent_ids'];
    }
    public withInstanceIds(instanceIds: Array<string>): UpdateAlarmWhiteListRequestInfo {
        this['instance_ids'] = instanceIds;
        return this;
    }
    public set instanceIds(instanceIds: Array<string>  | undefined) {
        this['instance_ids'] = instanceIds;
    }
    public get instanceIds(): Array<string> | undefined {
        return this['instance_ids'];
    }
}