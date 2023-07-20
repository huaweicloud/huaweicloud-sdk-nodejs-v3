

export class StorageUsage {
    private 'backup_count'?: number;
    private 'backup_size'?: number;
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    private 'resource_type'?: string;
    private 'backup_size_multiaz'?: number;
    public constructor(resourceId?: string, resourceName?: string, resourceType?: string) { 
        this['resource_id'] = resourceId;
        this['resource_name'] = resourceName;
        this['resource_type'] = resourceType;
    }
    public withBackupCount(backupCount: number): StorageUsage {
        this['backup_count'] = backupCount;
        return this;
    }
    public set backupCount(backupCount: number  | undefined) {
        this['backup_count'] = backupCount;
    }
    public get backupCount(): number | undefined {
        return this['backup_count'];
    }
    public withBackupSize(backupSize: number): StorageUsage {
        this['backup_size'] = backupSize;
        return this;
    }
    public set backupSize(backupSize: number  | undefined) {
        this['backup_size'] = backupSize;
    }
    public get backupSize(): number | undefined {
        return this['backup_size'];
    }
    public withResourceId(resourceId: string): StorageUsage {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): StorageUsage {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withResourceType(resourceType: string): StorageUsage {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withBackupSizeMultiaz(backupSizeMultiaz: number): StorageUsage {
        this['backup_size_multiaz'] = backupSizeMultiaz;
        return this;
    }
    public set backupSizeMultiaz(backupSizeMultiaz: number  | undefined) {
        this['backup_size_multiaz'] = backupSizeMultiaz;
    }
    public get backupSizeMultiaz(): number | undefined {
        return this['backup_size_multiaz'];
    }
}