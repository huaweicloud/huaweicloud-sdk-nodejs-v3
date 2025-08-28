

export class HealthReportSingleValueStat {
    public metric?: string;
    public value?: number;
    private 'max_value'?: number;
    public normalized?: number;
    public stage?: string;
    public timestamp?: number;
    public constructor(metric?: string, value?: number, maxValue?: number, normalized?: number, stage?: string, timestamp?: number) { 
        this['metric'] = metric;
        this['value'] = value;
        this['max_value'] = maxValue;
        this['normalized'] = normalized;
        this['stage'] = stage;
        this['timestamp'] = timestamp;
    }
    public withMetric(metric: string): HealthReportSingleValueStat {
        this['metric'] = metric;
        return this;
    }
    public withValue(value: number): HealthReportSingleValueStat {
        this['value'] = value;
        return this;
    }
    public withMaxValue(maxValue: number): HealthReportSingleValueStat {
        this['max_value'] = maxValue;
        return this;
    }
    public set maxValue(maxValue: number  | undefined) {
        this['max_value'] = maxValue;
    }
    public get maxValue(): number | undefined {
        return this['max_value'];
    }
    public withNormalized(normalized: number): HealthReportSingleValueStat {
        this['normalized'] = normalized;
        return this;
    }
    public withStage(stage: string): HealthReportSingleValueStat {
        this['stage'] = stage;
        return this;
    }
    public withTimestamp(timestamp: number): HealthReportSingleValueStat {
        this['timestamp'] = timestamp;
        return this;
    }
}