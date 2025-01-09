import { ModifyPolicyRequest } from './ModifyPolicyRequest';


export class UpdatePoliciesOfPolicyGroupRequest {
    private 'policy_group_id'?: string;
    public body?: ModifyPolicyRequest;
    public constructor(policyGroupId?: string) { 
        this['policy_group_id'] = policyGroupId;
    }
    public withPolicyGroupId(policyGroupId: string): UpdatePoliciesOfPolicyGroupRequest {
        this['policy_group_id'] = policyGroupId;
        return this;
    }
    public set policyGroupId(policyGroupId: string  | undefined) {
        this['policy_group_id'] = policyGroupId;
    }
    public get policyGroupId(): string | undefined {
        return this['policy_group_id'];
    }
    public withBody(body: ModifyPolicyRequest): UpdatePoliciesOfPolicyGroupRequest {
        this['body'] = body;
        return this;
    }
}