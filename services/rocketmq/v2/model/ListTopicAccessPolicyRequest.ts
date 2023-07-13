

export class ListTopicAccessPolicyRequest {
    private 'instance_id': string | undefined;
    public topic: string;
    public offset?: string;
    public limit?: string;
    public constructor(instanceId?: any, topic?: any) { 
        this['instance_id'] = instanceId;
        this['topic'] = topic;
    }
    public withInstanceId(instanceId: string): ListTopicAccessPolicyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withTopic(topic: string): ListTopicAccessPolicyRequest {
        this['topic'] = topic;
        return this;
    }
    public withOffset(offset: string): ListTopicAccessPolicyRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ListTopicAccessPolicyRequest {
        this['limit'] = limit;
        return this;
    }
}