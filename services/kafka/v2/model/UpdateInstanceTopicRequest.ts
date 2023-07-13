import { UpdateInstanceTopicReq } from './UpdateInstanceTopicReq';


export class UpdateInstanceTopicRequest {
    private 'instance_id': string | undefined;
    public body?: UpdateInstanceTopicReq;
    public constructor(instanceId?: any) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateInstanceTopicRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withBody(body: UpdateInstanceTopicReq): UpdateInstanceTopicRequest {
        this['body'] = body;
        return this;
    }
}