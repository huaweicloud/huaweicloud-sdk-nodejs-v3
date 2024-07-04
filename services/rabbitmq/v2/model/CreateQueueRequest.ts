import { CreateQueueBody } from './CreateQueueBody';


export class CreateQueueRequest {
    private 'instance_id'?: string;
    public vhost?: string;
    public body?: CreateQueueBody;
    public constructor(instanceId?: string, vhost?: string) { 
        this['instance_id'] = instanceId;
        this['vhost'] = vhost;
    }
    public withInstanceId(instanceId: string): CreateQueueRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withVhost(vhost: string): CreateQueueRequest {
        this['vhost'] = vhost;
        return this;
    }
    public withBody(body: CreateQueueBody): CreateQueueRequest {
        this['body'] = body;
        return this;
    }
}