

export class Policies {
    public namespace?: string;
    private 'dimension_name'?: string;
    private 'metric_name'?: string;
    public period?: PoliciesPeriodEnum | number;
    public filter?: string;
    private 'comparison_operator'?: string;
    public value?: number;
    public unit?: string;
    public count?: number;
    private 'alarm_level'?: number;
    private 'suppress_duration'?: PoliciesSuppressDurationEnum | number;
    public constructor(namespace?: string, metricName?: string, period?: number, filter?: string, comparisonOperator?: string, count?: number, suppressDuration?: number) { 
        this['namespace'] = namespace;
        this['metric_name'] = metricName;
        this['period'] = period;
        this['filter'] = filter;
        this['comparison_operator'] = comparisonOperator;
        this['count'] = count;
        this['suppress_duration'] = suppressDuration;
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
    public withUnit(unit: string): Policies {
        this['unit'] = unit;
        return this;
    }
    public withCount(count: number): Policies {
        this['count'] = count;
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
