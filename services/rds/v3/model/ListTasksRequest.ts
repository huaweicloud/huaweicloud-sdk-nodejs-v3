

export class ListTasksRequest {
    public offset?: number;
    public limit?: number;
    public id?: string;
    private 'instance_id'?: string;
    private 'order_id'?: string;
    public name?: string;
    public status?: ListTasksRequestStatusEnum | string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListTasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withId(id: string): ListTasksRequest {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): ListTasksRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOrderId(orderId: string): ListTasksRequest {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withName(name: string): ListTasksRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: ListTasksRequestStatusEnum | string): ListTasksRequest {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: string): ListTasksRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListTasksRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTasksRequestStatusEnum {
    RUNNING = 'Running',
    COMPLETED = 'Completed',
    FAILED = 'Failed'
}
