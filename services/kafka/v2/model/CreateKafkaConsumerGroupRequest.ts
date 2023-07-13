import { CreateGroupReq } from './CreateGroupReq';


export class CreateKafkaConsumerGroupRequest {
    private 'instance_id': string | undefined;
    public body?: CreateGroupReq;
    public constructor(instanceId?: any) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateKafkaConsumerGroupRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withBody(body: CreateGroupReq): CreateKafkaConsumerGroupRequest {
        this['body'] = body;
        return this;
    }
}