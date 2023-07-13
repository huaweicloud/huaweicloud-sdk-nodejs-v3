

export class ShowInstanceTopicDetailRequest {
    private 'instance_id': string | undefined;
    public topic: string;
    public constructor(instanceId?: any, topic?: any) { 
        this['instance_id'] = instanceId;
        this['topic'] = topic;
    }
    public withInstanceId(instanceId: string): ShowInstanceTopicDetailRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withTopic(topic: string): ShowInstanceTopicDetailRequest {
        this['topic'] = topic;
        return this;
    }
}