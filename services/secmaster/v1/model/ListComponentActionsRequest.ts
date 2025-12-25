

export class ListComponentActionsRequest {
    private 'workspace_id'?: string;
    private 'component_id'?: string;
    public offset?: number;
    public limit?: number;
    public enabled?: boolean;
    public constructor(workspaceId?: string, componentId?: string, enabled?: boolean) { 
        this['workspace_id'] = workspaceId;
        this['component_id'] = componentId;
        this['enabled'] = enabled;
    }
    public withWorkspaceId(workspaceId: string): ListComponentActionsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withComponentId(componentId: string): ListComponentActionsRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withOffset(offset: number): ListComponentActionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListComponentActionsRequest {
        this['limit'] = limit;
        return this;
    }
    public withEnabled(enabled: boolean): ListComponentActionsRequest {
        this['enabled'] = enabled;
        return this;
    }
}