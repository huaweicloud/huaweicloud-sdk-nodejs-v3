

export class ListInstanceSnapshotsRequest {
    private 'application_id'?: string;
    private 'component_id'?: string;
    private 'instance_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'snapshot_order_by'?: string;
    public order?: ListInstanceSnapshotsRequestOrderEnum | string;
    public constructor(applicationId?: string, componentId?: string, instanceId?: string) { 
        this['application_id'] = applicationId;
        this['component_id'] = componentId;
        this['instance_id'] = instanceId;
    }
    public withApplicationId(applicationId: string): ListInstanceSnapshotsRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withComponentId(componentId: string): ListInstanceSnapshotsRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withInstanceId(instanceId: string): ListInstanceSnapshotsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withLimit(limit: number): ListInstanceSnapshotsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListInstanceSnapshotsRequest {
        this['offset'] = offset;
        return this;
    }
    public withSnapshotOrderBy(snapshotOrderBy: string): ListInstanceSnapshotsRequest {
        this['snapshot_order_by'] = snapshotOrderBy;
        return this;
    }
    public set snapshotOrderBy(snapshotOrderBy: string  | undefined) {
        this['snapshot_order_by'] = snapshotOrderBy;
    }
    public get snapshotOrderBy(): string | undefined {
        return this['snapshot_order_by'];
    }
    public withOrder(order: ListInstanceSnapshotsRequestOrderEnum | string): ListInstanceSnapshotsRequest {
        this['order'] = order;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstanceSnapshotsRequestOrderEnum {
    DESC = 'desc',
    ASC = 'asc'
}
