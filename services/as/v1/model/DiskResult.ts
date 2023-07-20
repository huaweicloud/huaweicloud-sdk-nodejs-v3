import { MetaData } from './MetaData';


export class DiskResult {
    public size?: number;
    private 'volume_type'?: DiskResultVolumeTypeEnum | string;
    private 'disk_type'?: DiskResultDiskTypeEnum | string;
    private 'dedicated_storage_id'?: string;
    private 'data_disk_image_id'?: string;
    private 'snapshot_id'?: string;
    public metadata?: MetaData;
    public constructor() { 
    }
    public withSize(size: number): DiskResult {
        this['size'] = size;
        return this;
    }
    public withVolumeType(volumeType: DiskResultVolumeTypeEnum | string): DiskResult {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: DiskResultVolumeTypeEnum | string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): DiskResultVolumeTypeEnum | string | undefined {
        return this['volume_type'];
    }
    public withDiskType(diskType: DiskResultDiskTypeEnum | string): DiskResult {
        this['disk_type'] = diskType;
        return this;
    }
    public set diskType(diskType: DiskResultDiskTypeEnum | string  | undefined) {
        this['disk_type'] = diskType;
    }
    public get diskType(): DiskResultDiskTypeEnum | string | undefined {
        return this['disk_type'];
    }
    public withDedicatedStorageId(dedicatedStorageId: string): DiskResult {
        this['dedicated_storage_id'] = dedicatedStorageId;
        return this;
    }
    public set dedicatedStorageId(dedicatedStorageId: string  | undefined) {
        this['dedicated_storage_id'] = dedicatedStorageId;
    }
    public get dedicatedStorageId(): string | undefined {
        return this['dedicated_storage_id'];
    }
    public withDataDiskImageId(dataDiskImageId: string): DiskResult {
        this['data_disk_image_id'] = dataDiskImageId;
        return this;
    }
    public set dataDiskImageId(dataDiskImageId: string  | undefined) {
        this['data_disk_image_id'] = dataDiskImageId;
    }
    public get dataDiskImageId(): string | undefined {
        return this['data_disk_image_id'];
    }
    public withSnapshotId(snapshotId: string): DiskResult {
        this['snapshot_id'] = snapshotId;
        return this;
    }
    public set snapshotId(snapshotId: string  | undefined) {
        this['snapshot_id'] = snapshotId;
    }
    public get snapshotId(): string | undefined {
        return this['snapshot_id'];
    }
    public withMetadata(metadata: MetaData): DiskResult {
        this['metadata'] = metadata;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DiskResultVolumeTypeEnum {
    SATA = 'SATA',
    SAS = 'SAS',
    SSD = 'SSD',
    CO_PL = 'co-pl',
    UH_11 = 'uh-11'
}
/**
    * @export
    * @enum {string}
    */
export enum DiskResultDiskTypeEnum {
    SYS = 'SYS',
    DATA = 'DATA'
}
