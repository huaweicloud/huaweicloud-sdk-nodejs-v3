

export class BackupSync {
    private 'backup_id'?: string;
    private 'backup_name'?: string;
    private 'bucket_name'?: string;
    private 'image_path'?: string;
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    private 'resource_type'?: string;
    private 'created_at'?: number;
    public constructor(backupId?: string, backupName?: string, bucketName?: string, imagePath?: string, resourceId?: string, resourceName?: string, resourceType?: string, createdAt?: number) { 
        this['backup_id'] = backupId;
        this['backup_name'] = backupName;
        this['bucket_name'] = bucketName;
        this['image_path'] = imagePath;
        this['resource_id'] = resourceId;
        this['resource_name'] = resourceName;
        this['resource_type'] = resourceType;
        this['created_at'] = createdAt;
    }
    public withBackupId(backupId: string): BackupSync {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
        return this['backup_id'];
    }
    public withBackupName(backupName: string): BackupSync {
        this['backup_name'] = backupName;
        return this;
    }
    public set backupName(backupName: string  | undefined) {
        this['backup_name'] = backupName;
    }
    public get backupName(): string | undefined {
        return this['backup_name'];
    }
    public withBucketName(bucketName: string): BackupSync {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withImagePath(imagePath: string): BackupSync {
        this['image_path'] = imagePath;
        return this;
    }
    public set imagePath(imagePath: string  | undefined) {
        this['image_path'] = imagePath;
    }
    public get imagePath(): string | undefined {
        return this['image_path'];
    }
    public withResourceId(resourceId: string): BackupSync {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): BackupSync {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withResourceType(resourceType: string): BackupSync {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withCreatedAt(createdAt: number): BackupSync {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: number  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): number | undefined {
        return this['created_at'];
    }
}