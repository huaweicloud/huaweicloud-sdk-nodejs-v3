

export class BackupVaultLockInfoRequest {
    private 'lock_retention_days'?: number;
    private 'lock_policy'?: boolean;
    public constructor(lockRetentionDays?: number, lockPolicy?: boolean) { 
        this['lock_retention_days'] = lockRetentionDays;
        this['lock_policy'] = lockPolicy;
    }
    public withLockRetentionDays(lockRetentionDays: number): BackupVaultLockInfoRequest {
        this['lock_retention_days'] = lockRetentionDays;
        return this;
    }
    public set lockRetentionDays(lockRetentionDays: number  | undefined) {
        this['lock_retention_days'] = lockRetentionDays;
    }
    public get lockRetentionDays(): number | undefined {
        return this['lock_retention_days'];
    }
    public withLockPolicy(lockPolicy: boolean): BackupVaultLockInfoRequest {
        this['lock_policy'] = lockPolicy;
        return this;
    }
    public set lockPolicy(lockPolicy: boolean  | undefined) {
        this['lock_policy'] = lockPolicy;
    }
    public get lockPolicy(): boolean | undefined {
        return this['lock_policy'];
    }
}