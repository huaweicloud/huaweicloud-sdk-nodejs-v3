

export class CountSnapshotsRequest {
    private 'volume_id'?: string;
    private 'availability_zone'?: string;
    public name?: string;
    public status?: string;
    public id?: string;
    private 'snapshot_type'?: string;
    private 'enterprise_project_id'?: string;
    private 'tag_key'?: string;
    public tags?: string;
    private 'snapshot_chain_id'?: string;
    public constructor() { 
    }
    public withVolumeId(volumeId: string): CountSnapshotsRequest {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string  | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId(): string | undefined {
        return this['volume_id'];
    }
    public withAvailabilityZone(availabilityZone: string): CountSnapshotsRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withName(name: string): CountSnapshotsRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): CountSnapshotsRequest {
        this['status'] = status;
        return this;
    }
    public withId(id: string): CountSnapshotsRequest {
        this['id'] = id;
        return this;
    }
    public withSnapshotType(snapshotType: string): CountSnapshotsRequest {
        this['snapshot_type'] = snapshotType;
        return this;
    }
    public set snapshotType(snapshotType: string  | undefined) {
        this['snapshot_type'] = snapshotType;
    }
    public get snapshotType(): string | undefined {
        return this['snapshot_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CountSnapshotsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTagKey(tagKey: string): CountSnapshotsRequest {
        this['tag_key'] = tagKey;
        return this;
    }
    public set tagKey(tagKey: string  | undefined) {
        this['tag_key'] = tagKey;
    }
    public get tagKey(): string | undefined {
        return this['tag_key'];
    }
    public withTags(tags: string): CountSnapshotsRequest {
        this['tags'] = tags;
        return this;
    }
    public withSnapshotChainId(snapshotChainId: string): CountSnapshotsRequest {
        this['snapshot_chain_id'] = snapshotChainId;
        return this;
    }
    public set snapshotChainId(snapshotChainId: string  | undefined) {
        this['snapshot_chain_id'] = snapshotChainId;
    }
    public get snapshotChainId(): string | undefined {
        return this['snapshot_chain_id'];
    }
}