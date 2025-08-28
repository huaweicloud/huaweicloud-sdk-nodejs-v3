

export class HealthReportRatioStat {
    public metric?: string;
    private 'max_value'?: number;
    private 'critical_ratio'?: number;
    private 'medium_ratio'?: number;
    private 'light_ratio'?: number;
    public constructor(metric?: string, maxValue?: number, criticalRatio?: number, mediumRatio?: number, lightRatio?: number) { 
        this['metric'] = metric;
        this['max_value'] = maxValue;
        this['critical_ratio'] = criticalRatio;
        this['medium_ratio'] = mediumRatio;
        this['light_ratio'] = lightRatio;
    }
    public withMetric(metric: string): HealthReportRatioStat {
        this['metric'] = metric;
        return this;
    }
    public withMaxValue(maxValue: number): HealthReportRatioStat {
        this['max_value'] = maxValue;
        return this;
    }
    public set maxValue(maxValue: number  | undefined) {
        this['max_value'] = maxValue;
    }
    public get maxValue(): number | undefined {
        return this['max_value'];
    }
    public withCriticalRatio(criticalRatio: number): HealthReportRatioStat {
        this['critical_ratio'] = criticalRatio;
        return this;
    }
    public set criticalRatio(criticalRatio: number  | undefined) {
        this['critical_ratio'] = criticalRatio;
    }
    public get criticalRatio(): number | undefined {
        return this['critical_ratio'];
    }
    public withMediumRatio(mediumRatio: number): HealthReportRatioStat {
        this['medium_ratio'] = mediumRatio;
        return this;
    }
    public set mediumRatio(mediumRatio: number  | undefined) {
        this['medium_ratio'] = mediumRatio;
    }
    public get mediumRatio(): number | undefined {
        return this['medium_ratio'];
    }
    public withLightRatio(lightRatio: number): HealthReportRatioStat {
        this['light_ratio'] = lightRatio;
        return this;
    }
    public set lightRatio(lightRatio: number  | undefined) {
        this['light_ratio'] = lightRatio;
    }
    public get lightRatio(): number | undefined {
        return this['light_ratio'];
    }
}