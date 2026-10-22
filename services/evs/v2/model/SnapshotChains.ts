

export class SnapshotChains {
    public id?: string;
    private 'availability_zone'?: string;
    private 'snapshot_count'?: number;
    public capacity?: number;
    private 'project_id'?: string;
    private 'volume_id'?: string;
    public category?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
    }
    public withId(id: string): SnapshotChains {
        this['id'] = id;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): SnapshotChains {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withSnapshotCount(snapshotCount: number): SnapshotChains {
        this['snapshot_count'] = snapshotCount;
        return this;
    }
    public set snapshotCount(snapshotCount: number  | undefined) {
        this['snapshot_count'] = snapshotCount;
    }
    public get snapshotCount(): number | undefined {
        return this['snapshot_count'];
    }
    public withCapacity(capacity: number): SnapshotChains {
        this['capacity'] = capacity;
        return this;
    }
    public withProjectId(projectId: string): SnapshotChains {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withVolumeId(volumeId: string): SnapshotChains {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string  | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId(): string | undefined {
        return this['volume_id'];
    }
    public withCategory(category: string): SnapshotChains {
        this['category'] = category;
        return this;
    }
    public withCreatedAt(createdAt: string): SnapshotChains {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): SnapshotChains {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}