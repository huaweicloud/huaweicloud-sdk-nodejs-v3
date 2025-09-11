

export class RiskBackupConfig {
    private 'backup_domain_id'?: string;
    private 'bucket_name'?: string;
    private 'bucket_root_path'?: string;
    public constructor(bucketName?: string) { 
        this['bucket_name'] = bucketName;
    }
    public withBackupDomainId(backupDomainId: string): RiskBackupConfig {
        this['backup_domain_id'] = backupDomainId;
        return this;
    }
    public set backupDomainId(backupDomainId: string  | undefined) {
        this['backup_domain_id'] = backupDomainId;
    }
    public get backupDomainId(): string | undefined {
        return this['backup_domain_id'];
    }
    public withBucketName(bucketName: string): RiskBackupConfig {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withBucketRootPath(bucketRootPath: string): RiskBackupConfig {
        this['bucket_root_path'] = bucketRootPath;
        return this;
    }
    public set bucketRootPath(bucketRootPath: string  | undefined) {
        this['bucket_root_path'] = bucketRootPath;
    }
    public get bucketRootPath(): string | undefined {
        return this['bucket_root_path'];
    }
}