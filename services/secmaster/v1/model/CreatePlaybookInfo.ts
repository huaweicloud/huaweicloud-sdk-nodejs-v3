

export class CreatePlaybookInfo {
    public name?: string;
    public description?: string;
    private 'workspace_id'?: string;
    public constructor(name?: string, workspaceId?: string) { 
        this['name'] = name;
        this['workspace_id'] = workspaceId;
    }
    public withName(name: string): CreatePlaybookInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreatePlaybookInfo {
        this['description'] = description;
        return this;
    }
    public withWorkspaceId(workspaceId: string): CreatePlaybookInfo {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
}