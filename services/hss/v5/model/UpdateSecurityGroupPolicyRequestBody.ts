import { SecurityGroup } from './SecurityGroup';


export class UpdateSecurityGroupPolicyRequestBody {
    private 'policy_id'?: string;
    private 'policy_name'?: string;
    private 'security_groups'?: Array<SecurityGroup>;
    public constructor(policyId?: string, securityGroups?: Array<SecurityGroup>) { 
        this['policy_id'] = policyId;
        this['security_groups'] = securityGroups;
    }
    public withPolicyId(policyId: string): UpdateSecurityGroupPolicyRequestBody {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withPolicyName(policyName: string): UpdateSecurityGroupPolicyRequestBody {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withSecurityGroups(securityGroups: Array<SecurityGroup>): UpdateSecurityGroupPolicyRequestBody {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<SecurityGroup>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<SecurityGroup> | undefined {
        return this['security_groups'];
    }
}