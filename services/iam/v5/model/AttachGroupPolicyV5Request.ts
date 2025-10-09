import { AttachGroupPolicyReqBody } from './AttachGroupPolicyReqBody';


export class AttachGroupPolicyV5Request {
    private 'policy_id'?: string;
    public body?: AttachGroupPolicyReqBody;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withPolicyId(policyId: string): AttachGroupPolicyV5Request {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withBody(body: AttachGroupPolicyReqBody): AttachGroupPolicyV5Request {
        this['body'] = body;
        return this;
    }
}