import { UpdateTopicReq } from './UpdateTopicReq';


export class UpdateTopicRequest {
    private 'instance_id': string | undefined;
    public topic: string;
    public body?: UpdateTopicReq;
    public constructor(instanceId?: any, topic?: any) { 
        this['instance_id'] = instanceId;
        this['topic'] = topic;
    }
    public withInstanceId(instanceId: string): UpdateTopicRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withTopic(topic: string): UpdateTopicRequest {
        this['topic'] = topic;
        return this;
    }
    public withBody(body: UpdateTopicReq): UpdateTopicRequest {
        this['body'] = body;
        return this;
    }
}