import { ResetReplicaReq } from './ResetReplicaReq';


export class UpdateTopicReplicaRequest {
    private 'instance_id': string | undefined;
    public topic: string;
    public body?: ResetReplicaReq;
    public constructor(instanceId?: any, topic?: any) { 
        this['instance_id'] = instanceId;
        this['topic'] = topic;
    }
    public withInstanceId(instanceId: string): UpdateTopicReplicaRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withTopic(topic: string): UpdateTopicReplicaRequest {
        this['topic'] = topic;
        return this;
    }
    public withBody(body: ResetReplicaReq): UpdateTopicReplicaRequest {
        this['body'] = body;
        return this;
    }
}