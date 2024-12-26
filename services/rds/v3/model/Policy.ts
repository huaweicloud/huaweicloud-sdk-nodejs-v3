

export class Policy {
    public period?: string;
    private 'retention_days'?: number;
    public constructor(period?: string, retentionDays?: number) { 
        this['period'] = period;
        this['retention_days'] = retentionDays;
    }
    public withPeriod(period: string): Policy {
        this['period'] = period;
        return this;
    }
    public withRetentionDays(retentionDays: number): Policy {
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