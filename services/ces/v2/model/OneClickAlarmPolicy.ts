import { HierarchicalValue } from './HierarchicalValue';
import { Period } from './Period';
import { SuppressDuration } from './SuppressDuration';


export class OneClickAlarmPolicy {
    private 'alarm_policy_id'?: string;
    private 'metric_name'?: string;
    public period?: Period;
    public filter?: string;
    private 'comparison_operator'?: string;
    public value?: number;
    private 'hierarchical_value'?: HierarchicalValue;
    public unit?: string;
    public count?: number;
    private 'suppress_duration'?: SuppressDuration;
    public level?: number;
    public enabled?: boolean;
    private 'selected_unit'?: string;
    public constructor(alarmPolicyId?: string, metricName?: string, period?: Period, filter?: string, comparisonOperator?: string, value?: number, count?: number, enabled?: boolean) { 
        this['alarm_policy_id'] = alarmPolicyId;
        this['metric_name'] = metricName;
        this['period'] = period;
        this['filter'] = filter;
        this['comparison_operator'] = comparisonOperator;
        this['value'] = value;
        this['count'] = count;
        this['enabled'] = enabled;
    }
    public withAlarmPolicyId(alarmPolicyId: string): OneClickAlarmPolicy {
        this['alarm_policy_id'] = alarmPolicyId;
        return this;
    }
    public set alarmPolicyId(alarmPolicyId: string  | undefined) {
        this['alarm_policy_id'] = alarmPolicyId;
    }
    public get alarmPolicyId(): string | undefined {
        return this['alarm_policy_id'];
    }
    public withMetricName(metricName: string): OneClickAlarmPolicy {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withPeriod(period: Period): OneClickAlarmPolicy {
        this['period'] = period;
        return this;
    }
    public withFilter(filter: string): OneClickAlarmPolicy {
        this['filter'] = filter;
        return this;
    }
    public withComparisonOperator(comparisonOperator: string): OneClickAlarmPolicy {
        this['comparison_operator'] = comparisonOperator;
        return this;
    }
    public set comparisonOperator(comparisonOperator: string  | undefined) {
        this['comparison_operator'] = comparisonOperator;
    }
    public get comparisonOperator(): string | undefined {
        return this['comparison_operator'];
    }
    public withValue(value: number): OneClickAlarmPolicy {
        this['value'] = value;
        return this;
    }
    public withHierarchicalValue(hierarchicalValue: HierarchicalValue): OneClickAlarmPolicy {
        this['hierarchical_value'] = hierarchicalValue;
        return this;
    }
    public set hierarchicalValue(hierarchicalValue: HierarchicalValue  | undefined) {
        this['hierarchical_value'] = hierarchicalValue;
    }
    public get hierarchicalValue(): HierarchicalValue | undefined {
        return this['hierarchical_value'];
    }
    public withUnit(unit: string): OneClickAlarmPolicy {
        this['unit'] = unit;
        return this;
    }
    public withCount(count: number): OneClickAlarmPolicy {
        this['count'] = count;
        return this;
    }
    public withSuppressDuration(suppressDuration: SuppressDuration): OneClickAlarmPolicy {
        this['suppress_duration'] = suppressDuration;
        return this;
    }
    public set suppressDuration(suppressDuration: SuppressDuration  | undefined) {
        this['suppress_duration'] = suppressDuration;
    }
    public get suppressDuration(): SuppressDuration | undefined {
        return this['suppress_duration'];
    }
    public withLevel(level: number): OneClickAlarmPolicy {
        this['level'] = level;
        return this;
    }
    public withEnabled(enabled: boolean): OneClickAlarmPolicy {
        this['enabled'] = enabled;
        return this;
    }
    public withSelectedUnit(selectedUnit: string): OneClickAlarmPolicy {
        this['selected_unit'] = selectedUnit;
        return this;
    }
    public set selectedUnit(selectedUnit: string  | undefined) {
        this['selected_unit'] = selectedUnit;
    }
    public get selectedUnit(): string | undefined {
        return this['selected_unit'];
    }
}