

export class DesktopMetricNotifyRecord {
    private 'match_count'?: number;
    private 'metric_name'?: string;
    public threshold?: number;
    private 'comparison_operator'?: string;
    public constructor() { 
    }
    public withMatchCount(matchCount: number): DesktopMetricNotifyRecord {
        this['match_count'] = matchCount;
        return this;
    }
    public set matchCount(matchCount: number  | undefined) {
        this['match_count'] = matchCount;
    }
    public get matchCount(): number | undefined {
        return this['match_count'];
    }
    public withMetricName(metricName: string): DesktopMetricNotifyRecord {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withThreshold(threshold: number): DesktopMetricNotifyRecord {
        this['threshold'] = threshold;
        return this;
    }
    public withComparisonOperator(comparisonOperator: string): DesktopMetricNotifyRecord {
        this['comparison_operator'] = comparisonOperator;
        return this;
    }
    public set comparisonOperator(comparisonOperator: string  | undefined) {
        this['comparison_operator'] = comparisonOperator;
    }
    public get comparisonOperator(): string | undefined {
        return this['comparison_operator'];
    }
}