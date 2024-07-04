import { BatchDeleteBody } from './BatchDeleteBody';


export class BatchDeleteQueuesRequest {
    private 'instance_id'?: string;
    public vhost?: string;
    public body?: BatchDeleteBody;
    public constructor(instanceId?: string, vhost?: string) { 
        this['instance_id'] = instanceId;
        this['vhost'] = vhost;
    }
    public withInstanceId(instanceId: string): BatchDeleteQueuesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withVhost(vhost: string): BatchDeleteQueuesRequest {
        this['vhost'] = vhost;
        return this;
    }
    public withBody(body: BatchDeleteBody): BatchDeleteQueuesRequest {
        this['body'] = body;
        return this;
    }
}