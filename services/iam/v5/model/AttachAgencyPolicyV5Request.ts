import { AttachAgencyPolicyReqBody } from './AttachAgencyPolicyReqBody';


export class AttachAgencyPolicyV5Request {
    private 'policy_id'?: string;
    public body?: AttachAgencyPolicyReqBody;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withPolicyId(policyId: string): AttachAgencyPolicyV5Request {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withBody(body: AttachAgencyPolicyReqBody): AttachAgencyPolicyV5Request {
        this['body'] = body;
        return this;
    }
}