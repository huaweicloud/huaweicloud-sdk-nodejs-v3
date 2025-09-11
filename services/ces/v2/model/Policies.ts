import { HierarchicalValue } from './HierarchicalValue';
import { MetricExtraInfo } from './MetricExtraInfo';


export class Policies {
    public namespace?: string;
    private 'dimension_name'?: string;
    private 'metric_name'?: string;
    private 'extra_info'?: MetricExtraInfo;
    public period?: PoliciesPeriodEnum | number;
    public filter?: string;
    private 'comparison_operator'?: string;
    public value?: number;
    private 'hierarchical_value'?: HierarchicalValue;
    public unit?: string;
    private 'selected_unit'?: string;
    public count?: number;
    public type?: string;
    private 'alarm_level'?: number;
    private 'suppress_duration'?: PoliciesSuppressDurationEnum | number;
    public constructor(namespace?: string, metricName?: string, period?: number, filter?: string, comparisonOperator?: string, count?: number) { 
        this['namespace'] = namespace;
        this['metric_name'] = metricName;
        this['period'] = period;
        this['filter'] = filter;
        this['comparison_operator'] = comparisonOperator;
        this['count'] = count;
    }
    public withNamespace(namespace: string): Policies {
        this['namespace'] = namespace;
        return this;
    }
    public withDimensionName(dimensionName: string): Policies {
        this['dimension_name'] = dimensionName;
        return this;
    }
    public set dimensionName(dimensionName: string  | undefined) {
        this['dimension_name'] = dimensionName;
    }
    public get dimensionName(): string | undefined {
        return this['dimension_name'];
    }
    public withMetricName(metricName: string): Policies {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withExtraInfo(extraInfo: MetricExtraInfo): Policies {
        this['extra_info'] = extraInfo;
        return this;
    }
    public set extraInfo(extraInfo: MetricExtraInfo  | undefined) {
        this['extra_info'] = extraInfo;
    }
    public get extraInfo(): MetricExtraInfo | undefined {
        return this['extra_info'];
    }
    public withPeriod(period: PoliciesPeriodEnum | number): Policies {
        this['period'] = period;
        return this;
    }
    public withFilter(filter: string): Policies {
        this['filter'] = filter;
        return this;
    }
    public withComparisonOperator(comparisonOperator: string): Policies {
        this['comparison_operator'] = comparisonOperator;
        return this;
    }
    public set comparisonOperator(comparisonOperator: string  | undefined) {
        this['comparison_operator'] = comparisonOperator;
    }
    public get comparisonOperator(): string | undefined {
        return this['comparison_operator'];
    }
    public withValue(value: number): Policies {
        this['value'] = value;
        return this;
    }
    public withHierarchicalValue(hierarchicalValue: HierarchicalValue): Policies {
        this['hierarchical_value'] = hierarchicalValue;
        return this;
    }
    public set hierarchicalValue(hierarchicalValue: HierarchicalValue  | undefined) {
        this['hierarchical_value'] = hierarchicalValue;
    }
    public get hierarchicalValue(): HierarchicalValue | undefined {
        return this['hierarchical_value'];
    }
    public withUnit(unit: string): Policies {
        this['unit'] = unit;
        return this;
    }
    public withSelectedUnit(selectedUnit: string): Policies {
        this['selected_unit'] = selectedUnit;
        return this;
    }
    public set selectedUnit(selectedUnit: string  | undefined) {
        this['selected_unit'] = selectedUnit;
    }
    public get selectedUnit(): string | undefined {
        return this['selected_unit'];
    }
    public withCount(count: number): Policies {
        this['count'] = count;
        return this;
    }
    public withType(type: string): Policies {
        this['type'] = type;
        return this;
    }
    public withAlarmLevel(alarmLevel: number): Policies {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: number  | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel(): number | undefined {
        return this['alarm_level'];
    }
    public withSuppressDuration(suppressDuration: PoliciesSuppressDurationEnum | number): Policies {
        this['suppress_duration'] = suppressDuration;
        return this;
    }
    public set suppressDuration(suppressDuration: PoliciesSuppressDurationEnum | number  | undefined) {
        this['suppress_duration'] = suppressDuration;
    }
    public get suppressDuration(): PoliciesSuppressDurationEnum | number | undefined {
        return this['suppress_duration'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PoliciesPeriodEnum {
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
export enum PoliciesSuppressDurationEnum {
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
