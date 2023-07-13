import { CreateInstanceTopicReq } from './CreateInstanceTopicReq';


export class CreateInstanceTopicRequest {
    private 'instance_id': string | undefined;
    public body?: CreateInstanceTopicReq;
    public constructor(instanceId?: any) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateInstanceTopicRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withBody(body: CreateInstanceTopicReq): CreateInstanceTopicRequest {
        this['body'] = body;
        return this;
    }
}