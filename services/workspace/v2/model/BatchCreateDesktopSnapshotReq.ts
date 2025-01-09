import { DiskSnapshotInfo } from './DiskSnapshotInfo';


export class BatchCreateDesktopSnapshotReq {
    private 'desktop_ids'?: Array<string>;
    private 'disk_type'?: BatchCreateDesktopSnapshotReqDiskTypeEnum | string;
    private 'system_disk_snapshot'?: DiskSnapshotInfo;
    private 'data_disk_snapshot'?: DiskSnapshotInfo;
    public constructor() { 
    }
    public withDesktopIds(desktopIds: Array<string>): BatchCreateDesktopSnapshotReq {
        this['desktop_ids'] = desktopIds;
        return this;
    }
    public set desktopIds(desktopIds: Array<string>  | undefined) {
        this['desktop_ids'] = desktopIds;
    }
    public get desktopIds(): Array<string> | undefined {
        return this['desktop_ids'];
    }
    public withDiskType(diskType: BatchCreateDesktopSnapshotReqDiskTypeEnum | string): BatchCreateDesktopSnapshotReq {
        this['disk_type'] = diskType;
        return this;
    }
    public set diskType(diskType: BatchCreateDesktopSnapshotReqDiskTypeEnum | string  | undefined) {
        this['disk_type'] = diskType;
    }
    public get diskType(): BatchCreateDesktopSnapshotReqDiskTypeEnum | string | undefined {
        return this['disk_type'];
    }
    public withSystemDiskSnapshot(systemDiskSnapshot: DiskSnapshotInfo): BatchCreateDesktopSnapshotReq {
        this['system_disk_snapshot'] = systemDiskSnapshot;
        return this;
    }
    public set systemDiskSnapshot(systemDiskSnapshot: DiskSnapshotInfo  | undefined) {
        this['system_disk_snapshot'] = systemDiskSnapshot;
    }
    public get systemDiskSnapshot(): DiskSnapshotInfo | undefined {
        return this['system_disk_snapshot'];
    }
    public withDataDiskSnapshot(dataDiskSnapshot: DiskSnapshotInfo): BatchCreateDesktopSnapshotReq {
        this['data_disk_snapshot'] = dataDiskSnapshot;
        return this;
    }
    public set dataDiskSnapshot(dataDiskSnapshot: DiskSnapshotInfo  | undefined) {
        this['data_disk_snapshot'] = dataDiskSnapshot;
    }
    public get dataDiskSnapshot(): DiskSnapshotInfo | undefined {
        return this['data_disk_snapshot'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchCreateDesktopSnapshotReqDiskTypeEnum {
    SYSTEM_DISK = 'SYSTEM_DISK',
    DATA_DISKS = 'DATA_DISKS',
    ALL = 'ALL'
}
