

export class CreateSubscriptionInfoInitializeInfo {
    private 'file_source'?: string;
    private 'backup_id'?: string;
    private 'bucket_name'?: string;
    private 'file_path'?: string;
    private 'file_name'?: string;
    private 'overwrite_restore'?: boolean;
    public constructor() { 
    }
    public withFileSource(fileSource: string): CreateSubscriptionInfoInitializeInfo {
        this['file_source'] = fileSource;
        return this;
    }
    public set fileSource(fileSource: string  | undefined) {
        this['file_source'] = fileSource;
    }
    public get fileSource(): string | undefined {
        return this['file_source'];
    }
    public withBackupId(backupId: string): CreateSubscriptionInfoInitializeInfo {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withBucketName(bucketName: string): CreateSubscriptionInfoInitializeInfo {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withFilePath(filePath: string): CreateSubscriptionInfoInitializeInfo {
        this['file_path'] = filePath;
        return this;
    }
    public set filePath(filePath: string  | undefined) {
        this['file_path'] = filePath;
    }
    public get filePath(): string | undefined {
        return this['file_path'];
    }
    public withFileName(fileName: string): CreateSubscriptionInfoInitializeInfo {
        this['file_name'] = fileName;
        return this;
    }
    public set fileName(fileName: string  | undefined) {
        this['file_name'] = fileName;
    }
    public get fileName(): string | undefined {
        return this['file_name'];
    }
    public withOverwriteRestore(overwriteRestore: boolean): CreateSubscriptionInfoInitializeInfo {
        this['overwrite_restore'] = overwriteRestore;
        return this;
    }
    public set overwriteRestore(overwriteRestore: boolean  | undefined) {
        this['overwrite_restore'] = overwriteRestore;
    }
    public get overwriteRestore(): boolean | undefined {
        return this['overwrite_restore'];
    }
}