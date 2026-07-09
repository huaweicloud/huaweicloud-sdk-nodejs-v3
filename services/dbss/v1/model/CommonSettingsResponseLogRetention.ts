

export class CommonSettingsResponseLogRetention {
    private 'retention_days'?: number;
    private 'range_days_min'?: number;
    private 'range_days_max'?: number;
    public constructor() { 
    }
    public withRetentionDays(retentionDays: number): CommonSettingsResponseLogRetention {
        this['retention_days'] = retentionDays;
        return this;
    }
    public set retentionDays(retentionDays: number  | undefined) {
        this['retention_days'] = retentionDays;
    }
    public get retentionDays(): number | undefined {
        return this['retention_days'];
    }
    public withRangeDaysMin(rangeDaysMin: number): CommonSettingsResponseLogRetention {
        this['range_days_min'] = rangeDaysMin;
        return this;
    }
    public set rangeDaysMin(rangeDaysMin: number  | undefined) {
        this['range_days_min'] = rangeDaysMin;
    }
    public get rangeDaysMin(): number | undefined {
        return this['range_days_min'];
    }
    public withRangeDaysMax(rangeDaysMax: number): CommonSettingsResponseLogRetention {
        this['range_days_max'] = rangeDaysMax;
        return this;
    }
    public set rangeDaysMax(rangeDaysMax: number  | undefined) {
        this['range_days_max'] = rangeDaysMax;
    }
    public get rangeDaysMax(): number | undefined {
        return this['range_days_max'];
    }
}