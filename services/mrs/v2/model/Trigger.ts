

export class Trigger {
    private 'metric_name': string | undefined;
    private 'metric_value': string | undefined;
    private 'comparison_operator'?: string | undefined;
    private 'evaluation_periods': number | undefined;
    public constructor(metricName?: any, metricValue?: any, evaluationPeriods?: any) { 
        this['metric_name'] = metricName;
        this['metric_value'] = metricValue;
        this['evaluation_periods'] = evaluationPeriods;
    }
    public withMetricName(metricName: string): Trigger {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName() {
        return this['metric_name'];
    }
    public withMetricValue(metricValue: string): Trigger {
        this['metric_value'] = metricValue;
        return this;
    }
    public set metricValue(metricValue: string | undefined) {
        this['metric_value'] = metricValue;
    }
    public get metricValue() {
        return this['metric_value'];
    }
    public withComparisonOperator(comparisonOperator: string): Trigger {
        this['comparison_operator'] = comparisonOperator;
        return this;
    }
    public set comparisonOperator(comparisonOperator: string | undefined) {
        this['comparison_operator'] = comparisonOperator;
    }
    public get comparisonOperator() {
        return this['comparison_operator'];
    }
    public withEvaluationPeriods(evaluationPeriods: number): Trigger {
        this['evaluation_periods'] = evaluationPeriods;
        return this;
    }
    public set evaluationPeriods(evaluationPeriods: number | undefined) {
        this['evaluation_periods'] = evaluationPeriods;
    }
    public get evaluationPeriods() {
        return this['evaluation_periods'];
    }
}