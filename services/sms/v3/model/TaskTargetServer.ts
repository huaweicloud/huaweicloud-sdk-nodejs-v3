import { TargetDisk } from './TargetDisk';
import { VolumeGroups } from './VolumeGroups';


export class TaskTargetServer {
    public id?: string;
    private 'vm_id'?: string;
    public name?: string;
    public ip?: string;
    private 'os_type'?: TaskTargetServerOsTypeEnum | string;
    private 'os_version'?: string;
    private 'system_dir'?: string;
    public disks?: Array<TargetDisk>;
    private 'volume_groups'?: Array<VolumeGroups>;
    private 'btrfs_list'?: Array<string>;
    private 'image_disk_id'?: string;
    private 'cutovered_snapshot_ids'?: string;
    public constructor(disks?: Array<TargetDisk>) { 
        this['disks'] = disks;
    }
    public withId(id: string): TaskTargetServer {
        this['id'] = id;
        return this;
    }
    public withVmId(vmId: string): TaskTargetServer {
        this['vm_id'] = vmId;
        return this;
    }
    public set vmId(vmId: string  | undefined) {
        this['vm_id'] = vmId;
    }
    public get vmId(): string | undefined {
        return this['vm_id'];
    }
    public withName(name: string): TaskTargetServer {
        this['name'] = name;
        return this;
    }
    public withIp(ip: string): TaskTargetServer {
        this['ip'] = ip;
        return this;
    }
    public withOsType(osType: TaskTargetServerOsTypeEnum | string): TaskTargetServer {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: TaskTargetServerOsTypeEnum | string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): TaskTargetServerOsTypeEnum | string | undefined {
        return this['os_type'];
    }
    public withOsVersion(osVersion: string): TaskTargetServer {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os_version'];
    }
    public withSystemDir(systemDir: string): TaskTargetServer {
        this['system_dir'] = systemDir;
        return this;
    }
    public set systemDir(systemDir: string  | undefined) {
        this['system_dir'] = systemDir;
    }
    public get systemDir(): string | undefined {
        return this['system_dir'];
    }
    public withDisks(disks: Array<TargetDisk>): TaskTargetServer {
        this['disks'] = disks;
        return this;
    }
    public withVolumeGroups(volumeGroups: Array<VolumeGroups>): TaskTargetServer {
        this['volume_groups'] = volumeGroups;
        return this;
    }
    public set volumeGroups(volumeGroups: Array<VolumeGroups>  | undefined) {
        this['volume_groups'] = volumeGroups;
    }
    public get volumeGroups(): Array<VolumeGroups> | undefined {
        return this['volume_groups'];
    }
    public withBtrfsList(btrfsList: Array<string>): TaskTargetServer {
        this['btrfs_list'] = btrfsList;
        return this;
    }
    public set btrfsList(btrfsList: Array<string>  | undefined) {
        this['btrfs_list'] = btrfsList;
    }
    public get btrfsList(): Array<string> | undefined {
        return this['btrfs_list'];
    }
    public withImageDiskId(imageDiskId: string): TaskTargetServer {
        this['image_disk_id'] = imageDiskId;
        return this;
    }
    public set imageDiskId(imageDiskId: string  | undefined) {
        this['image_disk_id'] = imageDiskId;
    }
    public get imageDiskId(): string | undefined {
        return this['image_disk_id'];
    }
    public withCutoveredSnapshotIds(cutoveredSnapshotIds: string): TaskTargetServer {
        this['cutovered_snapshot_ids'] = cutoveredSnapshotIds;
        return this;
    }
    public set cutoveredSnapshotIds(cutoveredSnapshotIds: string  | undefined) {
        this['cutovered_snapshot_ids'] = cutoveredSnapshotIds;
    }
    public get cutoveredSnapshotIds(): string | undefined {
        return this['cutovered_snapshot_ids'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TaskTargetServerOsTypeEnum {
    WINDOWS = 'WINDOWS',
    LINUX = 'LINUX'
}
