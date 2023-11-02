

export class DiagnosisInfo {
    private 'metric_name'?: string;
    public count?: number;
    public constructor(metricName?: string, count?: number) { 
        this['metric_name'] = metricName;
        this['count'] = count;
    }
    public withMetricName(metricName: string): DiagnosisInfo {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withCount(count: number): DiagnosisInfo {
        this['count'] = count;
        return this;
    }
}