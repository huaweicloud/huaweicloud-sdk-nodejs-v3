import { HierarchicalValue } from './HierarchicalValue';


export class AlarmRulePolicy {
    private 'metric_name'?: string;
    public period?: number;
    public filter?: string;
    private 'comparison_operator'?: string;
    public value?: number;
    private 'hierarchical_value'?: HierarchicalValue;
    public unit?: string;
    public count?: number;
    private 'suppress_duration'?: number;
    public level?: number;
    public namespace?: string;
    private 'dimension_name'?: string;
    public constructor(metricName?: string, period?: number, filter?: string, comparisonOperator?: string, count?: number) { 
        this['metric_name'] = metricName;
        this['period'] = period;
        this['filter'] = filter;
        this['comparison_operator'] = comparisonOperator;
        this['count'] = count;
    }
    public withMetricName(metricName: string): AlarmRulePolicy {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withPeriod(period: number): AlarmRulePolicy {
        this['period'] = period;
        return this;
    }
    public withFilter(filter: string): AlarmRulePolicy {
        this['filter'] = filter;
        return this;
    }
    public withComparisonOperator(comparisonOperator: string): AlarmRulePolicy {
        this['comparison_operator'] = comparisonOperator;
        return this;
    }
    public set comparisonOperator(comparisonOperator: string  | undefined) {
        this['comparison_operator'] = comparisonOperator;
    }
    public get comparisonOperator(): string | undefined {
        return this['comparison_operator'];
    }
    public withValue(value: number): AlarmRulePolicy {
        this['value'] = value;
        return this;
    }
    public withHierarchicalValue(hierarchicalValue: HierarchicalValue): AlarmRulePolicy {
        this['hierarchical_value'] = hierarchicalValue;
        return this;
    }
    public set hierarchicalValue(hierarchicalValue: HierarchicalValue  | undefined) {
        this['hierarchical_value'] = hierarchicalValue;
    }
    public get hierarchicalValue(): HierarchicalValue | undefined {
        return this['hierarchical_value'];
    }
    public withUnit(unit: string): AlarmRulePolicy {
        this['unit'] = unit;
        return this;
    }
    public withCount(count: number): AlarmRulePolicy {
        this['count'] = count;
        return this;
    }
    public withSuppressDuration(suppressDuration: number): AlarmRulePolicy {
        this['suppress_duration'] = suppressDuration;
        return this;
    }
    public set suppressDuration(suppressDuration: number  | undefined) {
        this['suppress_duration'] = suppressDuration;
    }
    public get suppressDuration(): number | undefined {
        return this['suppress_duration'];
    }
    public withLevel(level: number): AlarmRulePolicy {
        this['level'] = level;
        return this;
    }
    public withNamespace(namespace: string): AlarmRulePolicy {
        this['namespace'] = namespace;
        return this;
    }
    public withDimensionName(dimensionName: string): AlarmRulePolicy {
        this['dimension_name'] = dimensionName;
        return this;
    }
    public set dimensionName(dimensionName: string  | undefined) {
        this['dimension_name'] = dimensionName;
    }
    public get dimensionName(): string | undefined {
        return this['dimension_name'];
    }
}