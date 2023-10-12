

export class AlarmCondition {
    public period?: AlarmConditionPeriodEnum | number;
    public filter?: string;
    private 'comparison_operator'?: string;
    public value?: number;
    public unit?: string;
    public count?: number;
    private 'suppress_duration'?: AlarmConditionSuppressDurationEnum | number;
    public constructor(period?: number, filter?: string, comparisonOperator?: string, value?: number, count?: number) { 
        this['period'] = period;
        this['filter'] = filter;
        this['comparison_operator'] = comparisonOperator;
        this['value'] = value;
        this['count'] = count;
    }
    public withPeriod(period: AlarmConditionPeriodEnum | number): AlarmCondition {
        this['period'] = period;
        return this;
    }
    public withFilter(filter: string): AlarmCondition {
        this['filter'] = filter;
        return this;
    }
    public withComparisonOperator(comparisonOperator: string): AlarmCondition {
        this['comparison_operator'] = comparisonOperator;
        return this;
    }
    public set comparisonOperator(comparisonOperator: string  | undefined) {
        this['comparison_operator'] = comparisonOperator;
    }
    public get comparisonOperator(): string | undefined {
        return this['comparison_operator'];
    }
    public withValue(value: number): AlarmCondition {
        this['value'] = value;
        return this;
    }
    public withUnit(unit: string): AlarmCondition {
        this['unit'] = unit;
        return this;
    }
    public withCount(count: number): AlarmCondition {
        this['count'] = count;
        return this;
    }
    public withSuppressDuration(suppressDuration: AlarmConditionSuppressDurationEnum | number): AlarmCondition {
        this['suppress_duration'] = suppressDuration;
        return this;
    }
    public set suppressDuration(suppressDuration: AlarmConditionSuppressDurationEnum | number  | undefined) {
        this['suppress_duration'] = suppressDuration;
    }
    public get suppressDuration(): AlarmConditionSuppressDurationEnum | number | undefined {
        return this['suppress_duration'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AlarmConditionPeriodEnum {
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
export enum AlarmConditionSuppressDurationEnum {
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
