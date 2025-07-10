import { Policies } from './Policies';
import { Target } from './Target';


export class PolicyGroup {
    private 'policy_group_id'?: string;
    private 'policy_group_name'?: string;
    public priority?: number;
    private 'update_time'?: string;
    public description?: string;
    public targets?: Array<Target>;
    public policies?: Policies;
    public constructor() { 
    }
    public withPolicyGroupId(policyGroupId: string): PolicyGroup {
        this['policy_group_id'] = policyGroupId;
        return this;
    }
    public set policyGroupId(policyGroupId: string  | undefined) {
        this['policy_group_id'] = policyGroupId;
    }
    public get policyGroupId(): string | undefined {
        return this['policy_group_id'];
    }
    public withPolicyGroupName(policyGroupName: string): PolicyGroup {
        this['policy_group_name'] = policyGroupName;
        return this;
    }
    public set policyGroupName(policyGroupName: string  | undefined) {
        this['policy_group_name'] = policyGroupName;
    }
    public get policyGroupName(): string | undefined {
        return this['policy_group_name'];
    }
    public withPriority(priority: number): PolicyGroup {
        this['priority'] = priority;
        return this;
    }
    public withUpdateTime(updateTime: string): PolicyGroup {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withDescription(description: string): PolicyGroup {
        this['description'] = description;
        return this;
    }
    public withTargets(targets: Array<Target>): PolicyGroup {
        this['targets'] = targets;
        return this;
    }
    public withPolicies(policies: Policies): PolicyGroup {
        this['policies'] = policies;
        return this;
    }
}