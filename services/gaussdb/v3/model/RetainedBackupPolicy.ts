

export class RetainedBackupPolicy {
    private 'backup_retention_strategy'?: string;
    public constructor() { 
    }
    public withBackupRetentionStrategy(backupRetentionStrategy: string): RetainedBackupPolicy {
        this['backup_retention_strategy'] = backupRetentionStrategy;
        return this;
    }
    public set backupRetentionStrategy(backupRetentionStrategy: string  | undefined) {
        this['backup_retention_strategy'] = backupRetentionStrategy;
    }
    public get backupRetentionStrategy(): string | undefined {
        return this['backup_retention_strategy'];
    }
}