import { UpdateWhiteListRequestBody } from './UpdateWhiteListRequestBody';


export class UpdateInstanceEndpointPolicyRequest {
    private 'instance_id'?: string;
    public body?: UpdateWhiteListRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateInstanceEndpointPolicyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateWhiteListRequestBody): UpdateInstanceEndpointPolicyRequest {
        this['body'] = body;
        return this;
    }
}