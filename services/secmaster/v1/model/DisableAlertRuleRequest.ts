

export class DisableAlertRuleRequest {
    private 'workspace_id'?: string;
    public body?: Array<string>;
    public constructor(workspaceId?: string) { 
        this['workspace_id'] = workspaceId;
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
    public withBody(body: Array<string>): DisableAlertRuleRequest {
        this['body'] = body;
        return this;
    }
}