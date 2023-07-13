

export class ShowTopicAccessPolicyRequest {
    private 'instance_id': string | undefined;
    private 'topic_name': string | undefined;
    public constructor(instanceId?: any, topicName?: any) { 
        this['instance_id'] = instanceId;
        this['topic_name'] = topicName;
    }
    public withInstanceId(instanceId: string): ShowTopicAccessPolicyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withTopicName(topicName: string): ShowTopicAccessPolicyRequest {
        this['topic_name'] = topicName;
        return this;
    }
    public set topicName(topicName: string | undefined) {
        this['topic_name'] = topicName;
    }
    public get topicName() {
        return this['topic_name'];
    }
}