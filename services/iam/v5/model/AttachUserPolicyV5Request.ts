import { AttachUserPolicyReqBody } from './AttachUserPolicyReqBody';


export class AttachUserPolicyV5Request {
    private 'policy_id'?: string;
    public body?: AttachUserPolicyReqBody;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withPolicyId(policyId: string): AttachUserPolicyV5Request {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withBody(body: AttachUserPolicyReqBody): AttachUserPolicyV5Request {
        this['body'] = body;
        return this;
    }
}