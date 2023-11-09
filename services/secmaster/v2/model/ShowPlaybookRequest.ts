

export class ShowPlaybookRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'playbook_id'?: string;
    public constructor(contentType?: string, workspaceId?: string, playbookId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['playbook_id'] = playbookId;
    }
    public withContentType(contentType: string): ShowPlaybookRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ShowPlaybookRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withPlaybookId(playbookId: string): ShowPlaybookRequest {
        this['playbook_id'] = playbookId;
        return this;
    }
    public set playbookId(playbookId: string  | undefined) {
        this['playbook_id'] = playbookId;
    }
    public get playbookId(): string | undefined {
        return this['playbook_id'];
    }
}