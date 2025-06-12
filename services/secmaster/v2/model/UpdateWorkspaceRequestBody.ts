

export class UpdateWorkspaceRequestBody {
    public name?: string;
    public description?: string;
    private 'view_bind_id'?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateWorkspaceRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateWorkspaceRequestBody {
        this['description'] = description;
        return this;
    }
    public withViewBindId(viewBindId: string): UpdateWorkspaceRequestBody {
        this['view_bind_id'] = viewBindId;
        return this;
    }
    public set viewBindId(viewBindId: string  | undefined) {
        this['view_bind_id'] = viewBindId;
    }
    public get viewBindId(): string | undefined {
        return this['view_bind_id'];
    }
}