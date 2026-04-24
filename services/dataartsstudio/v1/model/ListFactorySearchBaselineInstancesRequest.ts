

export class ListFactorySearchBaselineInstancesRequest {
    private 'instance_id'?: string;
    private 'X-Project-Id'?: string;
    public workspace?: string;
    private 'workspace_id'?: string;
    private 'baseline_name'?: string;
    private 'owner_name'?: string;
    public type?: ListFactorySearchBaselineInstancesRequestTypeEnum | string;
    public priority?: number;
    public status?: ListFactorySearchBaselineInstancesRequestStatusEnum | string;
    private 'finish_status'?: ListFactorySearchBaselineInstancesRequestFinishStatusEnum | string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    private 'order_by'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, workspace?: string, workspaceId?: string) { 
        this['instance_id'] = instanceId;
        this['workspace'] = workspace;
        this['workspace_id'] = workspaceId;
    }
    public withInstanceId(instanceId: string): ListFactorySearchBaselineInstancesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withXProjectId(xProjectId: string): ListFactorySearchBaselineInstancesRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withWorkspace(workspace: string): ListFactorySearchBaselineInstancesRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ListFactorySearchBaselineInstancesRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withBaselineName(baselineName: string): ListFactorySearchBaselineInstancesRequest {
        this['baseline_name'] = baselineName;
        return this;
    }
    public set baselineName(baselineName: string  | undefined) {
        this['baseline_name'] = baselineName;
    }
    public get baselineName(): string | undefined {
        return this['baseline_name'];
    }
    public withOwnerName(ownerName: string): ListFactorySearchBaselineInstancesRequest {
        this['owner_name'] = ownerName;
        return this;
    }
    public set ownerName(ownerName: string  | undefined) {
        this['owner_name'] = ownerName;
    }
    public get ownerName(): string | undefined {
        return this['owner_name'];
    }
    public withType(type: ListFactorySearchBaselineInstancesRequestTypeEnum | string): ListFactorySearchBaselineInstancesRequest {
        this['type'] = type;
        return this;
    }
    public withPriority(priority: number): ListFactorySearchBaselineInstancesRequest {
        this['priority'] = priority;
        return this;
    }
    public withStatus(status: ListFactorySearchBaselineInstancesRequestStatusEnum | string): ListFactorySearchBaselineInstancesRequest {
        this['status'] = status;
        return this;
    }
    public withFinishStatus(finishStatus: ListFactorySearchBaselineInstancesRequestFinishStatusEnum | string): ListFactorySearchBaselineInstancesRequest {
        this['finish_status'] = finishStatus;
        return this;
    }
    public set finishStatus(finishStatus: ListFactorySearchBaselineInstancesRequestFinishStatusEnum | string  | undefined) {
        this['finish_status'] = finishStatus;
    }
    public get finishStatus(): ListFactorySearchBaselineInstancesRequestFinishStatusEnum | string | undefined {
        return this['finish_status'];
    }
    public withStartTime(startTime: number): ListFactorySearchBaselineInstancesRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListFactorySearchBaselineInstancesRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withOrderBy(orderBy: string): ListFactorySearchBaselineInstancesRequest {
        this['order_by'] = orderBy;
        return this;
    }
    public set orderBy(orderBy: string  | undefined) {
        this['order_by'] = orderBy;
    }
    public get orderBy(): string | undefined {
        return this['order_by'];
    }
    public withOffset(offset: number): ListFactorySearchBaselineInstancesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListFactorySearchBaselineInstancesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListFactorySearchBaselineInstancesRequestTypeEnum {
    DAY = 'DAY',
    HOUR = 'HOUR'
}
/**
    * @export
    * @enum {string}
    */
export enum ListFactorySearchBaselineInstancesRequestStatusEnum {
    ERROR = 'ERROR',
    SAFE = 'SAFE',
    DANGEROUS = 'DANGEROUS',
    OVER = 'OVER'
}
/**
    * @export
    * @enum {string}
    */
export enum ListFactorySearchBaselineInstancesRequestFinishStatusEnum {
    UNFINISH = 'UNFINISH',
    FINISH = 'FINISH'
}
