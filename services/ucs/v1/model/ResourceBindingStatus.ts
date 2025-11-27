import { ConditionStatus } from './ConditionStatus';


export class ResourceBindingStatus {
    public schedulerObservedGeneration?: number;
    public conditions?: Array<ConditionStatus>;
    public constructor() { 
    }
    public withSchedulerObservedGeneration(schedulerObservedGeneration: number): ResourceBindingStatus {
        this['schedulerObservedGeneration'] = schedulerObservedGeneration;
        return this;
    }
    public withConditions(conditions: Array<ConditionStatus>): ResourceBindingStatus {
        this['conditions'] = conditions;
        return this;
    }
}