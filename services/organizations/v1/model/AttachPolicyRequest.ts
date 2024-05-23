import { PolicyTachReqBody } from './PolicyTachReqBody';


export class AttachPolicyRequest {
    private 'policy_id'?: string;
    public body?: PolicyTachReqBody;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withPolicyId(policyId: string): AttachPolicyRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withBody(body: PolicyTachReqBody): AttachPolicyRequest {
        this['body'] = body;
        return this;
    }
}