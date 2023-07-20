

export class RecyclePolicy {
    public enabled?: boolean;
    private 'retention_period_in_days'?: number;
    public constructor(enabled?: boolean) { 
        this['enabled'] = enabled;
    }
    public withEnabled(enabled: boolean): RecyclePolicy {
        this['enabled'] = enabled;
        return this;
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