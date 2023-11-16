import { IpBindingBody } from './IpBindingBody';


export class AssociateIpToPolicyRequest {
    private 'policy_id'?: string;
    public body?: IpBindingBody;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withPolicyId(policyId: string): AssociateIpToPolicyRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withBody(body: IpBindingBody): AssociateIpToPolicyRequest {
        this['body'] = body;
        return this;
    }
}