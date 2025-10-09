import { AccessPolicy } from './AccessPolicy';


export class UpdateAccessPolicyRequest {
    private 'policy_id'?: string;
    public body?: AccessPolicy;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withPolicyId(policyId: string): UpdateAccessPolicyRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withBody(body: AccessPolicy): UpdateAccessPolicyRequest {
        this['body'] = body;
        return this;
    }
}