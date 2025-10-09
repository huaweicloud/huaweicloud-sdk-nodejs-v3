import { DetachGroupPolicyReqBody } from './DetachGroupPolicyReqBody';


export class DetachGroupPolicyV5Request {
    private 'policy_id'?: string;
    public body?: DetachGroupPolicyReqBody;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withPolicyId(policyId: string): DetachGroupPolicyV5Request {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withBody(body: DetachGroupPolicyReqBody): DetachGroupPolicyV5Request {
        this['body'] = body;
        return this;
    }
}