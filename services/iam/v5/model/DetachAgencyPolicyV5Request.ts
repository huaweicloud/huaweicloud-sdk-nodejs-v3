import { DetachAgencyPolicyReqBody } from './DetachAgencyPolicyReqBody';


export class DetachAgencyPolicyV5Request {
    private 'policy_id'?: string;
    public body?: DetachAgencyPolicyReqBody;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withPolicyId(policyId: string): DetachAgencyPolicyV5Request {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withBody(body: DetachAgencyPolicyReqBody): DetachAgencyPolicyV5Request {
        this['body'] = body;
        return this;
    }
}