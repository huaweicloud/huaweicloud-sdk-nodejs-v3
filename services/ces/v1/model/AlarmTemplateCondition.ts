import { Condition } from './Condition';
import { Filter } from './Filter';
import { SuppressDuration } from './SuppressDuration';


export class AlarmTemplateCondition {
    private 'comparison_operator'?: string;
    public count?: number;
    public filter?: Filter;
    public period?: AlarmTemplateConditionPeriodEnum | number;
    public unit?: string;
    public value?: number;
    private 'suppress_duration'?: SuppressDuration;
    public constructor(comparisonOperator?: string, count?: number, filter?: Filter, period?: number, value?: number) { 
        this['comparison_operator'] = comparisonOperator;
        this['count'] = count;
        this['filter'] = filter;
        this['period'] = period;
        this['value'] = value;
    }
    public withComparisonOperator(comparisonOperator: string): AlarmTemplateCondition {
        this['comparison_operator'] = comparisonOperator;
        return this;
    }
    public set comparisonOperator(comparisonOperator: string  | undefined) {
        this['comparison_operator'] = comparisonOperator;
    }
    public get comparisonOperator(): string | undefined {
        return this['comparison_operator'];
    }
    public withCount(count: number): AlarmTemplateCondition {
        this['count'] = count;
        return this;
    }
    public withFilter(filter: Filter): AlarmTemplateCondition {
        this['filter'] = filter;
        return this;
    }
    public withPeriod(period: AlarmTemplateConditionPeriodEnum | number): AlarmTemplateCondition {
        this['period'] = period;
        return this;
    }
    public withUnit(unit: string): AlarmTemplateCondition {
        this['unit'] = unit;
        return this;
    }
    public withValue(value: number): AlarmTemplateCondition {
        this['value'] = value;
        return this;
    }
    public withSuppressDuration(suppressDuration: SuppressDuration): AlarmTemplateCondition {
        this['suppress_duration'] = suppressDuration;
        return this;
    }
    public set suppressDuration(suppressDuration: SuppressDuration  | undefined) {
        this['suppress_duration'] = suppressDuration;
    }
    public get suppressDuration(): SuppressDuration | undefined {
        return this['suppress_duration'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AlarmTemplateConditionPeriodEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_300 = 300,
    NUMBER_1200 = 1200,
    NUMBER_3600 = 3600,
    NUMBER_14400 = 14400,
    NUMBER_86400 = 86400
}
