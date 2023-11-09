

export class ShowAlertRuleRequest {
    private 'workspace_id'?: string;
    private 'rule_id'?: string;
    public constructor(workspaceId?: string, ruleId?: string) { 
        this['workspace_id'] = workspaceId;
        this['rule_id'] = ruleId;
    }
    public withWorkspaceId(workspaceId: string): ShowAlertRuleRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withRuleId(ruleId: string): ShowAlertRuleRequest {
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