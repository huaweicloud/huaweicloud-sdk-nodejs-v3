import { PolicyUpdateReq } from './PolicyUpdateReq';


export class UpdatePolicyRequest {
    private 'policy_id'?: string;
    public body?: PolicyUpdateReq;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withPolicyId(policyId: string): UpdatePolicyRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withBody(body: PolicyUpdateReq): UpdatePolicyRequest {
        this['body'] = body;
        return this;
    }
}