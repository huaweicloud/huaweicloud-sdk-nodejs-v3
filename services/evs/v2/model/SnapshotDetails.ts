

export class SnapshotDetails {
    public id?: string;
    public status?: string;
    public name?: string;
    public description?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public metadata?: object;
    private 'volume_id'?: string;
    public size?: number;
    private 'os-extended-snapshot-attributes:project_id'?: string;
    private 'os-extended-snapshot-attributes:progress'?: string;
    public constructor() { 
    }
    public withId(id: string): SnapshotDetails {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): SnapshotDetails {
        this['status'] = status;
        return this;
    }
    public withName(name: string): SnapshotDetails {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): SnapshotDetails {
        this['description'] = description;
        return this;
    }
    public withCreatedAt(createdAt: string): SnapshotDetails {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): SnapshotDetails {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withMetadata(metadata: object): SnapshotDetails {
        this['metadata'] = metadata;
        return this;
    }
    public withVolumeId(volumeId: string): SnapshotDetails {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string  | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId(): string | undefined {
        return this['volume_id'];
    }
    public withSize(size: number): SnapshotDetails {
        this['size'] = size;
        return this;
    }
    public withOsExtendedSnapshotAttributesProjectId(osExtendedSnapshotAttributesProjectId: string): SnapshotDetails {
        this['os-extended-snapshot-attributes:project_id'] = osExtendedSnapshotAttributesProjectId;
        return this;
    }
    public set osExtendedSnapshotAttributesProjectId(osExtendedSnapshotAttributesProjectId: string  | undefined) {
        this['os-extended-snapshot-attributes:project_id'] = osExtendedSnapshotAttributesProjectId;
    }
    public get osExtendedSnapshotAttributesProjectId(): string | undefined {
        return this['os-extended-snapshot-attributes:project_id'];
    }
    public withOsExtendedSnapshotAttributesProgress(osExtendedSnapshotAttributesProgress: string): SnapshotDetails {
        this['os-extended-snapshot-attributes:progress'] = osExtendedSnapshotAttributesProgress;
        return this;
    }
    public set osExtendedSnapshotAttributesProgress(osExtendedSnapshotAttributesProgress: string  | undefined) {
        this['os-extended-snapshot-attributes:progress'] = osExtendedSnapshotAttributesProgress;
    }
    public get osExtendedSnapshotAttributesProgress(): string | undefined {
        return this['os-extended-snapshot-attributes:progress'];
    }
}