

export class ShowConsumerListOrDetailsRequest {
    private 'instance_id'?: string;
    public group?: string;
    public topic?: string;
    public limit?: number;
    public offset?: number;
    public constructor(instanceId?: string, group?: string) { 
        this['instance_id'] = instanceId;
        this['group'] = group;
    }
    public withInstanceId(instanceId: string): ShowConsumerListOrDetailsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGroup(group: string): ShowConsumerListOrDetailsRequest {
        this['group'] = group;
        return this;
    }
    public withTopic(topic: string): ShowConsumerListOrDetailsRequest {
        this['topic'] = topic;
        return this;
    }
    public withLimit(limit: number): ShowConsumerListOrDetailsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowConsumerListOrDetailsRequest {
        this['offset'] = offset;
        return this;
    }
}