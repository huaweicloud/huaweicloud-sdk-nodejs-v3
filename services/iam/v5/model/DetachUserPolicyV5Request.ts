import { DetachUserPolicyReqBody } from './DetachUserPolicyReqBody';


export class DetachUserPolicyV5Request {
    private 'policy_id'?: string;
    public body?: DetachUserPolicyReqBody;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withPolicyId(policyId: string): DetachUserPolicyV5Request {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withBody(body: DetachUserPolicyReqBody): DetachUserPolicyV5Request {
        this['body'] = body;
        return this;
    }
}