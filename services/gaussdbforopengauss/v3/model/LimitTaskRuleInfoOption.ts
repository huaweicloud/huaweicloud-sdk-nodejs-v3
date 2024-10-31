

export class LimitTaskRuleInfoOption {
    private 'node_id'?: string;
    private 'rule_id'?: string;
    public status?: string;
    public constructor(nodeId?: string, ruleId?: string, status?: string) { 
        this['node_id'] = nodeId;
        this['rule_id'] = ruleId;
        this['status'] = status;
    }
    public withNodeId(nodeId: string): LimitTaskRuleInfoOption {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withRuleId(ruleId: string): LimitTaskRuleInfoOption {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withStatus(status: string): LimitTaskRuleInfoOption {
        this['status'] = status;
        return this;
    }
}