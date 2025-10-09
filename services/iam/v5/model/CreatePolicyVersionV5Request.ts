import { CreatePolicyVersionReqBody } from './CreatePolicyVersionReqBody';


export class CreatePolicyVersionV5Request {
    private 'policy_id'?: string;
    public body?: CreatePolicyVersionReqBody;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withPolicyId(policyId: string): CreatePolicyVersionV5Request {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withBody(body: CreatePolicyVersionReqBody): CreatePolicyVersionV5Request {
        this['body'] = body;
        return this;
    }
}