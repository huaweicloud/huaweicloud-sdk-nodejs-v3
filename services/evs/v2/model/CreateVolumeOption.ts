

export class CreateVolumeOption {
    private 'availability_zone'?: string;
    private 'backup_id'?: string;
    public count?: number;
    public description?: string;
    private 'enterprise_project_id'?: string;
    public imageRef?: string;
    public metadata?: { [key: string]: string; };
    public multiattach?: boolean;
    public name?: string;
    public size?: number;
    private 'snapshot_id'?: string;
    private 'volume_type'?: CreateVolumeOptionVolumeTypeEnum | string;
    public tags?: { [key: string]: string; };
    public iops?: number;
    public throughput?: number;
    public constructor(availabilityZone?: string, size?: number, volumeType?: string) { 
        this['availability_zone'] = availabilityZone;
        this['size'] = size;
        this['volume_type'] = volumeType;
    }
    public withAvailabilityZone(availabilityZone: string): CreateVolumeOption {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withBackupId(backupId: string): CreateVolumeOption {
        this['backup_id'] = backupId;
        return this;
    }
    public set backupId(backupId: string  | undefined) {
        this['backup_id'] = backupId;
    }
    public get backupId(): string | undefined {
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
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
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
    public set snapshotId(snapshotId: string  | undefined) {
        this['snapshot_id'] = snapshotId;
    }
    public get snapshotId(): string | undefined {
        return this['snapshot_id'];
    }
    public withVolumeType(volumeType: CreateVolumeOptionVolumeTypeEnum | string): CreateVolumeOption {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: CreateVolumeOptionVolumeTypeEnum | string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): CreateVolumeOptionVolumeTypeEnum | string | undefined {
        return this['volume_type'];
    }
    public withTags(tags: { [key: string]: string; }): CreateVolumeOption {
        this['tags'] = tags;
        return this;
    }
    public withIops(iops: number): CreateVolumeOption {
        this['iops'] = iops;
        return this;
    }
    public withThroughput(throughput: number): CreateVolumeOption {
        this['throughput'] = throughput;
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
    ESSD = 'ESSD',
    GPSSD2 = 'GPSSD2',
    ESSD2 = 'ESSD2'
}
