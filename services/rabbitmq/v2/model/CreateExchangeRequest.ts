import { CreateExchangeBody } from './CreateExchangeBody';


export class CreateExchangeRequest {
    private 'instance_id'?: string;
    public vhost?: string;
    public body?: CreateExchangeBody;
    public constructor(instanceId?: string, vhost?: string) { 
        this['instance_id'] = instanceId;
        this['vhost'] = vhost;
    }
    public withInstanceId(instanceId: string): CreateExchangeRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withVhost(vhost: string): CreateExchangeRequest {
        this['vhost'] = vhost;
        return this;
    }
    public withBody(body: CreateExchangeBody): CreateExchangeRequest {
        this['body'] = body;
        return this;
    }
}