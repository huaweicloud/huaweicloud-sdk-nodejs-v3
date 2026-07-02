

export class BackupVaultLockInfo {
    private 'lock_retention_days'?: number;
    private 'lock_policy'?: boolean;
    private 'lock_start_time'?: number;
    private 'lock_end_time'?: number;
    public constructor(lockRetentionDays?: number, lockPolicy?: boolean, lockStartTime?: number, lockEndTime?: number) { 
        this['lock_retention_days'] = lockRetentionDays;
        this['lock_policy'] = lockPolicy;
        this['lock_start_time'] = lockStartTime;
        this['lock_end_time'] = lockEndTime;
    }
    public withLockRetentionDays(lockRetentionDays: number): BackupVaultLockInfo {
        this['lock_retention_days'] = lockRetentionDays;
        return this;
    }
    public set lockRetentionDays(lockRetentionDays: number  | undefined) {
        this['lock_retention_days'] = lockRetentionDays;
    }
    public get lockRetentionDays(): number | undefined {
        return this['lock_retention_days'];
    }
    public withLockPolicy(lockPolicy: boolean): BackupVaultLockInfo {
        this['lock_policy'] = lockPolicy;
        return this;
    }
    public set lockPolicy(lockPolicy: boolean  | undefined) {
        this['lock_policy'] = lockPolicy;
    }
    public get lockPolicy(): boolean | undefined {
        return this['lock_policy'];
    }
    public withLockStartTime(lockStartTime: number): BackupVaultLockInfo {
        this['lock_start_time'] = lockStartTime;
        return this;
    }
    public set lockStartTime(lockStartTime: number  | undefined) {
        this['lock_start_time'] = lockStartTime;
    }
    public get lockStartTime(): number | undefined {
        return this['lock_start_time'];
    }
    public withLockEndTime(lockEndTime: number): BackupVaultLockInfo {
        this['lock_end_time'] = lockEndTime;
        return this;
    }
    public set lockEndTime(lockEndTime: number  | undefined) {
        this['lock_end_time'] = lockEndTime;
    }
    public get lockEndTime(): number | undefined {
        return this['lock_end_time'];
    }
}