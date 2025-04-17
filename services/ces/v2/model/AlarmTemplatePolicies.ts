import { HierarchicalValue } from './HierarchicalValue';


export class AlarmTemplatePolicies {
    public namespace?: string;
    private 'dimension_name'?: string;
    private 'metric_name'?: string;
    public period?: AlarmTemplatePoliciesPeriodEnum | number;
    public filter?: string;
    private 'comparison_operator'?: string;
    public value?: number;
    private 'hierarchical_value'?: HierarchicalValue;
    public unit?: string;
    public count?: number;
    private 'alarm_level'?: number;
    private 'suppress_duration'?: AlarmTemplatePoliciesSuppressDurationEnum | number;
    private 'selected_unit'?: string;
    public constructor(namespace?: string, dimensionName?: string, metricName?: string, period?: number, filter?: string, comparisonOperator?: string, unit?: string, count?: number, alarmLevel?: number, suppressDuration?: number) { 
        this['namespace'] = namespace;
        this['dimension_name'] = dimensionName;
        this['metric_name'] = metricName;
        this['period'] = period;
        this['filter'] = filter;
        this['comparison_operator'] = comparisonOperator;
        this['unit'] = unit;
        this['count'] = count;
        this['alarm_level'] = alarmLevel;
        this['suppress_duration'] = suppressDuration;
    }
    public withNamespace(namespace: string): AlarmTemplatePolicies {
        this['namespace'] = namespace;
        return this;
    }
    public withDimensionName(dimensionName: string): AlarmTemplatePolicies {
        this['dimension_name'] = dimensionName;
        return this;
    }
    public set dimensionName(dimensionName: string  | undefined) {
        this['dimension_name'] = dimensionName;
    }
    public get dimensionName(): string | undefined {
        return this['dimension_name'];
    }
    public withMetricName(metricName: string): AlarmTemplatePolicies {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withPeriod(period: AlarmTemplatePoliciesPeriodEnum | number): AlarmTemplatePolicies {
        this['period'] = period;
        return this;
    }
    public withFilter(filter: string): AlarmTemplatePolicies {
        this['filter'] = filter;
        return this;
    }
    public withComparisonOperator(comparisonOperator: string): AlarmTemplatePolicies {
        this['comparison_operator'] = comparisonOperator;
        return this;
    }
    public set comparisonOperator(comparisonOperator: string  | undefined) {
        this['comparison_operator'] = comparisonOperator;
    }
    public get comparisonOperator(): string | undefined {
        return this['comparison_operator'];
    }
    public withValue(value: number): AlarmTemplatePolicies {
        this['value'] = value;
        return this;
    }
    public withHierarchicalValue(hierarchicalValue: HierarchicalValue): AlarmTemplatePolicies {
        this['hierarchical_value'] = hierarchicalValue;
        return this;
    }
    public set hierarchicalValue(hierarchicalValue: HierarchicalValue  | undefined) {
        this['hierarchical_value'] = hierarchicalValue;
    }
    public get hierarchicalValue(): HierarchicalValue | undefined {
        return this['hierarchical_value'];
    }
    public withUnit(unit: string): AlarmTemplatePolicies {
        this['unit'] = unit;
        return this;
    }
    public withCount(count: number): AlarmTemplatePolicies {
        this['count'] = count;
        return this;
    }
    public withAlarmLevel(alarmLevel: number): AlarmTemplatePolicies {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: number  | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel(): number | undefined {
        return this['alarm_level'];
    }
    public withSuppressDuration(suppressDuration: AlarmTemplatePoliciesSuppressDurationEnum | number): AlarmTemplatePolicies {
        this['suppress_duration'] = suppressDuration;
        return this;
    }
    public set suppressDuration(suppressDuration: AlarmTemplatePoliciesSuppressDurationEnum | number  | undefined) {
        this['suppress_duration'] = suppressDuration;
    }
    public get suppressDuration(): AlarmTemplatePoliciesSuppressDurationEnum | number | undefined {
        return this['suppress_duration'];
    }
    public withSelectedUnit(selectedUnit: string): AlarmTemplatePolicies {
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

/**
    * @export
    * @enum {string}
    */
export enum AlarmTemplatePoliciesPeriodEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1,
    NUMBER_300 = 300,
    NUMBER_1200 = 1200,
    NUMBER_3600 = 3600,
    NUMBER_14400 = 14400,
    NUMBER_86400 = 86400
}
/**
    * @export
    * @enum {string}
    */
export enum AlarmTemplatePoliciesSuppressDurationEnum {
    NUMBER_0 = 0,
    NUMBER_300 = 300,
    NUMBER_600 = 600,
    NUMBER_900 = 900,
    NUMBER_1800 = 1800,
    NUMBER_3600 = 3600,
    NUMBER_10800 = 10800,
    NUMBER_21600 = 21600,
    NUMBER_43200 = 43200,
    NUMBER_86400 = 86400
}
