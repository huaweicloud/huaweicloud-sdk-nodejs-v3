import { HierarchicalValue } from './HierarchicalValue';
import { Period } from './Period';
import { SuppressDuration } from './SuppressDuration';


export class UpdateAlarmTemplatePolicies {
    public namespace?: string;
    private 'dimension_name'?: string;
    private 'metric_name'?: string;
    public period?: Period;
    public filter?: string;
    private 'comparison_operator'?: string;
    public value?: number;
    private 'hierarchical_value'?: HierarchicalValue;
    public unit?: string;
    private 'selected_unit'?: string;
    public count?: number;
    private 'suppress_duration'?: SuppressDuration;
    private 'alarm_level'?: number;
    public constructor(namespace?: string, metricName?: string, period?: Period, filter?: string, comparisonOperator?: string, count?: number) { 
        this['namespace'] = namespace;
        this['metric_name'] = metricName;
        this['period'] = period;
        this['filter'] = filter;
        this['comparison_operator'] = comparisonOperator;
        this['count'] = count;
    }
    public withNamespace(namespace: string): UpdateAlarmTemplatePolicies {
        this['namespace'] = namespace;
        return this;
    }
    public withDimensionName(dimensionName: string): UpdateAlarmTemplatePolicies {
        this['dimension_name'] = dimensionName;
        return this;
    }
    public set dimensionName(dimensionName: string  | undefined) {
        this['dimension_name'] = dimensionName;
    }
    public get dimensionName(): string | undefined {
        return this['dimension_name'];
    }
    public withMetricName(metricName: string): UpdateAlarmTemplatePolicies {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withPeriod(period: Period): UpdateAlarmTemplatePolicies {
        this['period'] = period;
        return this;
    }
    public withFilter(filter: string): UpdateAlarmTemplatePolicies {
        this['filter'] = filter;
        return this;
    }
    public withComparisonOperator(comparisonOperator: string): UpdateAlarmTemplatePolicies {
        this['comparison_operator'] = comparisonOperator;
        return this;
    }
    public set comparisonOperator(comparisonOperator: string  | undefined) {
        this['comparison_operator'] = comparisonOperator;
    }
    public get comparisonOperator(): string | undefined {
        return this['comparison_operator'];
    }
    public withValue(value: number): UpdateAlarmTemplatePolicies {
        this['value'] = value;
        return this;
    }
    public withHierarchicalValue(hierarchicalValue: HierarchicalValue): UpdateAlarmTemplatePolicies {
        this['hierarchical_value'] = hierarchicalValue;
        return this;
    }
    public set hierarchicalValue(hierarchicalValue: HierarchicalValue  | undefined) {
        this['hierarchical_value'] = hierarchicalValue;
    }
    public get hierarchicalValue(): HierarchicalValue | undefined {
        return this['hierarchical_value'];
    }
    public withUnit(unit: string): UpdateAlarmTemplatePolicies {
        this['unit'] = unit;
        return this;
    }
    public withSelectedUnit(selectedUnit: string): UpdateAlarmTemplatePolicies {
        this['selected_unit'] = selectedUnit;
        return this;
    }
    public set selectedUnit(selectedUnit: string  | undefined) {
        this['selected_unit'] = selectedUnit;
    }
    public get selectedUnit(): string | undefined {
        return this['selected_unit'];
    }
    public withCount(count: number): UpdateAlarmTemplatePolicies {
        this['count'] = count;
        return this;
    }
    public withSuppressDuration(suppressDuration: SuppressDuration): UpdateAlarmTemplatePolicies {
        this['suppress_duration'] = suppressDuration;
        return this;
    }
    public set suppressDuration(suppressDuration: SuppressDuration  | undefined) {
        this['suppress_duration'] = suppressDuration;
    }
    public get suppressDuration(): SuppressDuration | undefined {
        return this['suppress_duration'];
    }
    public withAlarmLevel(alarmLevel: number): UpdateAlarmTemplatePolicies {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: number  | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel(): number | undefined {
        return this['alarm_level'];
    }
}