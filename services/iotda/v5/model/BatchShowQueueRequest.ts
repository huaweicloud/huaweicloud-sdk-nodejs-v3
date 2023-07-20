

export class BatchShowQueueRequest {
    private 'Instance-Id'?: string;
    private 'queue_name'?: string;
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public constructor() { 
    }
    public withInstanceId(instanceId: string): BatchShowQueueRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withQueueName(queueName: string): BatchShowQueueRequest {
        this['queue_name'] = queueName;
        return this;
    }
    public set queueName(queueName: string  | undefined) {
        this['queue_name'] = queueName;
    }
    public get queueName(): string | undefined {
        return this['queue_name'];
    }
    public withLimit(limit: number): BatchShowQueueRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): BatchShowQueueRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): BatchShowQueueRequest {
        this['offset'] = offset;
        return this;
    }
}