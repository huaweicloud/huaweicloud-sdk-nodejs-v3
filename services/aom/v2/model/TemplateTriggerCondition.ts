import { CmdbInfo } from './CmdbInfo';


export class TemplateTriggerCondition {
    private 'metric_query_mode'?: TemplateTriggerConditionMetricQueryModeEnum | string;
    private 'metric_namespace'?: string;
    private 'metric_name'?: string;
    private 'metric_unit'?: string;
    private 'metric_labels'?: Array<string>;
    public promql?: string;
    private 'promql_expr'?: string;
    private 'trigger_times'?: number;
    private 'trigger_interval'?: string;
    private 'trigger_type'?: TemplateTriggerConditionTriggerTypeEnum | string;
    private 'promql_for'?: string;
    private 'aggregation_type'?: string;
    public operator?: string;
    public thresholds?: { [key: string]: string; };
    private 'aggregation_window'?: string;
    public cmdb?: CmdbInfo;
    private 'query_match'?: string;
    private 'aom_monitor_level'?: string;
    private 'aggregate_type'?: TemplateTriggerConditionAggregateTypeEnum | string;
    private 'metric_statistic_method'?: TemplateTriggerConditionMetricStatisticMethodEnum | string;
    public expression?: string;
    private 'mix_promql'?: string;
    private 'alarm_message_template'?: string;
    private 'promql_monitor_templates'?: Array<string>;
    private 'query_param'?: object;
    public constructor() { 
    }
    public withMetricQueryMode(metricQueryMode: TemplateTriggerConditionMetricQueryModeEnum | string): TemplateTriggerCondition {
        this['metric_query_mode'] = metricQueryMode;
        return this;
    }
    public set metricQueryMode(metricQueryMode: TemplateTriggerConditionMetricQueryModeEnum | string  | undefined) {
        this['metric_query_mode'] = metricQueryMode;
    }
    public get metricQueryMode(): TemplateTriggerConditionMetricQueryModeEnum | string | undefined {
        return this['metric_query_mode'];
    }
    public withMetricNamespace(metricNamespace: string): TemplateTriggerCondition {
        this['metric_namespace'] = metricNamespace;
        return this;
    }
    public set metricNamespace(metricNamespace: string  | undefined) {
        this['metric_namespace'] = metricNamespace;
    }
    public get metricNamespace(): string | undefined {
        return this['metric_namespace'];
    }
    public withMetricName(metricName: string): TemplateTriggerCondition {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withMetricUnit(metricUnit: string): TemplateTriggerCondition {
        this['metric_unit'] = metricUnit;
        return this;
    }
    public set metricUnit(metricUnit: string  | undefined) {
        this['metric_unit'] = metricUnit;
    }
    public get metricUnit(): string | undefined {
        return this['metric_unit'];
    }
    public withMetricLabels(metricLabels: Array<string>): TemplateTriggerCondition {
        this['metric_labels'] = metricLabels;
        return this;
    }
    public set metricLabels(metricLabels: Array<string>  | undefined) {
        this['metric_labels'] = metricLabels;
    }
    public get metricLabels(): Array<string> | undefined {
        return this['metric_labels'];
    }
    public withPromql(promql: string): TemplateTriggerCondition {
        this['promql'] = promql;
        return this;
    }
    public withPromqlExpr(promqlExpr: string): TemplateTriggerCondition {
        this['promql_expr'] = promqlExpr;
        return this;
    }
    public set promqlExpr(promqlExpr: string  | undefined) {
        this['promql_expr'] = promqlExpr;
    }
    public get promqlExpr(): string | undefined {
        return this['promql_expr'];
    }
    public withTriggerTimes(triggerTimes: number): TemplateTriggerCondition {
        this['trigger_times'] = triggerTimes;
        return this;
    }
    public set triggerTimes(triggerTimes: number  | undefined) {
        this['trigger_times'] = triggerTimes;
    }
    public get triggerTimes(): number | undefined {
        return this['trigger_times'];
    }
    public withTriggerInterval(triggerInterval: string): TemplateTriggerCondition {
        this['trigger_interval'] = triggerInterval;
        return this;
    }
    public set triggerInterval(triggerInterval: string  | undefined) {
        this['trigger_interval'] = triggerInterval;
    }
    public get triggerInterval(): string | undefined {
        return this['trigger_interval'];
    }
    public withTriggerType(triggerType: TemplateTriggerConditionTriggerTypeEnum | string): TemplateTriggerCondition {
        this['trigger_type'] = triggerType;
        return this;
    }
    public set triggerType(triggerType: TemplateTriggerConditionTriggerTypeEnum | string  | undefined) {
        this['trigger_type'] = triggerType;
    }
    public get triggerType(): TemplateTriggerConditionTriggerTypeEnum | string | undefined {
        return this['trigger_type'];
    }
    public withPromqlFor(promqlFor: string): TemplateTriggerCondition {
        this['promql_for'] = promqlFor;
        return this;
    }
    public set promqlFor(promqlFor: string  | undefined) {
        this['promql_for'] = promqlFor;
    }
    public get promqlFor(): string | undefined {
        return this['promql_for'];
    }
    public withAggregationType(aggregationType: string): TemplateTriggerCondition {
        this['aggregation_type'] = aggregationType;
        return this;
    }
    public set aggregationType(aggregationType: string  | undefined) {
        this['aggregation_type'] = aggregationType;
    }
    public get aggregationType(): string | undefined {
        return this['aggregation_type'];
    }
    public withOperator(operator: string): TemplateTriggerCondition {
        this['operator'] = operator;
        return this;
    }
    public withThresholds(thresholds: { [key: string]: string; }): TemplateTriggerCondition {
        this['thresholds'] = thresholds;
        return this;
    }
    public withAggregationWindow(aggregationWindow: string): TemplateTriggerCondition {
        this['aggregation_window'] = aggregationWindow;
        return this;
    }
    public set aggregationWindow(aggregationWindow: string  | undefined) {
        this['aggregation_window'] = aggregationWindow;
    }
    public get aggregationWindow(): string | undefined {
        return this['aggregation_window'];
    }
    public withCmdb(cmdb: CmdbInfo): TemplateTriggerCondition {
        this['cmdb'] = cmdb;
        return this;
    }
    public withQueryMatch(queryMatch: string): TemplateTriggerCondition {
        this['query_match'] = queryMatch;
        return this;
    }
    public set queryMatch(queryMatch: string  | undefined) {
        this['query_match'] = queryMatch;
    }
    public get queryMatch(): string | undefined {
        return this['query_match'];
    }
    public withAomMonitorLevel(aomMonitorLevel: string): TemplateTriggerCondition {
        this['aom_monitor_level'] = aomMonitorLevel;
        return this;
    }
    public set aomMonitorLevel(aomMonitorLevel: string  | undefined) {
        this['aom_monitor_level'] = aomMonitorLevel;
    }
    public get aomMonitorLevel(): string | undefined {
        return this['aom_monitor_level'];
    }
    public withAggregateType(aggregateType: TemplateTriggerConditionAggregateTypeEnum | string): TemplateTriggerCondition {
        this['aggregate_type'] = aggregateType;
        return this;
    }
    public set aggregateType(aggregateType: TemplateTriggerConditionAggregateTypeEnum | string  | undefined) {
        this['aggregate_type'] = aggregateType;
    }
    public get aggregateType(): TemplateTriggerConditionAggregateTypeEnum | string | undefined {
        return this['aggregate_type'];
    }
    public withMetricStatisticMethod(metricStatisticMethod: TemplateTriggerConditionMetricStatisticMethodEnum | string): TemplateTriggerCondition {
        this['metric_statistic_method'] = metricStatisticMethod;
        return this;
    }
    public set metricStatisticMethod(metricStatisticMethod: TemplateTriggerConditionMetricStatisticMethodEnum | string  | undefined) {
        this['metric_statistic_method'] = metricStatisticMethod;
    }
    public get metricStatisticMethod(): TemplateTriggerConditionMetricStatisticMethodEnum | string | undefined {
        return this['metric_statistic_method'];
    }
    public withExpression(expression: string): TemplateTriggerCondition {
        this['expression'] = expression;
        return this;
    }
    public withMixPromql(mixPromql: string): TemplateTriggerCondition {
        this['mix_promql'] = mixPromql;
        return this;
    }
    public set mixPromql(mixPromql: string  | undefined) {
        this['mix_promql'] = mixPromql;
    }
    public get mixPromql(): string | undefined {
        return this['mix_promql'];
    }
    public withAlarmMessageTemplate(alarmMessageTemplate: string): TemplateTriggerCondition {
        this['alarm_message_template'] = alarmMessageTemplate;
        return this;
    }
    public set alarmMessageTemplate(alarmMessageTemplate: string  | undefined) {
        this['alarm_message_template'] = alarmMessageTemplate;
    }
    public get alarmMessageTemplate(): string | undefined {
        return this['alarm_message_template'];
    }
    public withPromqlMonitorTemplates(promqlMonitorTemplates: Array<string>): TemplateTriggerCondition {
        this['promql_monitor_templates'] = promqlMonitorTemplates;
        return this;
    }
    public set promqlMonitorTemplates(promqlMonitorTemplates: Array<string>  | undefined) {
        this['promql_monitor_templates'] = promqlMonitorTemplates;
    }
    public get promqlMonitorTemplates(): Array<string> | undefined {
        return this['promql_monitor_templates'];
    }
    public withQueryParam(queryParam: object): TemplateTriggerCondition {
        this['query_param'] = queryParam;
        return this;
    }
    public set queryParam(queryParam: object  | undefined) {
        this['query_param'] = queryParam;
    }
    public get queryParam(): object | undefined {
        return this['query_param'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TemplateTriggerConditionMetricQueryModeEnum {
    AOM = 'AOM',
    PROM = 'PROM',
    NATIVE_PROM = 'NATIVE_PROM'
}
/**
    * @export
    * @enum {string}
    */
export enum TemplateTriggerConditionTriggerTypeEnum {
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
export enum TemplateTriggerConditionAggregateTypeEnum {
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
export enum TemplateTriggerConditionMetricStatisticMethodEnum {
    SINGLE = 'single',
    MIX = 'mix'
}
