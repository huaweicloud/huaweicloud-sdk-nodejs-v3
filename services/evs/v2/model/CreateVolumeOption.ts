

export class CreateVolumeOption {
    private 'availability_zone': string | undefined;
    private 'backup_id'?: string | undefined;
    public count?: number;
    public description?: string;
    private 'enterprise_project_id'?: string | undefined;
    public imageRef?: string;
    public metadata?: { [key: string]: string; };
    public multiattach?: boolean;
    public name?: string;
    public size: number;
    private 'snapshot_id'?: string | undefined;
    private 'volume_type': CreateVolumeOptionVolumeTypeEnum | undefined;
    public tags?: { [key: string]: string; };
    public constructor(availabilityZone?: any, size?: any, volumeType?: any) { 
        this['availability_zone'] = availabilityZone;
        this['size'] = size;
        this['volume_type'] = volumeType;
    }
    public withAvailabilityZone(availabilityZone: string): CreateVolumeOption {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone() {
        return this['availability_zone'];
    }
    public withBackupId(backupId: string): CreateVolumeOption {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId() {
        return this['backup_id'];
    }
    public withCount(count: number): CreateVolumeOption {
        this['count'] = count;
        return this;
    }
    public withDescription(description: string): CreateVolumeOption {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateVolumeOption {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withImageRef(imageRef: string): CreateVolumeOption {
        this['imageRef'] = imageRef;
        return this;
    }
    public withMetadata(metadata: { [key: string]: string; }): CreateVolumeOption {
        this['metadata'] = metadata;
        return this;
    }
    public withMultiattach(multiattach: boolean): CreateVolumeOption {
        this['multiattach'] = multiattach;
        return this;
    }
    public withName(name: string): CreateVolumeOption {
        this['name'] = name;
        return this;
    }
    public withSize(size: number): CreateVolumeOption {
        this['size'] = size;
        return this;
    }
    public withSnapshotId(snapshotId: string): CreateVolumeOption {
        this['snapshot_id'] = snapshotId;
        return this;
    }
    public set snapshotId(snapshotId: string | undefined) {
        this['snapshot_id'] = snapshotId;
    }
    public get snapshotId() {
        return this['snapshot_id'];
    }
    public withVolumeType(volumeType: CreateVolumeOptionVolumeTypeEnum): CreateVolumeOption {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: CreateVolumeOptionVolumeTypeEnum | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType() {
        return this['volume_type'];
    }
    public withTags(tags: { [key: string]: string; }): CreateVolumeOption {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateVolumeOptionVolumeTypeEnum {
    SSD = 'SSD',
    GPSSD = 'GPSSD',
    SAS = 'SAS',
    SATA = 'SATA',
    ESSD = 'ESSD'
}
