import { UpdateTopicAccessPolicyReq } from './UpdateTopicAccessPolicyReq';


export class UpdateTopicAccessPolicyRequest {
    private 'instance_id'?: string;
    public body?: UpdateTopicAccessPolicyReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateTopicAccessPolicyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateTopicAccessPolicyReq): UpdateTopicAccessPolicyRequest {
        this['body'] = body;
        return this;
    }
}