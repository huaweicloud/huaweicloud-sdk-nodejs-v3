

export class ShowQueueRequest {
    private 'Instance-Id'?: string;
    private 'queue_id'?: string;
    public constructor(queueId?: string) { 
        this['queue_id'] = queueId;
    }
    public withInstanceId(instanceId: string): ShowQueueRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withQueueId(queueId: string): ShowQueueRequest {
        this['queue_id'] = queueId;
        return this;
    }
    public set queueId(queueId: string  | undefined) {
        this['queue_id'] = queueId;
    }
    public get queueId(): string | undefined {
        return this['queue_id'];
    }
}