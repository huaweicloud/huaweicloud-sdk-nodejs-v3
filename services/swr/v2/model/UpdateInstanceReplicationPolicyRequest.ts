import { UpdateReplicationPolicyRequestBody } from './UpdateReplicationPolicyRequestBody';


export class UpdateInstanceReplicationPolicyRequest {
    private 'instance_id'?: string;
    private 'policy_id'?: number;
    public body?: UpdateReplicationPolicyRequestBody;
    public constructor(instanceId?: string, policyId?: number) { 
        this['instance_id'] = instanceId;
        this['policy_id'] = policyId;
    }
    public withInstanceId(instanceId: string): UpdateInstanceReplicationPolicyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withPolicyId(policyId: number): UpdateInstanceReplicationPolicyRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: number  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): number | undefined {
        return this['policy_id'];
    }
    public withBody(body: UpdateReplicationPolicyRequestBody): UpdateInstanceReplicationPolicyRequest {
        this['body'] = body;
        return this;
    }
}