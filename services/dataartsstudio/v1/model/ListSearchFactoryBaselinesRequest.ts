

export class ListSearchFactoryBaselinesRequest {
    private 'instance_id'?: string;
    private 'X-Project-Id'?: string;
    public workspace?: string;
    private 'workspace_id'?: string;
    public name?: string;
    private 'owner_name'?: string;
    public priority?: number;
    private 'order_by'?: string;
    public enable?: boolean;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, workspace?: string, workspaceId?: string) { 
        this['instance_id'] = instanceId;
        this['workspace'] = workspace;
        this['workspace_id'] = workspaceId;
    }
    public withInstanceId(instanceId: string): ListSearchFactoryBaselinesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXProjectId(xProjectId: string): ListSearchFactoryBaselinesRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withWorkspace(workspace: string): ListSearchFactoryBaselinesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ListSearchFactoryBaselinesRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withName(name: string): ListSearchFactoryBaselinesRequest {
        this['name'] = name;
        return this;
    }
    public withOwnerName(ownerName: string): ListSearchFactoryBaselinesRequest {
        this['owner_name'] = ownerName;
        return this;
    }
    public set ownerName(ownerName: string  | undefined) {
        this['owner_name'] = ownerName;
    }
    public get ownerName(): string | undefined {
        return this['owner_name'];
    }
    public withPriority(priority: number): ListSearchFactoryBaselinesRequest {
        this['priority'] = priority;
        return this;
    }
    public withOrderBy(orderBy: string): ListSearchFactoryBaselinesRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withEnable(enable: boolean): ListSearchFactoryBaselinesRequest {
        this['enable'] = enable;
        return this;
    }
    public withOffset(offset: number): ListSearchFactoryBaselinesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSearchFactoryBaselinesRequest {
        this['limit'] = limit;
        return this;
    }
}