import { CreateGroupReq } from './CreateGroupReq';


export class CreateKafkaConsumerGroupRequest {
    private 'instance_id'?: string;
    public body?: CreateGroupReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateKafkaConsumerGroupRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateGroupReq): CreateKafkaConsumerGroupRequest {
        this['body'] = body;
        return this;
    }
}