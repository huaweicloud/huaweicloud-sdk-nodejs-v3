import { MetaData } from './MetaData';


export class DiskInfo {
    public size?: number;
    private 'volume_type'?: DiskInfoVolumeTypeEnum | string;
    private 'disk_type'?: DiskInfoDiskTypeEnum | string;
    private 'dedicated_storage_id'?: string;
    private 'data_disk_image_id'?: string;
    private 'snapshot_id'?: string;
    public metadata?: MetaData;
    public constructor(size?: number, volumeType?: string, diskType?: string) { 
        this['size'] = size;
        this['volume_type'] = volumeType;
        this['disk_type'] = diskType;
    }
    public withSize(size: number): DiskInfo {
        this['size'] = size;
        return this;
    }
    public withVolumeType(volumeType: DiskInfoVolumeTypeEnum | string): DiskInfo {
        this['volume_type'] = volumeType;
        return this;
    }
    public set volumeType(volumeType: DiskInfoVolumeTypeEnum | string  | undefined) {
        this['volume_type'] = volumeType;
    }
    public get volumeType(): DiskInfoVolumeTypeEnum | string | undefined {
        return this['volume_type'];
    }
    public withDiskType(diskType: DiskInfoDiskTypeEnum | string): DiskInfo {
        this['disk_type'] = diskType;
        return this;
    }
    public set diskType(diskType: DiskInfoDiskTypeEnum | string  | undefined) {
        this['disk_type'] = diskType;
    }
    public get diskType(): DiskInfoDiskTypeEnum | string | undefined {
        return this['disk_type'];
    }
    public withDedicatedStorageId(dedicatedStorageId: string): DiskInfo {
        this['dedicated_storage_id'] = dedicatedStorageId;
        return this;
    }
    public set dedicatedStorageId(dedicatedStorageId: string  | undefined) {
        this['dedicated_storage_id'] = dedicatedStorageId;
    }
    public get dedicatedStorageId(): string | undefined {
        return this['dedicated_storage_id'];
    }
    public withDataDiskImageId(dataDiskImageId: string): DiskInfo {
        this['data_disk_image_id'] = dataDiskImageId;
        return this;
    }
    public set dataDiskImageId(dataDiskImageId: string  | undefined) {
        this['data_disk_image_id'] = dataDiskImageId;
    }
    public get dataDiskImageId(): string | undefined {
        return this['data_disk_image_id'];
    }
    public withSnapshotId(snapshotId: string): DiskInfo {
        this['snapshot_id'] = snapshotId;
        return this;
    }
    public set snapshotId(snapshotId: string  | undefined) {
        this['snapshot_id'] = snapshotId;
    }
    public get snapshotId(): string | undefined {
        return this['snapshot_id'];
    }
    public withMetadata(metadata: MetaData): DiskInfo {
        this['metadata'] = metadata;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DiskInfoVolumeTypeEnum {
    SATA = 'SATA',
    SAS = 'SAS',
    SSD = 'SSD',
    CO_PL = 'co-pl',
    UH_11 = 'uh-11',
    GPSSD = 'GPSSD'
}
/**
    * @export
    * @enum {string}
    */
export enum DiskInfoDiskTypeEnum {
    SYS = 'SYS',
    DATA = 'DATA'
}
