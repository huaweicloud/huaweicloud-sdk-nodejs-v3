

export class ListQueuePropertiesRequest {
    private 'queue_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(queueName?: string) { 
        this['queue_name'] = queueName;
    }
    public withQueueName(queueName: string): ListQueuePropertiesRequest {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withOffset(offset: number): ListQueuePropertiesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListQueuePropertiesRequest {
        this['limit'] = limit;
        return this;
    }
}