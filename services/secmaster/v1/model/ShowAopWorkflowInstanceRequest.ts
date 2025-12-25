

export class ShowAopWorkflowInstanceRequest {
    private 'content-type'?: string;
    private 'workspace_id'?: string;
    private 'instance_id'?: string;
    private 'show_topology'?: boolean;
    public constructor(contentType?: string, workspaceId?: string, instanceId?: string) { 
        this['content-type'] = contentType;
        this['workspace_id'] = workspaceId;
        this['instance_id'] = instanceId;
    }
    public withContentType(contentType: string): ShowAopWorkflowInstanceRequest {
        this['content-type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['content-type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['content-type'];
    }
    public withWorkspaceId(workspaceId: string): ShowAopWorkflowInstanceRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withInstanceId(instanceId: string): ShowAopWorkflowInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withShowTopology(showTopology: boolean): ShowAopWorkflowInstanceRequest {
        this['show_topology'] = showTopology;
        return this;
    }
    public set showTopology(showTopology: boolean  | undefined) {
        this['show_topology'] = showTopology;
    }
    public get showTopology(): boolean | undefined {
        return this['show_topology'];
    }
}