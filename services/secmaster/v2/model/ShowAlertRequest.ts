

export class ShowAlertRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'alert_id'?: string;
    public constructor(contentType?: string, workspaceId?: string, alertId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['alert_id'] = alertId;
    }
    public withContentType(contentType: string): ShowAlertRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ShowAlertRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withAlertId(alertId: string): ShowAlertRequest {
        this['alert_id'] = alertId;
        return this;
    }
    public set alertId(alertId: string  | undefined) {
        this['alert_id'] = alertId;
    }
    public get alertId(): string | undefined {
        return this['alert_id'];
    }
}