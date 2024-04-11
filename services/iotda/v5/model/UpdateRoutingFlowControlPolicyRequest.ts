import { UpdateFlowControlPolicy } from './UpdateFlowControlPolicy';


export class UpdateRoutingFlowControlPolicyRequest {
    private 'Instance-Id'?: string;
    private 'policy_id'?: string;
    public body?: UpdateFlowControlPolicy;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withInstanceId(instanceId: string): UpdateRoutingFlowControlPolicyRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withPolicyId(policyId: string): UpdateRoutingFlowControlPolicyRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withBody(body: UpdateFlowControlPolicy): UpdateRoutingFlowControlPolicyRequest {
        this['body'] = body;
        return this;
    }
}