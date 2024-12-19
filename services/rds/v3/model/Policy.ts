

export class Policy {
    public period?: string;
    private 'retention_days'?: string;
    public constructor(period?: string, retentionDays?: string) { 
        this['period'] = period;
        this['retention_days'] = retentionDays;
    }
    public withPeriod(period: string): Policy {
        this['period'] = period;
        return this;
    }
    public withRetentionDays(retentionDays: string): Policy {
        this['retention_days'] = retentionDays;
        return this;
    }
    public set retentionDays(retentionDays: string  | undefined) {
        this['retention_days'] = retentionDays;
    }
    public get retentionDays(): string | undefined {
        return this['retention_days'];
    }
}