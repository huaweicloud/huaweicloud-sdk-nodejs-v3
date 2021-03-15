import { RuleCondition } from './RuleCondition';
import { TimeRange } from './TimeRange';


export class ConditionGroup {
    public conditions?: Array<RuleCondition>;
    public logic?: string;
    private 'time_range'?: TimeRange | undefined;
    public constructor() { 
    }
    public withConditions(conditions: Array<RuleCondition>): ConditionGroup {
        this['conditions'] = conditions;
        return this;
    }
    public withLogic(logic: string): ConditionGroup {
        this['logic'] = logic;
        return this;
    }
    public withTimeRange(timeRange: TimeRange): ConditionGroup {
        this['time_range'] = timeRange;
        return this;
    }
    public set timeRange(timeRange: TimeRange | undefined) {
        this['time_range'] = timeRange;
    }
    public get timeRange() {
        return this['time_range'];
    }
}