import { CmdbInfo } from './CmdbInfo';


export class TriggerCondition {
    private 'metric_query_mode'?: TriggerConditionMetricQueryModeEnum | string;
    private 'metric_namespace'?: string;
    private 'metric_name'?: string;
    private 'metric_unit'?: string;
    private 'metric_labels'?: Array<string>;
    public promql?: string;
    private 'promql_expr'?: Array<string>;
    private 'trigger_times'?: string;
    private 'trigger_interval'?: string;
    private 'trigger_type'?: TriggerConditionTriggerTypeEnum | string;
    private 'promql_for'?: string;
    private 'aggregation_type'?: string;
    public operator?: string;
    public thresholds?: { [key: string]: string; };
    private 'aggregation_window'?: string;
    public cmdb?: CmdbInfo;
    private 'query_match'?: string;
    private 'query_param'?: string;
    private 'aom_monitor_level'?: string;
    private 'aggregate_type'?: TriggerConditionAggregateTypeEnum | string;
    private 'metric_statistic_method'?: TriggerConditionMetricStatisticMethodEnum | string;
    public expression?: string;
    private 'mix_promql'?: string;
    public constructor(metricQueryMode?: string, metricNamespace?: string, metricName?: string, metricUnit?: string, metricLabels?: Array<string>, promql?: string, queryParam?: string) { 
        this['metric_query_mode'] = metricQueryMode;
        this['metric_namespace'] = metricNamespace;
        this['metric_name'] = metricName;
        this['metric_unit'] = metricUnit;
        this['metric_labels'] = metricLabels;
        this['promql'] = promql;
        this['query_param'] = queryParam;
    }
    public withMetricQueryMode(metricQueryMode: TriggerConditionMetricQueryModeEnum | string): TriggerCondition {
        this['metric_query_mode'] = metricQueryMode;
        return this;
    }
    public set metricQueryMode(metricQueryMode: TriggerConditionMetricQueryModeEnum | string  | undefined) {
        this['metric_query_mode'] = metricQueryMode;
    }
    public get metricQueryMode(): TriggerConditionMetricQueryModeEnum | string | undefined {
        return this['metric_query_mode'];
    }
    public withMetricNamespace(metricNamespace: string): TriggerCondition {
        this['metric_namespace'] = metricNamespace;
        return this;
    }
    public set metricNamespace(metricNamespace: string  | undefined) {
        this['metric_namespace'] = metricNamespace;
    }
    public get metricNamespace(): string | undefined {
        return this['metric_namespace'];
    }
    public withMetricName(metricName: string): TriggerCondition {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withMetricUnit(metricUnit: string): TriggerCondition {
        this['metric_unit'] = metricUnit;
        return this;
    }
    public set metricUnit(metricUnit: string  | undefined) {
        this['metric_unit'] = metricUnit;
    }
    public get metricUnit(): string | undefined {
        return this['metric_unit'];
    }
    public withMetricLabels(metricLabels: Array<string>): TriggerCondition {
        this['metric_labels'] = metricLabels;
        return this;
    }
    public set metricLabels(metricLabels: Array<string>  | undefined) {
        this['metric_labels'] = metricLabels;
    }
    public get metricLabels(): Array<string> | undefined {
        return this['metric_labels'];
    }
    public withPromql(promql: string): TriggerCondition {
        this['promql'] = promql;
        return this;
    }
    public withPromqlExpr(promqlExpr: Array<string>): TriggerCondition {
        this['promql_expr'] = promqlExpr;
        return this;
    }
    public set promqlExpr(promqlExpr: Array<string>  | undefined) {
        this['promql_expr'] = promqlExpr;
    }
    public get promqlExpr(): Array<string> | undefined {
        return this['promql_expr'];
    }
    public withTriggerTimes(triggerTimes: string): TriggerCondition {
        this['trigger_times'] = triggerTimes;
        return this;
    }
    public set triggerTimes(triggerTimes: string  | undefined) {
        this['trigger_times'] = triggerTimes;
    }
    public get triggerTimes(): string | undefined {
        return this['trigger_times'];
    }
    public withTriggerInterval(triggerInterval: string): TriggerCondition {
        this['trigger_interval'] = triggerInterval;
        return this;
    }
    public set triggerInterval(triggerInterval: string  | undefined) {
        this['trigger_interval'] = triggerInterval;
    }
    public get triggerInterval(): string | undefined {
        return this['trigger_interval'];
    }
    public withTriggerType(triggerType: TriggerConditionTriggerTypeEnum | string): TriggerCondition {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: TriggerConditionTriggerTypeEnum | string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): TriggerConditionTriggerTypeEnum | string | undefined {
        return this['trigger_type'];
    }
    public withPromqlFor(promqlFor: string): TriggerCondition {
        this['promql_for'] = promqlFor;
        return this;
    }
    public set promqlFor(promqlFor: string  | undefined) {
        this['promql_for'] = promqlFor;
    }
    public get promqlFor(): string | undefined {
        return this['promql_for'];
    }
    public withAggregationType(aggregationType: string): TriggerCondition {
        this['aggregation_type'] = aggregationType;
        return this;
    }
    public set aggregationType(aggregationType: string  | undefined) {
        this['aggregation_type'] = aggregationType;
    }
    public get aggregationType(): string | undefined {
        return this['aggregation_type'];
    }
    public withOperator(operator: string): TriggerCondition {
        this['operator'] = operator;
        return this;
    }
    public withThresholds(thresholds: { [key: string]: string; }): TriggerCondition {
        this['thresholds'] = thresholds;
        return this;
    }
    public withAggregationWindow(aggregationWindow: string): TriggerCondition {
        this['aggregation_window'] = aggregationWindow;
        return this;
    }
    public set aggregationWindow(aggregationWindow: string  | undefined) {
        this['aggregation_window'] = aggregationWindow;
    }
    public get aggregationWindow(): string | undefined {
        return this['aggregation_window'];
    }
    public withCmdb(cmdb: CmdbInfo): TriggerCondition {
        this['cmdb'] = cmdb;
        return this;
    }
    public withQueryMatch(queryMatch: string): TriggerCondition {
        this['query_match'] = queryMatch;
        return this;
    }
    public set queryMatch(queryMatch: string  | undefined) {
        this['query_match'] = queryMatch;
    }
    public get queryMatch(): string | undefined {
        return this['query_match'];
    }
    public withQueryParam(queryParam: string): TriggerCondition {
        this['query_param'] = queryParam;
        return this;
    }
    public set queryParam(queryParam: string  | undefined) {
        this['query_param'] = queryParam;
    }
    public get queryParam(): string | undefined {
        return this['query_param'];
    }
    public withAomMonitorLevel(aomMonitorLevel: string): TriggerCondition {
        this['aom_monitor_level'] = aomMonitorLevel;
        return this;
    }
    public set aomMonitorLevel(aomMonitorLevel: string  | undefined) {
        this['aom_monitor_level'] = aomMonitorLevel;
    }
    public get aomMonitorLevel(): string | undefined {
        return this['aom_monitor_level'];
    }
    public withAggregateType(aggregateType: TriggerConditionAggregateTypeEnum | string): TriggerCondition {
        this['aggregate_type'] = aggregateType;
        return this;
    }
    public set aggregateType(aggregateType: TriggerConditionAggregateTypeEnum | string  | undefined) {
        this['aggregate_type'] = aggregateType;
    }
    public get aggregateType(): TriggerConditionAggregateTypeEnum | string | undefined {
        return this['aggregate_type'];
    }
    public withMetricStatisticMethod(metricStatisticMethod: TriggerConditionMetricStatisticMethodEnum | string): TriggerCondition {
        this['metric_statistic_method'] = metricStatisticMethod;
        return this;
    }
    public set metricStatisticMethod(metricStatisticMethod: TriggerConditionMetricStatisticMethodEnum | string  | undefined) {
        this['metric_statistic_method'] = metricStatisticMethod;
    }
    public get metricStatisticMethod(): TriggerConditionMetricStatisticMethodEnum | string | undefined {
        return this['metric_statistic_method'];
    }
    public withExpression(expression: string): TriggerCondition {
        this['expression'] = expression;
        return this;
    }
    public withMixPromql(mixPromql: string): TriggerCondition {
        this['mix_promql'] = mixPromql;
        return this;
    }
    public set mixPromql(mixPromql: string  | undefined) {
        this['mix_promql'] = mixPromql;
    }
    public get mixPromql(): string | undefined {
        return this['mix_promql'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TriggerConditionMetricQueryModeEnum {
    AOM = 'AOM',
    PROM = 'PROM',
    NATIVE_PROM = 'NATIVE_PROM'
}
/**
    * @export
    * @enum {string}
    */
export enum TriggerConditionTriggerTypeEnum {
    FIXED_RATE = 'FIXED_RATE',
    HOURLY = 'HOURLY',
    DAILY = 'DAILY',
    WEEKLY = 'WEEKLY',
    CRON = 'CRON'
}
/**
    * @export
    * @enum {string}
    */
export enum TriggerConditionAggregateTypeEnum {
    BY = 'by',
    AVG = 'avg',
    MAX = 'max',
    MIN = 'min',
    SUM = 'sum'
}
/**
    * @export
    * @enum {string}
    */
export enum TriggerConditionMetricStatisticMethodEnum {
    SINGLE = 'single',
    MIX = 'mix'
}
