

export class ShowTopicAccessPolicyRequest {
    private 'instance_id'?: string;
    private 'topic_name'?: string;
    public constructor(instanceId?: string, topicName?: string) { 
        this['instance_id'] = instanceId;
        this['topic_name'] = topicName;
    }
    public withInstanceId(instanceId: string): ShowTopicAccessPolicyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTopicName(topicName: string): ShowTopicAccessPolicyRequest {
        this['topic_name'] = topicName;
        return this;
    }
    public set topicName(topicName: string  | undefined) {
        this['topic_name'] = topicName;
    }
    public get topicName(): string | undefined {
        return this['topic_name'];
    }
}