

export class ListExchangesRequest {
    private 'instance_id'?: string;
    public vhost?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, vhost?: string) { 
        this['instance_id'] = instanceId;
        this['vhost'] = vhost;
    }
    public withInstanceId(instanceId: string): ListExchangesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withVhost(vhost: string): ListExchangesRequest {
        this['vhost'] = vhost;
        return this;
    }
    public withOffset(offset: number): ListExchangesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListExchangesRequest {
        this['limit'] = limit;
        return this;
    }
}