

export class BackupSync {
    private 'backup_id': string | undefined;
    private 'backup_name': string | undefined;
    private 'bucket_name': string | undefined;
    private 'image_path': string | undefined;
    private 'resource_id': string | undefined;
    private 'resource_name': string | undefined;
    private 'resource_type': string | undefined;
    private 'created_at': number | undefined;
    public constructor(backupId?: any, backupName?: any, bucketName?: any, imagePath?: any, resourceId?: any, resourceName?: any, resourceType?: any, createdAt?: any) { 
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
    public set backupId(backupId: string | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId() {
        return this['backup_id'];
    }
    public withBackupName(backupName: string): BackupSync {
        this['backup_name'] = backupName;
        return this;
    }
    public set backupName(backupName: string | undefined) {
        this['backup_name'] = backupName;
    }
    public get backupName() {
        return this['backup_name'];
    }
    public withBucketName(bucketName: string): BackupSync {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName() {
        return this['bucket_name'];
    }
    public withImagePath(imagePath: string): BackupSync {
        this['image_path'] = imagePath;
        return this;
    }
    public set imagePath(imagePath: string | undefined) {
        this['image_path'] = imagePath;
    }
    public get imagePath() {
        return this['image_path'];
    }
    public withResourceId(resourceId: string): BackupSync {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): BackupSync {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName() {
        return this['resource_name'];
    }
    public withResourceType(resourceType: string): BackupSync {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withCreatedAt(createdAt: number): BackupSync {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: number | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
}