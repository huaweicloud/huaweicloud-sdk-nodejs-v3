import { BtrfsFileSystem } from './BtrfsFileSystem';
import { ServerDisk } from './ServerDisk';
import { VolumeGroups } from './VolumeGroups';


export class PutDiskInfoReq {
    public disks?: Array<ServerDisk>;
    public volumegroups?: Array<VolumeGroups>;
    private 'btrfs_list'?: Array<BtrfsFileSystem> | undefined;
    public constructor() { 
    }
    public withDisks(disks: Array<ServerDisk>): PutDiskInfoReq {
        this['disks'] = disks;
        return this;
    }
    public withVolumegroups(volumegroups: Array<VolumeGroups>): PutDiskInfoReq {
        this['volumegroups'] = volumegroups;
        return this;
    }
    public withBtrfsList(btrfsList: Array<BtrfsFileSystem>): PutDiskInfoReq {
        this['btrfs_list'] = btrfsList;
        return this;
    }
    public set btrfsList(btrfsList: Array<BtrfsFileSystem> | undefined) {
        this['btrfs_list'] = btrfsList;
    }
    public get btrfsList() {
        return this['btrfs_list'];
    }
}