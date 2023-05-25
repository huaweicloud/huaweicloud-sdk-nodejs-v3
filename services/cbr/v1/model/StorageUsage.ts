

export class StorageUsage {
    private 'backup_count'?: number | undefined;
    private 'backup_size'?: number | undefined;
    private 'resource_id': string | undefined;
    private 'resource_name': string | undefined;
    private 'resource_type': string | undefined;
    private 'backup_size_multiaz'?: number | undefined;
    public constructor(resourceId?: any, resourceName?: any, resourceType?: any) { 
        this['resource_id'] = resourceId;
        this['resource_name'] = resourceName;
        this['resource_type'] = resourceType;
    }
    public withBackupCount(backupCount: number): StorageUsage {
        this['backup_count'] = backupCount;
        return this;
    }
    public set backupCount(backupCount: number | undefined) {
        this['backup_count'] = backupCount;
    }
    public get backupCount() {
        return this['backup_count'];
    }
    public withBackupSize(backupSize: number): StorageUsage {
        this['backup_size'] = backupSize;
        return this;
    }
    public set backupSize(backupSize: number | undefined) {
        this['backup_size'] = backupSize;
    }
    public get backupSize() {
        return this['backup_size'];
    }
    public withResourceId(resourceId: string): StorageUsage {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): StorageUsage {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName() {
        return this['resource_name'];
    }
    public withResourceType(resourceType: string): StorageUsage {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withBackupSizeMultiaz(backupSizeMultiaz: number): StorageUsage {
        this['backup_size_multiaz'] = backupSizeMultiaz;
        return this;
    }
    public set backupSizeMultiaz(backupSizeMultiaz: number | undefined) {
        this['backup_size_multiaz'] = backupSizeMultiaz;
    }
    public get backupSizeMultiaz() {
        return this['backup_size_multiaz'];
    }
}