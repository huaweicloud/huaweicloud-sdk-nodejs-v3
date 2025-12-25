

export class ShowComponentActionRequest {
    private 'workspace_id'?: string;
    private 'component_id'?: string;
    private 'action_id'?: string;
    public enabled?: boolean;
    public constructor(workspaceId?: string, componentId?: string, actionId?: string, enabled?: boolean) { 
        this['workspace_id'] = workspaceId;
        this['component_id'] = componentId;
        this['action_id'] = actionId;
        this['enabled'] = enabled;
    }
    public withWorkspaceId(workspaceId: string): ShowComponentActionRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withComponentId(componentId: string): ShowComponentActionRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withActionId(actionId: string): ShowComponentActionRequest {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string  | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId(): string | undefined {
        return this['action_id'];
    }
    public withEnabled(enabled: boolean): ShowComponentActionRequest {
        this['enabled'] = enabled;
        return this;
    }
}