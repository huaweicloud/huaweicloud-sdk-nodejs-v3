

export class AlarmCondition {
    public period?: number;
    public filter?: string;
    private 'comparison_operator'?: string;
    public value?: number;
    public unit?: string;
    public count?: number;
    private 'suppress_duration'?: number;
    public constructor() { 
    }
    public withPeriod(period: number): AlarmCondition {
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
    public withSuppressDuration(suppressDuration: number): AlarmCondition {
        this['suppress_duration'] = suppressDuration;
        return this;
    }
    public set suppressDuration(suppressDuration: number  | undefined) {
        this['suppress_duration'] = suppressDuration;
    }
    public get suppressDuration(): number | undefined {
        return this['suppress_duration'];
    }
}