

export class ShowAlertRuleTemplateRequest {
    private 'workspace_id'?: string;
    private 'template_id'?: string;
    public constructor(workspaceId?: string, templateId?: string) { 
        this['workspace_id'] = workspaceId;
        this['template_id'] = templateId;
    }
    public withWorkspaceId(workspaceId: string): ShowAlertRuleTemplateRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withTemplateId(templateId: string): ShowAlertRuleTemplateRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
}