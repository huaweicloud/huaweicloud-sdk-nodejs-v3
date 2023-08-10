import { Condition } from './Condition';


export class AlarmTemplateCondition {
    private 'comparison_operator'?: string;
    public count?: number;
    public filter?: string;
    public period?: number;
    public unit?: string;
    public value?: number;
    private 'suppress_duration'?: number;
    public constructor(comparisonOperator?: string, count?: number, filter?: string, period?: number, value?: number) { 
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
    public withFilter(filter: string): AlarmTemplateCondition {
        this['filter'] = filter;
        return this;
    }
    public withPeriod(period: number): AlarmTemplateCondition {
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
    public withSuppressDuration(suppressDuration: number): AlarmTemplateCondition {
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