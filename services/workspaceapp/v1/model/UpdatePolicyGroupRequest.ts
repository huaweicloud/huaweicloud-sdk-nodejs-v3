import { UpdatePolicyGroupReq } from './UpdatePolicyGroupReq';


export class UpdatePolicyGroupRequest {
    private 'policy_group_id'?: string;
    public body?: UpdatePolicyGroupReq;
    public constructor(policyGroupId?: string) { 
        this['policy_group_id'] = policyGroupId;
    }
    public withPolicyGroupId(policyGroupId: string): UpdatePolicyGroupRequest {
        this['policy_group_id'] = policyGroupId;
        return this;
    }
    public set policyGroupId(policyGroupId: string  | undefined) {
        this['policy_group_id'] = policyGroupId;
    }
    public get policyGroupId(): string | undefined {
        return this['policy_group_id'];
    }
    public withBody(body: UpdatePolicyGroupReq): UpdatePolicyGroupRequest {
        this['body'] = body;
        return this;
    }
}