

export class UpdateLogRetention {
    private 'retention_days'?: number;
    public constructor() { 
    }
    public withRetentionDays(retentionDays: number): UpdateLogRetention {
        this['retention_days'] = retentionDays;
        return this;
    }
    public set retentionDays(retentionDays: number  | undefined) {
        this['retention_days'] = retentionDays;
    }
    public get retentionDays(): number | undefined {
        return this['retention_days'];
    }
}