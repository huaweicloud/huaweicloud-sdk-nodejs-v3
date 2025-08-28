

export class UpdateRecycleBinPolicyOption {
    private 'retention_hour'?: number;
    private 'recycle_threshold_day'?: number;
    public constructor(retentionHour?: number, recycleThresholdDay?: number) { 
        this['retention_hour'] = retentionHour;
        this['recycle_threshold_day'] = recycleThresholdDay;
    }
    public withRetentionHour(retentionHour: number): UpdateRecycleBinPolicyOption {
        this['retention_hour'] = retentionHour;
        return this;
    }
    public set retentionHour(retentionHour: number  | undefined) {
        this['retention_hour'] = retentionHour;
    }
    public get retentionHour(): number | undefined {
        return this['retention_hour'];
    }
    public withRecycleThresholdDay(recycleThresholdDay: number): UpdateRecycleBinPolicyOption {
        this['recycle_threshold_day'] = recycleThresholdDay;
        return this;
    }
    public set recycleThresholdDay(recycleThresholdDay: number  | undefined) {
        this['recycle_threshold_day'] = recycleThresholdDay;
    }
    public get recycleThresholdDay(): number | undefined {
        return this['recycle_threshold_day'];
    }
}