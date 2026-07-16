import { AffinityRule } from './AffinityRule';


export class AffinityType {
    private 'required_during_scheduling_ignored_during_execution'?: Array<AffinityRule>;
    private 'preferred_during_scheduling_ignored_during_execution'?: Array<AffinityRule>;
    public constructor() { 
    }
    public withRequiredDuringSchedulingIgnoredDuringExecution(requiredDuringSchedulingIgnoredDuringExecution: Array<AffinityRule>): AffinityType {
        this['required_during_scheduling_ignored_during_execution'] = requiredDuringSchedulingIgnoredDuringExecution;
        return this;
    }
    public set requiredDuringSchedulingIgnoredDuringExecution(requiredDuringSchedulingIgnoredDuringExecution: Array<AffinityRule>  | undefined) {
        this['required_during_scheduling_ignored_during_execution'] = requiredDuringSchedulingIgnoredDuringExecution;
    }
    public get requiredDuringSchedulingIgnoredDuringExecution(): Array<AffinityRule> | undefined {
        return this['required_during_scheduling_ignored_during_execution'];
    }
    public withPreferredDuringSchedulingIgnoredDuringExecution(preferredDuringSchedulingIgnoredDuringExecution: Array<AffinityRule>): AffinityType {
        this['preferred_during_scheduling_ignored_during_execution'] = preferredDuringSchedulingIgnoredDuringExecution;
        return this;
    }
    public set preferredDuringSchedulingIgnoredDuringExecution(preferredDuringSchedulingIgnoredDuringExecution: Array<AffinityRule>  | undefined) {
        this['preferred_during_scheduling_ignored_during_execution'] = preferredDuringSchedulingIgnoredDuringExecution;
    }
    public get preferredDuringSchedulingIgnoredDuringExecution(): Array<AffinityRule> | undefined {
        return this['preferred_during_scheduling_ignored_during_execution'];
    }
}