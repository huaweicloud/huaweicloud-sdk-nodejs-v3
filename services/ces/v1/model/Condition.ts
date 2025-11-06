import { Filter } from './Filter';


export class Condition {
    private 'comparison_operator'?: string;
    public count?: number;
    public filter?: Filter;
    public period?: ConditionPeriodEnum | number;
    public unit?: string;
    public value?: number;
    private 'suppress_duration'?: ConditionSuppressDurationEnum | number;
    public constructor(comparisonOperator?: string, count?: number, filter?: Filter, period?: number, value?: number) { 
        this['comparison_operator'] = comparisonOperator;
        this['count'] = count;
        this['filter'] = filter;
        this['period'] = period;
        this['value'] = value;
    }
    public withComparisonOperator(comparisonOperator: string): Condition {
        this['comparison_operator'] = comparisonOperator;
        return this;
    }
    public set comparisonOperator(comparisonOperator: string  | undefined) {
        this['comparison_operator'] = comparisonOperator;
    }
    public get comparisonOperator(): string | undefined {
        return this['comparison_operator'];
    }
    public withCount(count: number): Condition {
        this['count'] = count;
        return this;
    }
    public withFilter(filter: Filter): Condition {
        this['filter'] = filter;
        return this;
    }
    public withPeriod(period: ConditionPeriodEnum | number): Condition {
        this['period'] = period;
        return this;
    }
    public withUnit(unit: string): Condition {
        this['unit'] = unit;
        return this;
    }
    public withValue(value: number): Condition {
        this['value'] = value;
        return this;
    }
    public withSuppressDuration(suppressDuration: ConditionSuppressDurationEnum | number): Condition {
        this['suppress_duration'] = suppressDuration;
        return this;
    }
    public set suppressDuration(suppressDuration: ConditionSuppressDurationEnum | number  | undefined) {
        this['suppress_duration'] = suppressDuration;
    }
    public get suppressDuration(): ConditionSuppressDurationEnum | number | undefined {
        return this['suppress_duration'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConditionPeriodEnum {
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
export enum ConditionSuppressDurationEnum {
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
