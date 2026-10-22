import { SnapshotChains } from './SnapshotChains';


export class SnapshotDetailV5 {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'volume_id'?: string;
    public size?: number;
    public status?: string;
    private 'project_id'?: string;
    private 'enterprise_project_id'?: string;
    public encrypted?: boolean;
    private 'cmk_id'?: string;
    public category?: string;
    private 'availability_zone'?: string;
    public tags?: { [key: string]: string; };
    private 'instant_access'?: boolean;
    private 'retention_at'?: string;
    private 'instant_access_retention_at'?: string;
    public incremental?: boolean;
    private 'snapshot_type'?: string;
    public progress?: string;
    private 'encrypt_algorithm'?: string;
    private 'snapshot_chains'?: Array<SnapshotChains>;
    private 'snapshot_group_id'?: string;
    public constructor(id?: string, name?: string, description?: string, createdAt?: string, updatedAt?: string, volumeId?: string, size?: number, status?: string, projectId?: string, enterpriseProjectId?: string, encrypted?: boolean, cmkId?: string, category?: string, availabilityZone?: string, tags?: { [key: string]: string; }, instantAccess?: boolean, retentionAt?: string, instantAccessRetentionAt?: string, incremental?: boolean, snapshotType?: string, progress?: string, encryptAlgorithm?: string, snapshotChains?: Array<SnapshotChains>) { 
        this['id'] = id;
        this['name'] = name;
        this['description'] = description;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['volume_id'] = volumeId;
        this['size'] = size;
        this['status'] = status;
        this['project_id'] = projectId;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['encrypted'] = encrypted;
        this['cmk_id'] = cmkId;
        this['category'] = category;
        this['availability_zone'] = availabilityZone;
        this['tags'] = tags;
        this['instant_access'] = instantAccess;
        this['retention_at'] = retentionAt;
        this['instant_access_retention_at'] = instantAccessRetentionAt;
        this['incremental'] = incremental;
        this['snapshot_type'] = snapshotType;
        this['progress'] = progress;
        this['encrypt_algorithm'] = encryptAlgorithm;
        this['snapshot_chains'] = snapshotChains;
    }
    public withId(id: string): SnapshotDetailV5 {
        this['id'] = id;
        return this;
    }
    public withName(name: string): SnapshotDetailV5 {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): SnapshotDetailV5 {
        this['description'] = description;
        return this;
    }
    public withCreatedAt(createdAt: string): SnapshotDetailV5 {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): SnapshotDetailV5 {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withVolumeId(volumeId: string): SnapshotDetailV5 {
        this['volume_id'] = volumeId;
        return this;
    }
    public set volumeId(volumeId: string  | undefined) {
        this['volume_id'] = volumeId;
    }
    public get volumeId(): string | undefined {
        return this['volume_id'];
    }
    public withSize(size: number): SnapshotDetailV5 {
        this['size'] = size;
        return this;
    }
    public withStatus(status: string): SnapshotDetailV5 {
        this['status'] = status;
        return this;
    }
    public withProjectId(projectId: string): SnapshotDetailV5 {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SnapshotDetailV5 {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEncrypted(encrypted: boolean): SnapshotDetailV5 {
        this['encrypted'] = encrypted;
        return this;
    }
    public withCmkId(cmkId: string): SnapshotDetailV5 {
        this['cmk_id'] = cmkId;
        return this;
    }
    public set cmkId(cmkId: string  | undefined) {
        this['cmk_id'] = cmkId;
    }
    public get cmkId(): string | undefined {
        return this['cmk_id'];
    }
    public withCategory(category: string): SnapshotDetailV5 {
        this['category'] = category;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): SnapshotDetailV5 {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withTags(tags: { [key: string]: string; }): SnapshotDetailV5 {
        this['tags'] = tags;
        return this;
    }
    public withInstantAccess(instantAccess: boolean): SnapshotDetailV5 {
        this['instant_access'] = instantAccess;
        return this;
    }
    public set instantAccess(instantAccess: boolean  | undefined) {
        this['instant_access'] = instantAccess;
    }
    public get instantAccess(): boolean | undefined {
        return this['instant_access'];
    }
    public withRetentionAt(retentionAt: string): SnapshotDetailV5 {
        this['retention_at'] = retentionAt;
        return this;
    }
    public set retentionAt(retentionAt: string  | undefined) {
        this['retention_at'] = retentionAt;
    }
    public get retentionAt(): string | undefined {
        return this['retention_at'];
    }
    public withInstantAccessRetentionAt(instantAccessRetentionAt: string): SnapshotDetailV5 {
        this['instant_access_retention_at'] = instantAccessRetentionAt;
        return this;
    }
    public set instantAccessRetentionAt(instantAccessRetentionAt: string  | undefined) {
        this['instant_access_retention_at'] = instantAccessRetentionAt;
    }
    public get instantAccessRetentionAt(): string | undefined {
        return this['instant_access_retention_at'];
    }
    public withIncremental(incremental: boolean): SnapshotDetailV5 {
        this['incremental'] = incremental;
        return this;
    }
    public withSnapshotType(snapshotType: string): SnapshotDetailV5 {
        this['snapshot_type'] = snapshotType;
        return this;
    }
    public set snapshotType(snapshotType: string  | undefined) {
        this['snapshot_type'] = snapshotType;
    }
    public get snapshotType(): string | undefined {
        return this['snapshot_type'];
    }
    public withProgress(progress: string): SnapshotDetailV5 {
        this['progress'] = progress;
        return this;
    }
    public withEncryptAlgorithm(encryptAlgorithm: string): SnapshotDetailV5 {
        this['encrypt_algorithm'] = encryptAlgorithm;
        return this;
    }
    public set encryptAlgorithm(encryptAlgorithm: string  | undefined) {
        this['encrypt_algorithm'] = encryptAlgorithm;
    }
    public get encryptAlgorithm(): string | undefined {
        return this['encrypt_algorithm'];
    }
    public withSnapshotChains(snapshotChains: Array<SnapshotChains>): SnapshotDetailV5 {
        this['snapshot_chains'] = snapshotChains;
        return this;
    }
    public set snapshotChains(snapshotChains: Array<SnapshotChains>  | undefined) {
        this['snapshot_chains'] = snapshotChains;
    }
    public get snapshotChains(): Array<SnapshotChains> | undefined {
        return this['snapshot_chains'];
    }
    public withSnapshotGroupId(snapshotGroupId: string): SnapshotDetailV5 {
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