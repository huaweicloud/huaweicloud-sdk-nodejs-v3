

export class ShowKafkaTopicQuotaRequest {
    private 'instance_id'?: string;
    public type?: string;
    public limit?: string;
    public offset?: string;
    public keyword?: string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ShowKafkaTopicQuotaRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withType(type: string): ShowKafkaTopicQuotaRequest {
        this['type'] = type;
        return this;
    }
    public withLimit(limit: string): ShowKafkaTopicQuotaRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ShowKafkaTopicQuotaRequest {
        this['offset'] = offset;
        return this;
    }
    public withKeyword(keyword: string): ShowKafkaTopicQuotaRequest {
        this['keyword'] = keyword;
        return this;
    }
}