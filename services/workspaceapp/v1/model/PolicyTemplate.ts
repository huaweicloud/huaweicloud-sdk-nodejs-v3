import { Policies } from './Policies';


export class PolicyTemplate {
    private 'policy_group_name'?: string;
    public description?: string;
    public policies?: Policies;
    public constructor(policyGroupName?: string, policies?: Policies) { 
        this['policy_group_name'] = policyGroupName;
        this['policies'] = policies;
    }
    public withPolicyGroupName(policyGroupName: string): PolicyTemplate {
        this['policy_group_name'] = policyGroupName;
        return this;
    }
    public set policyGroupName(policyGroupName: string  | undefined) {
        this['policy_group_name'] = policyGroupName;
    }
    public get policyGroupName(): string | undefined {
        return this['policy_group_name'];
    }
    public withDescription(description: string): PolicyTemplate {
        this['description'] = description;
        return this;
    }
    public withPolicies(policies: Policies): PolicyTemplate {
        this['policies'] = policies;
        return this;
    }
}