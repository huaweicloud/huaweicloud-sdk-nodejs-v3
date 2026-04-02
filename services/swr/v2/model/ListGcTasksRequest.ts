

export class ListGcTasksRequest {
    private 'instance_id'?: string;
    public marker?: string;
    public limit?: number;
    public status?: ListGcTasksRequestStatusEnum | string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListGcTasksRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withMarker(marker: string): ListGcTasksRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListGcTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withStatus(status: ListGcTasksRequestStatusEnum | string): ListGcTasksRequest {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListGcTasksRequestStatusEnum {
    SUCCESS = 'Success',
    STOPPED = 'Stopped',
    RUNNING = 'Running',
    PENDING = 'Pending',
    ERROR = 'Error'
}
