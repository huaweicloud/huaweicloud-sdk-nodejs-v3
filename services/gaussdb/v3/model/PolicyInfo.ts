

export class PolicyInfo {
    public period?: string;
    private 'retention_days'?: number;
    private 'policy_type'?: string;
    public constructor(period?: string, retentionDays?: number, policyType?: string) { 
        this['period'] = period;
        this['retention_days'] = retentionDays;
        this['policy_type'] = policyType;
    }
    public withPeriod(period: string): PolicyInfo {
        this['period'] = period;
        return this;
    }
    public withRetentionDays(retentionDays: number): PolicyInfo {
        this['retention_days'] = retentionDays;
        return this;
    }
    public set retentionDays(retentionDays: number  | undefined) {
        this['retention_days'] = retentionDays;
    }
    public get retentionDays(): number | undefined {
        return this['retention_days'];
    }
    public withPolicyType(policyType: string): PolicyInfo {
        this['policy_type'] = policyType;
        return this;
    }
    public set policyType(policyType: string  | undefined) {
        this['policy_type'] = policyType;
    }
    public get policyType(): string | undefined {
        return this['policy_type'];
    }
}