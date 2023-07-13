import { CreatePartitionReq } from './CreatePartitionReq';


export class CreatePartitionRequest {
    private 'instance_id': string | undefined;
    public topic: string;
    public body?: CreatePartitionReq;
    public constructor(instanceId?: any, topic?: any) { 
        this['instance_id'] = instanceId;
        this['topic'] = topic;
    }
    public withInstanceId(instanceId: string): CreatePartitionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withTopic(topic: string): CreatePartitionRequest {
        this['topic'] = topic;
        return this;
    }
    public withBody(body: CreatePartitionReq): CreatePartitionRequest {
        this['body'] = body;
        return this;
    }
}