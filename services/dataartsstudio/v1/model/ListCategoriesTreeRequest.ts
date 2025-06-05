

export class ListCategoriesTreeRequest {
    public instance?: string;
    private 'workspace_id'?: string;
    public constructor(instance?: string, workspaceId?: string) { 
        this['instance'] = instance;
        this['workspace_id'] = workspaceId;
    }
    public withInstance(instance: string): ListCategoriesTreeRequest {
        this['instance'] = instance;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ListCategoriesTreeRequest {
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