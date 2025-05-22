

export class RecycleBinPolicy {
    private 'recycle_threshold_hour'?: number;
    private 'retention_hour'?: number;
    public constructor() { 
    }
    public withRecycleThresholdHour(recycleThresholdHour: number): RecycleBinPolicy {
        this['recycle_threshold_hour'] = recycleThresholdHour;
        return this;
    }
    public set recycleThresholdHour(recycleThresholdHour: number  | undefined) {
        this['recycle_threshold_hour'] = recycleThresholdHour;
    }
    public get recycleThresholdHour(): number | undefined {
        return this['recycle_threshold_hour'];
    }
    public withRetentionHour(retentionHour: number): RecycleBinPolicy {
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