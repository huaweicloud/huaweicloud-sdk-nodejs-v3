import { BizTypeEnum } from './BizTypeEnum';


export class MetricMonitorVO {
    public id?: string;
    private 'other_metric_ids'?: Array<string>;
    private 'other_metric_names'?: Array<string>;
    private 'other_compound_metric_ids'?: Array<string>;
    private 'other_compound_metric_names'?: Array<string>;
    public expression?: string;
    private 'metric_id'?: string;
    private 'front_configs'?: string;
    private 'metric_type'?: BizTypeEnum;
    public constructor() { 
    }
    public withId(id: string): MetricMonitorVO {
        this['id'] = id;
        return this;
    }
    public withOtherMetricIds(otherMetricIds: Array<string>): MetricMonitorVO {
        this['other_metric_ids'] = otherMetricIds;
        return this;
    }
    public set otherMetricIds(otherMetricIds: Array<string>  | undefined) {
        this['other_metric_ids'] = otherMetricIds;
    }
    public get otherMetricIds(): Array<string> | undefined {
        return this['other_metric_ids'];
    }
    public withOtherMetricNames(otherMetricNames: Array<string>): MetricMonitorVO {
        this['other_metric_names'] = otherMetricNames;
        return this;
    }
    public set otherMetricNames(otherMetricNames: Array<string>  | undefined) {
        this['other_metric_names'] = otherMetricNames;
    }
    public get otherMetricNames(): Array<string> | undefined {
        return this['other_metric_names'];
    }
    public withOtherCompoundMetricIds(otherCompoundMetricIds: Array<string>): MetricMonitorVO {
        this['other_compound_metric_ids'] = otherCompoundMetricIds;
        return this;
    }
    public set otherCompoundMetricIds(otherCompoundMetricIds: Array<string>  | undefined) {
        this['other_compound_metric_ids'] = otherCompoundMetricIds;
    }
    public get otherCompoundMetricIds(): Array<string> | undefined {
        return this['other_compound_metric_ids'];
    }
    public withOtherCompoundMetricNames(otherCompoundMetricNames: Array<string>): MetricMonitorVO {
        this['other_compound_metric_names'] = otherCompoundMetricNames;
        return this;
    }
    public set otherCompoundMetricNames(otherCompoundMetricNames: Array<string>  | undefined) {
        this['other_compound_metric_names'] = otherCompoundMetricNames;
    }
    public get otherCompoundMetricNames(): Array<string> | undefined {
        return this['other_compound_metric_names'];
    }
    public withExpression(expression: string): MetricMonitorVO {
        this['expression'] = expression;
        return this;
    }
    public withMetricId(metricId: string): MetricMonitorVO {
        this['metric_id'] = metricId;
        return this;
    }
    public set metricId(metricId: string  | undefined) {
        this['metric_id'] = metricId;
    }
    public get metricId(): string | undefined {
        return this['metric_id'];
    }
    public withFrontConfigs(frontConfigs: string): MetricMonitorVO {
        this['front_configs'] = frontConfigs;
        return this;
    }
    public set frontConfigs(frontConfigs: string  | undefined) {
        this['front_configs'] = frontConfigs;
    }
    public get frontConfigs(): string | undefined {
        return this['front_configs'];
    }
    public withMetricType(metricType: BizTypeEnum): MetricMonitorVO {
        this['metric_type'] = metricType;
        return this;
    }
    public set metricType(metricType: BizTypeEnum  | undefined) {
        this['metric_type'] = metricType;
    }
    public get metricType(): BizTypeEnum | undefined {
        return this['metric_type'];
    }
}