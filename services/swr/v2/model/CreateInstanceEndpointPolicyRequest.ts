import { CreateEndpointPolicyRequestBody } from './CreateEndpointPolicyRequestBody';


export class CreateInstanceEndpointPolicyRequest {
    private 'instance_id'?: string;
    public body?: CreateEndpointPolicyRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateInstanceEndpointPolicyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: CreateEndpointPolicyRequestBody): CreateInstanceEndpointPolicyRequest {
        this['body'] = body;
        return this;
    }
}