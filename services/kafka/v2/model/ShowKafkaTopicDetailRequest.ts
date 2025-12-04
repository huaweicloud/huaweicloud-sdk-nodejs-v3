

export class ShowKafkaTopicDetailRequest {
    private 'instance_id'?: string;
    public topic?: string;
    public constructor(instanceId?: string, topic?: string) { 
        this['instance_id'] = instanceId;
        this['topic'] = topic;
    }
    public withInstanceId(instanceId: string): ShowKafkaTopicDetailRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withTopic(topic: string): ShowKafkaTopicDetailRequest {
        this['topic'] = topic;
        return this;
    }
}