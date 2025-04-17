import { HierarchicalValue } from './HierarchicalValue';
import { MetricExtraInfo } from './MetricExtraInfo';


export class UpdatePolicy {
    private 'metric_name'?: string;
    private 'extra_info'?: MetricExtraInfo;
    public period?: number;
    public filter?: string;
    private 'comparison_operator'?: string;
    public value?: number;
    private 'hierarchical_value'?: HierarchicalValue;
    public unit?: string;
    public type?: string;
    public count?: number;
    private 'suppress_duration'?: number;
    public level?: number;
    public constructor(metricName?: string, period?: number, filter?: string, comparisonOperator?: string, count?: number) { 
        this['metric_name'] = metricName;
        this['period'] = period;
        this['filter'] = filter;
        this['comparison_operator'] = comparisonOperator;
        this['count'] = count;
    }
    public withMetricName(metricName: string): UpdatePolicy {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withExtraInfo(extraInfo: MetricExtraInfo): UpdatePolicy {
        this['extra_info'] = extraInfo;
        return this;
    }
    public set extraInfo(extraInfo: MetricExtraInfo  | undefined) {
        this['extra_info'] = extraInfo;
    }
    public get extraInfo(): MetricExtraInfo | undefined {
        return this['extra_info'];
    }
    public withPeriod(period: number): UpdatePolicy {
        this['period'] = period;
        return this;
    }
    public withFilter(filter: string): UpdatePolicy {
        this['filter'] = filter;
        return this;
    }
    public withComparisonOperator(comparisonOperator: string): UpdatePolicy {
        this['comparison_operator'] = comparisonOperator;
        return this;
    }
    public set comparisonOperator(comparisonOperator: string  | undefined) {
        this['comparison_operator'] = comparisonOperator;
    }
    public get comparisonOperator(): string | undefined {
        return this['comparison_operator'];
    }
    public withValue(value: number): UpdatePolicy {
        this['value'] = value;
        return this;
    }
    public withHierarchicalValue(hierarchicalValue: HierarchicalValue): UpdatePolicy {
        this['hierarchical_value'] = hierarchicalValue;
        return this;
    }
    public set hierarchicalValue(hierarchicalValue: HierarchicalValue  | undefined) {
        this['hierarchical_value'] = hierarchicalValue;
    }
    public get hierarchicalValue(): HierarchicalValue | undefined {
        return this['hierarchical_value'];
    }
    public withUnit(unit: string): UpdatePolicy {
        this['unit'] = unit;
        return this;
    }
    public withType(type: string): UpdatePolicy {
        this['type'] = type;
        return this;
    }
    public withCount(count: number): UpdatePolicy {
        this['count'] = count;
        return this;
    }
    public withSuppressDuration(suppressDuration: number): UpdatePolicy {
        this['suppress_duration'] = suppressDuration;
        return this;
    }
    public set suppressDuration(suppressDuration: number  | undefined) {
        this['suppress_duration'] = suppressDuration;
    }
    public get suppressDuration(): number | undefined {
        return this['suppress_duration'];
    }
    public withLevel(level: number): UpdatePolicy {
        this['level'] = level;
        return this;
    }
}