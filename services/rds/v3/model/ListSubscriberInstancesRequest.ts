

export class ListSubscriberInstancesRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'subscriber_instance_id'?: string;
    private 'subscriber_instance_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withXLanguage(xLanguage: string): ListSubscriberInstancesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ListSubscriberInstancesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withSubscriberInstanceId(subscriberInstanceId: string): ListSubscriberInstancesRequest {
        this['subscriber_instance_id'] = subscriberInstanceId;
        return this;
    }
    public set subscriberInstanceId(subscriberInstanceId: string  | undefined) {
        this['subscriber_instance_id'] = subscriberInstanceId;
    }
    public get subscriberInstanceId(): string | undefined {
        return this['subscriber_instance_id'];
    }
    public withSubscriberInstanceName(subscriberInstanceName: string): ListSubscriberInstancesRequest {
        this['subscriber_instance_name'] = subscriberInstanceName;
        return this;
    }
    public set subscriberInstanceName(subscriberInstanceName: string  | undefined) {
        this['subscriber_instance_name'] = subscriberInstanceName;
    }
    public get subscriberInstanceName(): string | undefined {
        return this['subscriber_instance_name'];
    }
    public withOffset(offset: number): ListSubscriberInstancesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSubscriberInstancesRequest {
        this['limit'] = limit;
        return this;
    }
}