import { Policies } from './Policies';
import { Target } from './Target';


export class PolicyGroupForUpdate {
    private 'policy_group_name'?: string;
    public description?: string;
    public priority?: number;
    public targets?: Array<Target>;
    public policies?: Policies;
    public constructor() { 
    }
    public withPolicyGroupName(policyGroupName: string): PolicyGroupForUpdate {
        this['policy_group_name'] = policyGroupName;
        return this;
    }
    public set policyGroupName(policyGroupName: string  | undefined) {
        this['policy_group_name'] = policyGroupName;
    }
    public get policyGroupName(): string | undefined {
        return this['policy_group_name'];
    }
    public withDescription(description: string): PolicyGroupForUpdate {
        this['description'] = description;
        return this;
    }
    public withPriority(priority: number): PolicyGroupForUpdate {
        this['priority'] = priority;
        return this;
    }
    public withTargets(targets: Array<Target>): PolicyGroupForUpdate {
        this['targets'] = targets;
        return this;
    }
    public withPolicies(policies: Policies): PolicyGroupForUpdate {
        this['policies'] = policies;
        return this;
    }
}