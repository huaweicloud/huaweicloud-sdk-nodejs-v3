

export class RecyclePolicy {
    private 'retention_period_in_days'?: number;
    public constructor() { 
    }
    public withRetentionPeriodInDays(retentionPeriodInDays: number): RecyclePolicy {
        this['retention_period_in_days'] = retentionPeriodInDays;
        return this;
    }
    public set retentionPeriodInDays(retentionPeriodInDays: number  | undefined) {
        this['retention_period_in_days'] = retentionPeriodInDays;
    }
    public get retentionPeriodInDays(): number | undefined {
        return this['retention_period_in_days'];
    }
}