

export class ListBindingsRequest {
    private 'instance_id'?: string;
    public vhost?: string;
    public exchange?: string;
    public constructor(instanceId?: string, vhost?: string, exchange?: string) { 
        this['instance_id'] = instanceId;
        this['vhost'] = vhost;
        this['exchange'] = exchange;
    }
    public withInstanceId(instanceId: string): ListBindingsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withVhost(vhost: string): ListBindingsRequest {
        this['vhost'] = vhost;
        return this;
    }
    public withExchange(exchange: string): ListBindingsRequest {
        this['exchange'] = exchange;
        return this;
    }
}