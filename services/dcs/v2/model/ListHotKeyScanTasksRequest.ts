

export class ListHotKeyScanTasksRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public status?: ListHotKeyScanTasksRequestStatusEnum | string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListHotKeyScanTasksRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListHotKeyScanTasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListHotKeyScanTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withStatus(status: ListHotKeyScanTasksRequestStatusEnum | string): ListHotKeyScanTasksRequest {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListHotKeyScanTasksRequestStatusEnum {
    WAITING = 'waiting',
    RUNNING = 'running',
    SUCCESS = 'success',
    FAILED = 'failed'
}
