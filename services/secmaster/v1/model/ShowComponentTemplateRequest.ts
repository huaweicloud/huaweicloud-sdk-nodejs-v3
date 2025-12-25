

export class ShowComponentTemplateRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'template_id'?: string;
    public constructor(contentType?: string, workspaceId?: string, templateId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['template_id'] = templateId;
    }
    public withContentType(contentType: string): ShowComponentTemplateRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ShowComponentTemplateRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withTemplateId(templateId: string): ShowComponentTemplateRequest {
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