

export class AlarmHistoryItemV2Condition {
    public period?: AlarmHistoryItemV2ConditionPeriodEnum | number;
    public filter?: string;
    private 'comparison_operator'?: string;
    public value?: number;
    public unit?: string;
    public count?: number;
    private 'suppress_duration'?: AlarmHistoryItemV2ConditionSuppressDurationEnum | number;
    public constructor() { 
    }
    public withPeriod(period: AlarmHistoryItemV2ConditionPeriodEnum | number): AlarmHistoryItemV2Condition {
        this['period'] = period;
        return this;
    }
    public withFilter(filter: string): AlarmHistoryItemV2Condition {
        this['filter'] = filter;
        return this;
    }
    public withComparisonOperator(comparisonOperator: string): AlarmHistoryItemV2Condition {
        this['comparison_operator'] = comparisonOperator;
        return this;
    }
    public set comparisonOperator(comparisonOperator: string  | undefined) {
        this['comparison_operator'] = comparisonOperator;
    }
    public get comparisonOperator(): string | undefined {
        return this['comparison_operator'];
    }
    public withValue(value: number): AlarmHistoryItemV2Condition {
        this['value'] = value;
        return this;
    }
    public withUnit(unit: string): AlarmHistoryItemV2Condition {
        this['unit'] = unit;
        return this;
    }
    public withCount(count: number): AlarmHistoryItemV2Condition {
        this['count'] = count;
        return this;
    }
    public withSuppressDuration(suppressDuration: AlarmHistoryItemV2ConditionSuppressDurationEnum | number): AlarmHistoryItemV2Condition {
        this['suppress_duration'] = suppressDuration;
        return this;
    }
    public set suppressDuration(suppressDuration: AlarmHistoryItemV2ConditionSuppressDurationEnum | number  | undefined) {
        this['suppress_duration'] = suppressDuration;
    }
    public get suppressDuration(): AlarmHistoryItemV2ConditionSuppressDurationEnum | number | undefined {
        return this['suppress_duration'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AlarmHistoryItemV2ConditionPeriodEnum {
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
export enum AlarmHistoryItemV2ConditionSuppressDurationEnum {
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
