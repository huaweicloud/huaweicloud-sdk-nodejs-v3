

export class ListSnapshotsDetailsRequest {
    public marker?: string;
    private 'volume_id'?: string;
    private 'availability_zone'?: string;
    public limit?: string;
    public name?: string;
    public offset?: string;
    public status?: string;
    private 'sort_key'?: string;
    private 'sort_dir'?: string;
    public id?: string;
    public ids?: string;
    private 'snapshot_type'?: string;
    private 'enterprise_project_id'?: string;
    private 'tag_key'?: string;
    public tags?: string;
    private 'snapshot_chain_id'?: string;
    private 'snapshot_group_id'?: string;
    public constructor() { 
    }
    public withMarker(marker: string): ListSnapshotsDetailsRequest {
        this['marker'] = marker;
        return this;
    }
    public withVolumeId(volumeId: string): ListSnapshotsDetailsRequest {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string  | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId(): string | undefined {
        return this['volume_id'];
    }
    public withAvailabilityZone(availabilityZone: string): ListSnapshotsDetailsRequest {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withLimit(limit: string): ListSnapshotsDetailsRequest {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): ListSnapshotsDetailsRequest {
        this['name'] = name;
        return this;
    }
    public withOffset(offset: string): ListSnapshotsDetailsRequest {
        this['offset'] = offset;
        return this;
    }
    public withStatus(status: string): ListSnapshotsDetailsRequest {
        this['status'] = status;
        return this;
    }
    public withSortKey(sortKey: string): ListSnapshotsDetailsRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: string): ListSnapshotsDetailsRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): string | undefined {
        return this['sort_dir'];
    }
    public withId(id: string): ListSnapshotsDetailsRequest {
        this['id'] = id;
        return this;
    }
    public withIds(ids: string): ListSnapshotsDetailsRequest {
        this['ids'] = ids;
        return this;
    }
    public withSnapshotType(snapshotType: string): ListSnapshotsDetailsRequest {
        this['snapshot_type'] = snapshotType;
        return this;
    }
    public set snapshotType(snapshotType: string  | undefined) {
        this['snapshot_type'] = snapshotType;
    }
    public get snapshotType(): string | undefined {
        return this['snapshot_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListSnapshotsDetailsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTagKey(tagKey: string): ListSnapshotsDetailsRequest {
        this['tag_key'] = tagKey;
        return this;
    }
    public set tagKey(tagKey: string  | undefined) {
        this['tag_key'] = tagKey;
    }
    public get tagKey(): string | undefined {
        return this['tag_key'];
    }
    public withTags(tags: string): ListSnapshotsDetailsRequest {
        this['tags'] = tags;
        return this;
    }
    public withSnapshotChainId(snapshotChainId: string): ListSnapshotsDetailsRequest {
        this['snapshot_chain_id'] = snapshotChainId;
        return this;
    }
    public set snapshotChainId(snapshotChainId: string  | undefined) {
        this['snapshot_chain_id'] = snapshotChainId;
    }
    public get snapshotChainId(): string | undefined {
        return this['snapshot_chain_id'];
    }
    public withSnapshotGroupId(snapshotGroupId: string): ListSnapshotsDetailsRequest {
        this['snapshot_group_id'] = snapshotGroupId;
        return this;
    }
    public set snapshotGroupId(snapshotGroupId: string  | undefined) {
        this['snapshot_group_id'] = snapshotGroupId;
    }
    public get snapshotGroupId(): string | undefined {
        return this['snapshot_group_id'];
    }
}