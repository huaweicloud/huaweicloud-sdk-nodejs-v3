import { Policies } from './Policies';
import { Target } from './Target';


export class PolicyGroupForCreate {
    private 'policy_group_id'?: string;
    private 'policy_group_name'?: string;
    public priority?: number;
    public description?: string;
    private 'update_time'?: string;
    public targets?: Array<Target>;
    public policies?: Policies;
    public constructor() { 
    }
    public withPolicyGroupId(policyGroupId: string): PolicyGroupForCreate {
        this['policy_group_id'] = policyGroupId;
        return this;
    }
    public set policyGroupId(policyGroupId: string  | undefined) {
        this['policy_group_id'] = policyGroupId;
    }
    public get policyGroupId(): string | undefined {
        return this['policy_group_id'];
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
    public withUpdateTime(updateTime: string): PolicyGroupForCreate {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
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