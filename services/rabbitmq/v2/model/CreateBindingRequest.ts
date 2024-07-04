import { CreateBindingBody } from './CreateBindingBody';


export class CreateBindingRequest {
    private 'instance_id'?: string;
    public vhost?: string;
    public exchange?: string;
    public body?: CreateBindingBody;
    public constructor(instanceId?: string, vhost?: string, exchange?: string) { 
        this['instance_id'] = instanceId;
        this['vhost'] = vhost;
        this['exchange'] = exchange;
    }
    public withInstanceId(instanceId: string): CreateBindingRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withVhost(vhost: string): CreateBindingRequest {
        this['vhost'] = vhost;
        return this;
    }
    public withExchange(exchange: string): CreateBindingRequest {
        this['exchange'] = exchange;
        return this;
    }
    public withBody(body: CreateBindingBody): CreateBindingRequest {
        this['body'] = body;
        return this;
    }
}