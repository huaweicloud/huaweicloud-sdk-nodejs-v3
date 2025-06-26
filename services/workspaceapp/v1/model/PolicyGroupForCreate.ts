import { Policies } from './Policies';
import { Target } from './Target';


export class PolicyGroupForCreate {
    private 'policy_group_name'?: string;
    public priority?: number;
    public description?: string;
    public targets?: Array<Target>;
    public policies?: Policies;
    public constructor(policyGroupName?: string) { 
        this['policy_group_name'] = policyGroupName;
    }
    public withPolicyGroupName(policyGroupName: string): PolicyGroupForCreate {
        this['policy_group_name'] = policyGroupName;
        return this;
    }
    public set policyGroupName(policyGroupName: string  | undefined) {
        this['policy_group_name'] = policyGroupName;
    }
    public get policyGroupName(): string | undefined {
        return this['policy_group_name'];
    }
    public withPriority(priority: number): PolicyGroupForCreate {
        this['priority'] = priority;
        return this;
    }
    public withDescription(description: string): PolicyGroupForCreate {
        this['description'] = description;
        return this;
    }
    public withTargets(targets: Array<Target>): PolicyGroupForCreate {
        this['targets'] = targets;
        return this;
    }
    public withPolicies(policies: Policies): PolicyGroupForCreate {
        this['policies'] = policies;
        return this;
    }
}