

export class RecycleBinPolicys {
    private 'recycle_threshold_day'?: number;
    private 'retention_hour'?: number;
    public constructor(recycleThresholdDay?: number) { 
        this['recycle_threshold_day'] = recycleThresholdDay;
    }
    public withRecycleThresholdDay(recycleThresholdDay: number): RecycleBinPolicys {
        this['recycle_threshold_day'] = recycleThresholdDay;
        return this;
    }
    public set recycleThresholdDay(recycleThresholdDay: number  | undefined) {
        this['recycle_threshold_day'] = recycleThresholdDay;
    }
    public get recycleThresholdDay(): number | undefined {
        return this['recycle_threshold_day'];
    }
    public withRetentionHour(retentionHour: number): RecycleBinPolicys {
        this['retention_hour'] = retentionHour;
        return this;
    }
    public set retentionHour(retentionHour: number  | undefined) {
        this['retention_hour'] = retentionHour;
    }
    public get retentionHour(): number | undefined {
        return this['retention_hour'];
    }
}