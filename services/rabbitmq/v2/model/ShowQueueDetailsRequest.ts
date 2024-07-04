

export class ShowQueueDetailsRequest {
    private 'instance_id'?: string;
    public vhost?: string;
    public queue?: string;
    public constructor(instanceId?: string, vhost?: string, queue?: string) { 
        this['instance_id'] = instanceId;
        this['vhost'] = vhost;
        this['queue'] = queue;
    }
    public withInstanceId(instanceId: string): ShowQueueDetailsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withVhost(vhost: string): ShowQueueDetailsRequest {
        this['vhost'] = vhost;
        return this;
    }
    public withQueue(queue: string): ShowQueueDetailsRequest {
        this['queue'] = queue;
        return this;
    }
}