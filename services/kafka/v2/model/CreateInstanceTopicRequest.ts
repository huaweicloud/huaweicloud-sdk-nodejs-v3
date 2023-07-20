import { CreateInstanceTopicReq } from './CreateInstanceTopicReq';


export class CreateInstanceTopicRequest {
    private 'instance_id'?: string;
    public body?: CreateInstanceTopicReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateInstanceTopicRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateInstanceTopicReq): CreateInstanceTopicRequest {
        this['body'] = body;
        return this;
    }
}