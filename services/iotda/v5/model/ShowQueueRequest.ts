

export class ShowQueueRequest {
    private 'Instance-Id'?: string | undefined;
    private 'queue_id': string | undefined;
    public constructor(queueId: any) { 
        this['queue_id'] = queueId;
    }
    public withInstanceId(instanceId: string): ShowQueueRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId() {
        return this['Instance-Id'];
    }
    public withQueueId(queueId: string): ShowQueueRequest {
        this['queue_id'] = queueId;
        return this;
    }
    public set queueId(queueId: string | undefined) {
        this['queue_id'] = queueId;
    }
    public get queueId() {
        return this['queue_id'];
    }
}