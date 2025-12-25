import { FilterResp } from './FilterResp';
import { PeriodResp } from './PeriodResp';
import { SuppressDurationResp } from './SuppressDurationResp';


export class AlarmRuleConditionResp {
    private 'comparison_operator'?: string;
    public count?: number;
    public filter?: FilterResp;
    public period?: PeriodResp;
    public unit?: string;
    private 'selected_unit'?: string;
    public value?: number;
    private 'suppress_duration'?: SuppressDurationResp;
    public constructor() { 
    }
    public withComparisonOperator(comparisonOperator: string): AlarmRuleConditionResp {
        this['comparison_operator'] = comparisonOperator;
        return this;
    }
    public set comparisonOperator(comparisonOperator: string  | undefined) {
        this['comparison_operator'] = comparisonOperator;
    }
    public get comparisonOperator(): string | undefined {
        return this['comparison_operator'];
    }
    public withCount(count: number): AlarmRuleConditionResp {
        this['count'] = count;
        return this;
    }
    public withFilter(filter: FilterResp): AlarmRuleConditionResp {
        this['filter'] = filter;
        return this;
    }
    public withPeriod(period: PeriodResp): AlarmRuleConditionResp {
        this['period'] = period;
        return this;
    }
    public withUnit(unit: string): AlarmRuleConditionResp {
        this['unit'] = unit;
        return this;
    }
    public withSelectedUnit(selectedUnit: string): AlarmRuleConditionResp {
        this['selected_unit'] = selectedUnit;
        return this;
    }
    public set selectedUnit(selectedUnit: string  | undefined) {
        this['selected_unit'] = selectedUnit;
    }
    public get selectedUnit(): string | undefined {
        return this['selected_unit'];
    }
    public withValue(value: number): AlarmRuleConditionResp {
        this['value'] = value;
        return this;
    }
    public withSuppressDuration(suppressDuration: SuppressDurationResp): AlarmRuleConditionResp {
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