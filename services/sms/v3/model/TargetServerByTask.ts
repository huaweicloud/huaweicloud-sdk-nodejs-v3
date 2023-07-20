import { BtrfsFileSystem } from './BtrfsFileSystem';
import { TargetDisks } from './TargetDisks';
import { VolumeGroups } from './VolumeGroups';


export class TargetServerByTask {
    private 'btrfs_list'?: Array<BtrfsFileSystem>;
    public disks?: Array<TargetDisks>;
    public name?: string;
    private 'vm_id'?: string;
    private 'volume_groups'?: Array<VolumeGroups>;
    public constructor(disks?: Array<TargetDisks>, name?: string, vmId?: string) { 
        this['disks'] = disks;
        this['name'] = name;
        this['vm_id'] = vmId;
    }
    public withBtrfsList(btrfsList: Array<BtrfsFileSystem>): TargetServerByTask {
        this['btrfs_list'] = btrfsList;
        return this;
    }
    public set btrfsList(btrfsList: Array<BtrfsFileSystem>  | undefined) {
        this['btrfs_list'] = btrfsList;
    }
    public get btrfsList(): Array<BtrfsFileSystem> | undefined {
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
    public set vmId(vmId: string  | undefined) {
        this['vm_id'] = vmId;
    }
    public get vmId(): string | undefined {
        return this['vm_id'];
    }
    public withVolumeGroups(volumeGroups: Array<VolumeGroups>): TargetServerByTask {
        this['volume_groups'] = volumeGroups;
        return this;
    }
    public set volumeGroups(volumeGroups: Array<VolumeGroups>  | undefined) {
        this['volume_groups'] = volumeGroups;
    }
    public get volumeGroups(): Array<VolumeGroups> | undefined {
        return this['volume_groups'];
    }
}