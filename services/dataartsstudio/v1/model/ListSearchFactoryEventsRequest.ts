

export class ListSearchFactoryEventsRequest {
    private 'instance_id'?: string;
    private 'X-Project-Id'?: string;
    public workspace?: string;
    private 'workspace_id'?: string;
    public name?: string;
    private 'task_name'?: string;
    private 'owner_name'?: string;
    public type?: string;
    public status?: string;
    private 'order_by'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, workspace?: string, workspaceId?: string) { 
        this['instance_id'] = instanceId;
        this['workspace'] = workspace;
        this['workspace_id'] = workspaceId;
    }
    public withInstanceId(instanceId: string): ListSearchFactoryEventsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXProjectId(xProjectId: string): ListSearchFactoryEventsRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withWorkspace(workspace: string): ListSearchFactoryEventsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ListSearchFactoryEventsRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withName(name: string): ListSearchFactoryEventsRequest {
        this['name'] = name;
        return this;
    }
    public withTaskName(taskName: string): ListSearchFactoryEventsRequest {
        this['task_name'] = taskName;
        return this;
    }
    public set taskName(taskName: string  | undefined) {
        this['task_name'] = taskName;
    }
    public get taskName(): string | undefined {
        return this['task_name'];
    }
    public withOwnerName(ownerName: string): ListSearchFactoryEventsRequest {
        this['owner_name'] = ownerName;
        return this;
    }
    public set ownerName(ownerName: string  | undefined) {
        this['owner_name'] = ownerName;
    }
    public get ownerName(): string | undefined {
        return this['owner_name'];
    }
    public withType(type: string): ListSearchFactoryEventsRequest {
        this['type'] = type;
        return this;
    }
    public withStatus(status: string): ListSearchFactoryEventsRequest {
        this['status'] = status;
        return this;
    }
    public withOrderBy(orderBy: string): ListSearchFactoryEventsRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withStartTime(startTime: number): ListSearchFactoryEventsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListSearchFactoryEventsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withOffset(offset: number): ListSearchFactoryEventsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSearchFactoryEventsRequest {
        this['limit'] = limit;
        return this;
    }
}