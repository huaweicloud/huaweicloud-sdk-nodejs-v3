import { UpdatePolicyReqBody } from './UpdatePolicyReqBody';


export class UpdatePolicyV5Request {
    private 'policy_id'?: string;
    public body?: UpdatePolicyReqBody;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withPolicyId(policyId: string): UpdatePolicyV5Request {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withBody(body: UpdatePolicyReqBody): UpdatePolicyV5Request {
        this['body'] = body;
        return this;
    }
}