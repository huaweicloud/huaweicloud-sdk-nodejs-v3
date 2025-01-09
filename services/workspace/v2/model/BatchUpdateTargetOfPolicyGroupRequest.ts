import { ModifyPolicyTargetReq } from './ModifyPolicyTargetReq';


export class BatchUpdateTargetOfPolicyGroupRequest {
    private 'policy_group_id'?: string;
    public body?: ModifyPolicyTargetReq;
    public constructor(policyGroupId?: string) { 
        this['policy_group_id'] = policyGroupId;
    }
    public withPolicyGroupId(policyGroupId: string): BatchUpdateTargetOfPolicyGroupRequest {
        this['policy_group_id'] = policyGroupId;
        return this;
    }
    public set policyGroupId(policyGroupId: string  | undefined) {
        this['policy_group_id'] = policyGroupId;
    }
    public get policyGroupId(): string | undefined {
        return this['policy_group_id'];
    }
    public withBody(body: ModifyPolicyTargetReq): BatchUpdateTargetOfPolicyGroupRequest {
        this['body'] = body;
        return this;
    }
}