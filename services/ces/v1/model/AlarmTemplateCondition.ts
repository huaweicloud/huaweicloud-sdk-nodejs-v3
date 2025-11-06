import { Condition } from './Condition';
import { Filter } from './Filter';


export class AlarmTemplateCondition {
    private 'comparison_operator'?: string;
    public count?: number;
    public filter?: Filter;
    public period?: AlarmTemplateConditionPeriodEnum | number;
    public unit?: string;
    public value?: number;
    private 'suppress_duration'?: AlarmTemplateConditionSuppressDurationEnum | number;
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
    public withSuppressDuration(suppressDuration: AlarmTemplateConditionSuppressDurationEnum | number): AlarmTemplateCondition {
        this['suppress_duration'] = suppressDuration;
        return this;
    }
    public set suppressDuration(suppressDuration: AlarmTemplateConditionSuppressDurationEnum | number  | undefined) {
        this['suppress_duration'] = suppressDuration;
    }
    public get suppressDuration(): AlarmTemplateConditionSuppressDurationEnum | number | undefined {
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
/**
    * @export
    * @enum {string}
    */
export enum AlarmTemplateConditionSuppressDurationEnum {
    NUMBER_0 = 0,
    NUMBER_300 = 300,
    NUMBER_600 = 600,
    NUMBER_900 = 900,
    NUMBER_1800 = 1800,
    NUMBER_3600 = 3600,
    NUMBER_10800 = 10800,
    NUMBER_21600 = 21600,
    NUMBER_43200 = 43200,
    NUMBER_86400 = 86400
}
