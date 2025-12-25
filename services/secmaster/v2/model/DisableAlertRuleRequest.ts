

export class DisableAlertRuleRequest {
    private 'workspace_id'?: string;
    private 'alert_rule_id'?: string;
    public constructor(workspaceId?: string, alertRuleId?: string) { 
        this['workspace_id'] = workspaceId;
        this['alert_rule_id'] = alertRuleId;
    }
    public withWorkspaceId(workspaceId: string): DisableAlertRuleRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withAlertRuleId(alertRuleId: string): DisableAlertRuleRequest {
        this['alert_rule_id'] = alertRuleId;
        return this;
    }
    public set alertRuleId(alertRuleId: string  | undefined) {
        this['alert_rule_id'] = alertRuleId;
    }
    public get alertRuleId(): string | undefined {
        return this['alert_rule_id'];
    }
}