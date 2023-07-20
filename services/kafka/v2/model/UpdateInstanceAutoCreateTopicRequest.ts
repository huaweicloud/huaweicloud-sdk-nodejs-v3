import { UpdateInstanceAutoCreateTopicReq } from './UpdateInstanceAutoCreateTopicReq';


export class UpdateInstanceAutoCreateTopicRequest {
    private 'instance_id'?: string;
    public body?: UpdateInstanceAutoCreateTopicReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateInstanceAutoCreateTopicRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateInstanceAutoCreateTopicReq): UpdateInstanceAutoCreateTopicRequest {
        this['body'] = body;
        return this;
    }
}