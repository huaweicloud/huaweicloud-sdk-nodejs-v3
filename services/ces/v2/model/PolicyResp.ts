import { HierarchicalValueResp } from './HierarchicalValueResp';


export class PolicyResp {
    private 'metric_name'?: string;
    public period?: number;
    public filter?: string;
    private 'comparison_operator'?: string;
    public value?: number;
    private 'hierarchical_value'?: HierarchicalValueResp;
    public unit?: string;
    public count?: number;
    private 'suppress_duration'?: number;
    public level?: number;
    public namespace?: string;
    private 'dimension_name'?: string;
    public constructor() { 
    }
    public withMetricName(metricName: string): PolicyResp {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withPeriod(period: number): PolicyResp {
        this['period'] = period;
        return this;
    }
    public withFilter(filter: string): PolicyResp {
        this['filter'] = filter;
        return this;
    }
    public withComparisonOperator(comparisonOperator: string): PolicyResp {
        this['comparison_operator'] = comparisonOperator;
        return this;
    }
    public set comparisonOperator(comparisonOperator: string  | undefined) {
        this['comparison_operator'] = comparisonOperator;
    }
    public get comparisonOperator(): string | undefined {
        return this['comparison_operator'];
    }
    public withValue(value: number): PolicyResp {
        this['value'] = value;
        return this;
    }
    public withHierarchicalValue(hierarchicalValue: HierarchicalValueResp): PolicyResp {
        this['hierarchical_value'] = hierarchicalValue;
        return this;
    }
    public set hierarchicalValue(hierarchicalValue: HierarchicalValueResp  | undefined) {
        this['hierarchical_value'] = hierarchicalValue;
    }
    public get hierarchicalValue(): HierarchicalValueResp | undefined {
        return this['hierarchical_value'];
    }
    public withUnit(unit: string): PolicyResp {
        this['unit'] = unit;
        return this;
    }
    public withCount(count: number): PolicyResp {
        this['count'] = count;
        return this;
    }
    public withSuppressDuration(suppressDuration: number): PolicyResp {
        this['suppress_duration'] = suppressDuration;
        return this;
    }
    public set suppressDuration(suppressDuration: number  | undefined) {
        this['suppress_duration'] = suppressDuration;
    }
    public get suppressDuration(): number | undefined {
        return this['suppress_duration'];
    }
    public withLevel(level: number): PolicyResp {
        this['level'] = level;
        return this;
    }
    public withNamespace(namespace: string): PolicyResp {
        this['namespace'] = namespace;
        return this;
    }
    public withDimensionName(dimensionName: string): PolicyResp {
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