import { BtrfsFileSystem } from './BtrfsFileSystem';
import { TargetDisks } from './TargetDisks';
import { VolumeGroups } from './VolumeGroups';


export class TargetServerByTask {
    private 'btrfs_list'?: Array<BtrfsFileSystem> | undefined;
    public disks: Array<TargetDisks>;
    public name: string;
    private 'vm_id': string | undefined;
    private 'volume_groups'?: Array<VolumeGroups> | undefined;
    public constructor(disks?: any, name?: any, vmId?: any) { 
        this['disks'] = disks;
        this['name'] = name;
        this['vm_id'] = vmId;
    }
    public withBtrfsList(btrfsList: Array<BtrfsFileSystem>): TargetServerByTask {
        this['btrfs_list'] = btrfsList;
        return this;
    }
    public set btrfsList(btrfsList: Array<BtrfsFileSystem> | undefined) {
        this['btrfs_list'] = btrfsList;
    }
    public get btrfsList() {
        return this['btrfs_list'];
    }
    public withDisks(disks: Array<TargetDisks>): TargetServerByTask {
        this['disks'] = disks;
        return this;
    }
    public withName(name: string): TargetServerByTask {
        this['name'] = name;
        return this;
    }
    public withVmId(vmId: string): TargetServerByTask {
        this['vm_id'] = vmId;
        return this;
    }
    public set vmId(vmId: string | undefined) {
        this['vm_id'] = vmId;
    }
    public get vmId() {
        return this['vm_id'];
    }
    public withVolumeGroups(volumeGroups: Array<VolumeGroups>): TargetServerByTask {
        this['volume_groups'] = volumeGroups;
        return this;
    }
    public set volumeGroups(volumeGroups: Array<VolumeGroups> | undefined) {
        this['volume_groups'] = volumeGroups;
    }
    public get volumeGroups() {
        return this['volume_groups'];
    }
}