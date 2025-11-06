import { FilterResp } from './FilterResp';
import { PeriodResp } from './PeriodResp';
import { SuppressDurationResp } from './SuppressDurationResp';


export class ConditionResp {
    private 'comparison_operator'?: string;
    public count?: number;
    public filter?: FilterResp;
    public period?: PeriodResp;
    public unit?: string;
    public value?: number;
    private 'suppress_duration'?: SuppressDurationResp;
    public constructor() { 
    }
    public withComparisonOperator(comparisonOperator: string): ConditionResp {
        this['comparison_operator'] = comparisonOperator;
        return this;
    }
    public set comparisonOperator(comparisonOperator: string  | undefined) {
        this['comparison_operator'] = comparisonOperator;
    }
    public get comparisonOperator(): string | undefined {
        return this['comparison_operator'];
    }
    public withCount(count: number): ConditionResp {
        this['count'] = count;
        return this;
    }
    public withFilter(filter: FilterResp): ConditionResp {
        this['filter'] = filter;
        return this;
    }
    public withPeriod(period: PeriodResp): ConditionResp {
        this['period'] = period;
        return this;
    }
    public withUnit(unit: string): ConditionResp {
        this['unit'] = unit;
        return this;
    }
    public withValue(value: number): ConditionResp {
        this['value'] = value;
        return this;
    }
    public withSuppressDuration(suppressDuration: SuppressDurationResp): ConditionResp {
        this['suppress_duration'] = suppressDuration;
        return this;
    }
    public set suppressDuration(suppressDuration: SuppressDurationResp  | undefined) {
        this['suppress_duration'] = suppressDuration;
    }
    public get suppressDuration(): SuppressDurationResp | undefined {
        return this['suppress_duration'];
    }
}