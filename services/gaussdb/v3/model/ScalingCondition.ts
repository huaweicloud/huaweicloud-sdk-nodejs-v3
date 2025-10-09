import { MetricCondition } from './MetricCondition';


export class ScalingCondition {
    private 'condition_id'?: string;
    public duration?: number;
    public interval?: number;
    private 'metric_conditions'?: Array<MetricCondition>;
    public constructor() { 
    }
    public withConditionId(conditionId: string): ScalingCondition {
        this['condition_id'] = conditionId;
        return this;
    }
    public set conditionId(conditionId: string  | undefined) {
        this['condition_id'] = conditionId;
    }
    public get conditionId(): string | undefined {
        return this['condition_id'];
    }
    public withDuration(duration: number): ScalingCondition {
        this['duration'] = duration;
        return this;
    }
    public withInterval(interval: number): ScalingCondition {
        this['interval'] = interval;
        return this;
    }
    public withMetricConditions(metricConditions: Array<MetricCondition>): ScalingCondition {
        this['metric_conditions'] = metricConditions;
        return this;
    }
    public set metricConditions(metricConditions: Array<MetricCondition>  | undefined) {
        this['metric_conditions'] = metricConditions;
    }
    public get metricConditions(): Array<MetricCondition> | undefined {
        return this['metric_conditions'];
    }
}