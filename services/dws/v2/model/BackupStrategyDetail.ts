

export class BackupStrategyDetail {
    private 'policy_id'?: string;
    private 'policy_name'?: string;
    private 'backup_strategy'?: string;
    private 'backup_type'?: string;
    private 'backup_level'?: string;
    private 'next_fire_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withPolicyId(policyId: string): BackupStrategyDetail {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withPolicyName(policyName: string): BackupStrategyDetail {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withBackupStrategy(backupStrategy: string): BackupStrategyDetail {
        this['backup_strategy'] = backupStrategy;
        return this;
    }
    public set backupStrategy(backupStrategy: string  | undefined) {
        this['backup_strategy'] = backupStrategy;
    }
    public get backupStrategy(): string | undefined {
        return this['backup_strategy'];
    }
    public withBackupType(backupType: string): BackupStrategyDetail {
        this['backup_type'] = backupType;
        return this;
    }
    public set backupType(backupType: string  | undefined) {
        this['backup_type'] = backupType;
    }
    public get backupType(): string | undefined {
        return this['backup_type'];
    }
    public withBackupLevel(backupLevel: string): BackupStrategyDetail {
        this['backup_level'] = backupLevel;
        return this;
    }
    public set backupLevel(backupLevel: string  | undefined) {
        this['backup_level'] = backupLevel;
    }
    public get backupLevel(): string | undefined {
        return this['backup_level'];
    }
    public withNextFireTime(nextFireTime: string): BackupStrategyDetail {
        this['next_fire_time'] = nextFireTime;
        return this;
    }
    public set nextFireTime(nextFireTime: string  | undefined) {
        this['next_fire_time'] = nextFireTime;
    }
    public get nextFireTime(): string | undefined {
        return this['next_fire_time'];
    }
    public withUpdateTime(updateTime: string): BackupStrategyDetail {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}