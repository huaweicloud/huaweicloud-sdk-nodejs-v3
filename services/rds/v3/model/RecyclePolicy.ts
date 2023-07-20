

export class RecyclePolicy {
    private 'retention_period_in_days'?: string;
    public constructor() { 
    }
    public withRetentionPeriodInDays(retentionPeriodInDays: string): RecyclePolicy {
        this['retention_period_in_days'] = retentionPeriodInDays;
        return this;
    }
    public set retentionPeriodInDays(retentionPeriodInDays: string  | undefined) {
        this['retention_period_in_days'] = retentionPeriodInDays;
    }
    public get retentionPeriodInDays(): string | undefined {
        return this['retention_period_in_days'];
    }
}