import { IpBindingV3Body } from './IpBindingV3Body';


export class AssociateIpToPolicyAndPackageRequest {
    private 'policy_id'?: string;
    public body?: IpBindingV3Body;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withPolicyId(policyId: string): AssociateIpToPolicyAndPackageRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withBody(body: IpBindingV3Body): AssociateIpToPolicyAndPackageRequest {
        this['body'] = body;
        return this;
    }
}