

export class BackupPolicyInfo {
    private 'retention_days'?: number;
    public period?: string;
    private 'policy_type'?: string;
    public constructor(retentionDays?: number, period?: string, policyType?: string) { 
        this['retention_days'] = retentionDays;
        this['period'] = period;
        this['policy_type'] = policyType;
    }
    public withRetentionDays(retentionDays: number): BackupPolicyInfo {
        this['retention_days'] = retentionDays;
        return this;
    }
    public set retentionDays(retentionDays: number  | undefined) {
        this['retention_days'] = retentionDays;
    }
    public get retentionDays(): number | undefined {
        return this['retention_days'];
    }
    public withPeriod(period: string): BackupPolicyInfo {
        this['period'] = period;
        return this;
    }
    public withPolicyType(policyType: string): BackupPolicyInfo {
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