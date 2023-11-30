import { BizTypeEnum } from './BizTypeEnum';


export class MetricMonitorVO {
    public id?: number;
    private 'other_metric_ids'?: Array<number>;
    private 'other_metric_names'?: Array<string>;
    public expression?: string;
    private 'metric_id'?: number;
    private 'front_configs'?: string;
    private 'metric_type'?: BizTypeEnum;
    public constructor() { 
    }
    public withId(id: number): MetricMonitorVO {
        this['id'] = id;
        return this;
    }
    public withOtherMetricIds(otherMetricIds: Array<number>): MetricMonitorVO {
        this['other_metric_ids'] = otherMetricIds;
        return this;
    }
    public set otherMetricIds(otherMetricIds: Array<number>  | undefined) {
        this['other_metric_ids'] = otherMetricIds;
    }
    public get otherMetricIds(): Array<number> | undefined {
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
    public withExpression(expression: string): MetricMonitorVO {
        this['expression'] = expression;
        return this;
    }
    public withMetricId(metricId: number): MetricMonitorVO {
        this['metric_id'] = metricId;
        return this;
    }
    public set metricId(metricId: number  | undefined) {
        this['metric_id'] = metricId;
    }
    public get metricId(): number | undefined {
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