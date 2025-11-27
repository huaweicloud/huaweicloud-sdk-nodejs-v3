

export class ListReplicationErrorsRequest {
    private 'instance_id'?: string;
    private 'subscription_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListReplicationErrorsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withSubscriptionId(subscriptionId: string): ListReplicationErrorsRequest {
        this['subscription_id'] = subscriptionId;
        return this;
    }
    public set subscriptionId(subscriptionId: string  | undefined) {
        this['subscription_id'] = subscriptionId;
    }
    public get subscriptionId(): string | undefined {
        return this['subscription_id'];
    }
    public withOffset(offset: number): ListReplicationErrorsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListReplicationErrorsRequest {
        this['limit'] = limit;
        return this;
    }
}