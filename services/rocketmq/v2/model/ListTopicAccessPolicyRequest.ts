

export class ListTopicAccessPolicyRequest {
    private 'instance_id'?: string;
    public topic?: string;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string, topic?: string) { 
        this['instance_id'] = instanceId;
        this['topic'] = topic;
    }
    public withInstanceId(instanceId: string): ListTopicAccessPolicyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTopic(topic: string): ListTopicAccessPolicyRequest {
        this['topic'] = topic;
        return this;
    }
    public withOffset(offset: number): ListTopicAccessPolicyRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListTopicAccessPolicyRequest {
        this['limit'] = limit;
        return this;
    }
}