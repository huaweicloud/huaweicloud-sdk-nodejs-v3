

export class ListAlertRulesRequest {
    private 'workspace_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    private 'output_table_id'?: string;
    private 'alert_rule_name'?: string;
    private 'alert_rule_id'?: string;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
    }
    public withWorkspaceId(workspaceId: string): ListAlertRulesRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withOffset(offset: number): ListAlertRulesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAlertRulesRequest {
        this['limit'] = limit;
        return this;
    }
    public withSortKey(sortKey: string): ListAlertRulesRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListAlertRulesRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withOutputTableId(outputTableId: string): ListAlertRulesRequest {
        this['output_table_id'] = outputTableId;
        return this;
    }
    public set outputTableId(outputTableId: string  | undefined) {
        this['output_table_id'] = outputTableId;
    }
    public get outputTableId(): string | undefined {
        return this['output_table_id'];
    }
    public withAlertRuleName(alertRuleName: string): ListAlertRulesRequest {
        this['alert_rule_name'] = alertRuleName;
        return this;
    }
    public set alertRuleName(alertRuleName: string  | undefined) {
        this['alert_rule_name'] = alertRuleName;
    }
    public get alertRuleName(): string | undefined {
        return this['alert_rule_name'];
    }
    public withAlertRuleId(alertRuleId: string): ListAlertRulesRequest {
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