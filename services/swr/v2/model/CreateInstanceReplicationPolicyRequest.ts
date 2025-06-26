import { CreateReplicationPolicyRequestBody } from './CreateReplicationPolicyRequestBody';


export class CreateInstanceReplicationPolicyRequest {
    private 'instance_id'?: string;
    public body?: CreateReplicationPolicyRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateInstanceReplicationPolicyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateReplicationPolicyRequestBody): CreateInstanceReplicationPolicyRequest {
        this['body'] = body;
        return this;
    }
}