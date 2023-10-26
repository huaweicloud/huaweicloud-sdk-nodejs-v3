

export class ListDbMaskTaskRequest {
    private 'template_id'?: string;
    private 'workspace_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(templateId?: string) { 
        this['template_id'] = templateId;
    }
    public withTemplateId(templateId: string): ListDbMaskTaskRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withWorkspaceId(workspaceId: string): ListDbMaskTaskRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withOffset(offset: number): ListDbMaskTaskRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDbMaskTaskRequest {
        this['limit'] = limit;
        return this;
    }
}