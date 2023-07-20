import { DiskIntargetServer } from './DiskIntargetServer';
import { VolumeGroups } from './VolumeGroups';


export class InitTargetServer {
    public disks?: Array<DiskIntargetServer>;
    private 'volume_groups'?: Array<VolumeGroups>;
    public constructor(disks?: Array<DiskIntargetServer>) { 
        this['disks'] = disks;
    }
    public withDisks(disks: Array<DiskIntargetServer>): InitTargetServer {
        this['disks'] = disks;
        return this;
    }
    public withVolumeGroups(volumeGroups: Array<VolumeGroups>): InitTargetServer {
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