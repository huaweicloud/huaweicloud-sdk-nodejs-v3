import { ResourcesPlan } from './ResourcesPlan';
import { Rule } from './Rule';
import { Tag } from './Tag';


export class AutoScalingPolicyInfo {
    private 'auto_scaling_enable'?: boolean;
    private 'min_capacity'?: number;
    private 'max_capacity'?: number;
    private 'resources_plans'?: Array<ResourcesPlan>;
    public rules?: Array<Rule>;
    public tags?: Array<Tag>;
    public constructor(autoScalingEnable?: boolean, minCapacity?: number, maxCapacity?: number) { 
        this['auto_scaling_enable'] = autoScalingEnable;
        this['min_capacity'] = minCapacity;
        this['max_capacity'] = maxCapacity;
    }
    public withAutoScalingEnable(autoScalingEnable: boolean): AutoScalingPolicyInfo {
        this['auto_scaling_enable'] = autoScalingEnable;
        return this;
    }
    public set autoScalingEnable(autoScalingEnable: boolean  | undefined) {
        this['auto_scaling_enable'] = autoScalingEnable;
    }
    public get autoScalingEnable(): boolean | undefined {
        return this['auto_scaling_enable'];
    }
    public withMinCapacity(minCapacity: number): AutoScalingPolicyInfo {
        this['min_capacity'] = minCapacity;
        return this;
    }
    public set minCapacity(minCapacity: number  | undefined) {
        this['min_capacity'] = minCapacity;
    }
    public get minCapacity(): number | undefined {
        return this['min_capacity'];
    }
    public withMaxCapacity(maxCapacity: number): AutoScalingPolicyInfo {
        this['max_capacity'] = maxCapacity;
        return this;
    }
    public set maxCapacity(maxCapacity: number  | undefined) {
        this['max_capacity'] = maxCapacity;
    }
    public get maxCapacity(): number | undefined {
        return this['max_capacity'];
    }
    public withResourcesPlans(resourcesPlans: Array<ResourcesPlan>): AutoScalingPolicyInfo {
        this['resources_plans'] = resourcesPlans;
        return this;
    }
    public set resourcesPlans(resourcesPlans: Array<ResourcesPlan>  | undefined) {
        this['resources_plans'] = resourcesPlans;
    }
    public get resourcesPlans(): Array<ResourcesPlan> | undefined {
        return this['resources_plans'];
    }
    public withRules(rules: Array<Rule>): AutoScalingPolicyInfo {
        this['rules'] = rules;
        return this;
    }
    public withTags(tags: Array<Tag>): AutoScalingPolicyInfo {
        this['tags'] = tags;
        return this;
    }
}