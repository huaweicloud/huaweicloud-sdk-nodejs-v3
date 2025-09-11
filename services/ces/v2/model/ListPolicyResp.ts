import { HierarchicalValueResp } from './HierarchicalValueResp';
import { MetricExtraInfoResp } from './MetricExtraInfoResp';
import { PeriodResp } from './PeriodResp';
import { SuppressDurationResp } from './SuppressDurationResp';


export class ListPolicyResp {
    private 'metric_name'?: string;
    private 'extra_info'?: MetricExtraInfoResp;
    public period?: PeriodResp;
    public filter?: string;
    private 'comparison_operator'?: string;
    public value?: number;
    private 'hierarchical_value'?: HierarchicalValueResp;
    public unit?: string;
    public type?: string;
    public count?: number;
    private 'suppress_duration'?: SuppressDurationResp;
    public level?: number;
    public namespace?: string;
    private 'dimension_name'?: string;
    public constructor() { 
    }
    public withMetricName(metricName: string): ListPolicyResp {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withExtraInfo(extraInfo: MetricExtraInfoResp): ListPolicyResp {
        this['extra_info'] = extraInfo;
        return this;
    }
    public set extraInfo(extraInfo: MetricExtraInfoResp  | undefined) {
        this['extra_info'] = extraInfo;
    }
    public get extraInfo(): MetricExtraInfoResp | undefined {
        return this['extra_info'];
    }
    public withPeriod(period: PeriodResp): ListPolicyResp {
        this['period'] = period;
        return this;
    }
    public withFilter(filter: string): ListPolicyResp {
        this['filter'] = filter;
        return this;
    }
    public withComparisonOperator(comparisonOperator: string): ListPolicyResp {
        this['comparison_operator'] = comparisonOperator;
        return this;
    }
    public set comparisonOperator(comparisonOperator: string  | undefined) {
        this['comparison_operator'] = comparisonOperator;
    }
    public get comparisonOperator(): string | undefined {
        return this['comparison_operator'];
    }
    public withValue(value: number): ListPolicyResp {
        this['value'] = value;
        return this;
    }
    public withHierarchicalValue(hierarchicalValue: HierarchicalValueResp): ListPolicyResp {
        this['hierarchical_value'] = hierarchicalValue;
        return this;
    }
    public set hierarchicalValue(hierarchicalValue: HierarchicalValueResp  | undefined) {
        this['hierarchical_value'] = hierarchicalValue;
    }
    public get hierarchicalValue(): HierarchicalValueResp | undefined {
        return this['hierarchical_value'];
    }
    public withUnit(unit: string): ListPolicyResp {
        this['unit'] = unit;
        return this;
    }
    public withType(type: string): ListPolicyResp {
        this['type'] = type;
        return this;
    }
    public withCount(count: number): ListPolicyResp {
        this['count'] = count;
        return this;
    }
    public withSuppressDuration(suppressDuration: SuppressDurationResp): ListPolicyResp {
        this['suppress_duration'] = suppressDuration;
        return this;
    }
    public set suppressDuration(suppressDuration: SuppressDurationResp  | undefined) {
        this['suppress_duration'] = suppressDuration;
    }
    public get suppressDuration(): SuppressDurationResp | undefined {
        return this['suppress_duration'];
    }
    public withLevel(level: number): ListPolicyResp {
        this['level'] = level;
        return this;
    }
    public withNamespace(namespace: string): ListPolicyResp {
        this['namespace'] = namespace;
        return this;
    }
    public withDimensionName(dimensionName: string): ListPolicyResp {
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