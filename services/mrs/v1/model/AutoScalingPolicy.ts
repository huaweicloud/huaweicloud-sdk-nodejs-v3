import { ResourcesPlan } from './ResourcesPlan';
import { Rule } from './Rule';
import { ScaleScript } from './ScaleScript';


export class AutoScalingPolicy {
    private 'auto_scaling_enable': boolean | undefined;
    private 'min_capacity': number | undefined;
    private 'max_capacity': number | undefined;
    private 'resources_plans'?: Array<ResourcesPlan> | undefined;
    public rules?: Array<Rule>;
    private 'exec_scripts'?: Array<ScaleScript> | undefined;
    public constructor(autoScalingEnable?: any, minCapacity?: any, maxCapacity?: any) { 
        this['auto_scaling_enable'] = autoScalingEnable;
        this['min_capacity'] = minCapacity;
        this['max_capacity'] = maxCapacity;
    }
    public withAutoScalingEnable(autoScalingEnable: boolean): AutoScalingPolicy {
        this['auto_scaling_enable'] = autoScalingEnable;
        return this;
    }
    public set autoScalingEnable(autoScalingEnable: boolean | undefined) {
        this['auto_scaling_enable'] = autoScalingEnable;
    }
    public get autoScalingEnable() {
        return this['auto_scaling_enable'];
    }
    public withMinCapacity(minCapacity: number): AutoScalingPolicy {
        this['min_capacity'] = minCapacity;
        return this;
    }
    public set minCapacity(minCapacity: number | undefined) {
        this['min_capacity'] = minCapacity;
    }
    public get minCapacity() {
        return this['min_capacity'];
    }
    public withMaxCapacity(maxCapacity: number): AutoScalingPolicy {
        this['max_capacity'] = maxCapacity;
        return this;
    }
    public set maxCapacity(maxCapacity: number | undefined) {
        this['max_capacity'] = maxCapacity;
    }
    public get maxCapacity() {
        return this['max_capacity'];
    }
    public withResourcesPlans(resourcesPlans: Array<ResourcesPlan>): AutoScalingPolicy {
        this['resources_plans'] = resourcesPlans;
        return this;
    }
    public set resourcesPlans(resourcesPlans: Array<ResourcesPlan> | undefined) {
        this['resources_plans'] = resourcesPlans;
    }
    public get resourcesPlans() {
        return this['resources_plans'];
    }
    public withRules(rules: Array<Rule>): AutoScalingPolicy {
        this['rules'] = rules;
        return this;
    }
    public withExecScripts(execScripts: Array<ScaleScript>): AutoScalingPolicy {
        this['exec_scripts'] = execScripts;
        return this;
    }
    public set execScripts(execScripts: Array<ScaleScript> | undefined) {
        this['exec_scripts'] = execScripts;
    }
    public get execScripts() {
        return this['exec_scripts'];
    }
}