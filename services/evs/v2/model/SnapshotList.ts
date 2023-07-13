

export class SnapshotList {
    public id: string;
    public status: string;
    public name?: string;
    public description?: string;
    private 'created_at': string | undefined;
    private 'updated_at'?: string | undefined;
    public metadata?: { [key: string]: string; };
    private 'volume_id': string | undefined;
    public size: number;
    private 'os-extended-snapshot-attributes:project_id': string | undefined;
    private 'os-extended-snapshot-attributes:progress': string | undefined;
    private 'dedicated_storage_id'?: string | undefined;
    private 'dedicated_storage_name'?: string | undefined;
    private 'service_type': string | undefined;
    public constructor(id?: any, status?: any, createdAt?: any, volumeId?: any, size?: any, osExtendedSnapshotAttributesProjectId?: any, osExtendedSnapshotAttributesProgress?: any, serviceType?: any) { 
        this['id'] = id;
        this['status'] = status;
        this['created_at'] = createdAt;
        this['volume_id'] = volumeId;
        this['size'] = size;
        this['os-extended-snapshot-attributes:project_id'] = osExtendedSnapshotAttributesProjectId;
        this['os-extended-snapshot-attributes:progress'] = osExtendedSnapshotAttributesProgress;
        this['service_type'] = serviceType;
    }
    public withId(id: string): SnapshotList {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): SnapshotList {
        this['status'] = status;
        return this;
    }
    public withName(name: string): SnapshotList {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): SnapshotList {
        this['description'] = description;
        return this;
    }
    public withCreatedAt(createdAt: string): SnapshotList {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): SnapshotList {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withMetadata(metadata: { [key: string]: string; }): SnapshotList {
        this['metadata'] = metadata;
        return this;
    }
    public withVolumeId(volumeId: string): SnapshotList {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId() {
        return this['volume_id'];
    }
    public withSize(size: number): SnapshotList {
        this['size'] = size;
        return this;
    }
    public withOsExtendedSnapshotAttributesProjectId(osExtendedSnapshotAttributesProjectId: string): SnapshotList {
        this['os-extended-snapshot-attributes:project_id'] = osExtendedSnapshotAttributesProjectId;
        return this;
    }
    public set osExtendedSnapshotAttributesProjectId(osExtendedSnapshotAttributesProjectId: string | undefined) {
        this['os-extended-snapshot-attributes:project_id'] = osExtendedSnapshotAttributesProjectId;
    }
    public get osExtendedSnapshotAttributesProjectId() {
        return this['os-extended-snapshot-attributes:project_id'];
    }
    public withOsExtendedSnapshotAttributesProgress(osExtendedSnapshotAttributesProgress: string): SnapshotList {
        this['os-extended-snapshot-attributes:progress'] = osExtendedSnapshotAttributesProgress;
        return this;
    }
    public set osExtendedSnapshotAttributesProgress(osExtendedSnapshotAttributesProgress: string | undefined) {
        this['os-extended-snapshot-attributes:progress'] = osExtendedSnapshotAttributesProgress;
    }
    public get osExtendedSnapshotAttributesProgress() {
        return this['os-extended-snapshot-attributes:progress'];
    }
    public withDedicatedStorageId(dedicatedStorageId: string): SnapshotList {
        this['dedicated_storage_id'] = dedicatedStorageId;
        return this;
    }
    public set dedicatedStorageId(dedicatedStorageId: string | undefined) {
        this['dedicated_storage_id'] = dedicatedStorageId;
    }
    public get dedicatedStorageId() {
        return this['dedicated_storage_id'];
    }
    public withDedicatedStorageName(dedicatedStorageName: string): SnapshotList {
        this['dedicated_storage_name'] = dedicatedStorageName;
        return this;
    }
    public set dedicatedStorageName(dedicatedStorageName: string | undefined) {
        this['dedicated_storage_name'] = dedicatedStorageName;
    }
    public get dedicatedStorageName() {
        return this['dedicated_storage_name'];
    }
    public withServiceType(serviceType: string): SnapshotList {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType() {
        return this['service_type'];
    }
}