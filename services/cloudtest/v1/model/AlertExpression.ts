

export class AlertExpression {
    private 'expression_operator'?: string;
    private 'metric_name'?: string;
    private 'metric_operator'?: string;
    private 'metric_threshold'?: number;
    public constructor() { 
    }
    public withExpressionOperator(expressionOperator: string): AlertExpression {
        this['expression_operator'] = expressionOperator;
        return this;
    }
    public set expressionOperator(expressionOperator: string  | undefined) {
        this['expression_operator'] = expressionOperator;
    }
    public get expressionOperator(): string | undefined {
        return this['expression_operator'];
    }
    public withMetricName(metricName: string): AlertExpression {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withMetricOperator(metricOperator: string): AlertExpression {
        this['metric_operator'] = metricOperator;
        return this;
    }
    public set metricOperator(metricOperator: string  | undefined) {
        this['metric_operator'] = metricOperator;
    }
    public get metricOperator(): string | undefined {
        return this['metric_operator'];
    }
    public withMetricThreshold(metricThreshold: number): AlertExpression {
        this['metric_threshold'] = metricThreshold;
        return this;
    }
    public set metricThreshold(metricThreshold: number  | undefined) {
        this['metric_threshold'] = metricThreshold;
    }
    public get metricThreshold(): number | undefined {
        return this['metric_threshold'];
    }
}