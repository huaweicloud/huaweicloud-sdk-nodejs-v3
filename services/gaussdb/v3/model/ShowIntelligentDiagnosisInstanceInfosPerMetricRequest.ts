

export class ShowIntelligentDiagnosisInstanceInfosPerMetricRequest {
    private 'X-Language'?: string;
    private 'metric_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(metricName?: string, offset?: number, limit?: number) { 
        this['metric_name'] = metricName;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withXLanguage(xLanguage: string): ShowIntelligentDiagnosisInstanceInfosPerMetricRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withMetricName(metricName: string): ShowIntelligentDiagnosisInstanceInfosPerMetricRequest {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withOffset(offset: number): ShowIntelligentDiagnosisInstanceInfosPerMetricRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowIntelligentDiagnosisInstanceInfosPerMetricRequest {
        this['limit'] = limit;
        return this;
    }
}