import { PutDisk } from './PutDisk';
import { PutVolumeGroups } from './PutVolumeGroups';


export class PutSourceServerBody {
    public name?: string;
    public migprojectid?: string;
    public disks?: Array<PutDisk>;
    private 'volume_groups'?: Array<PutVolumeGroups>;
    public constructor() { 
    }
    public withName(name: string): PutSourceServerBody {
        this['name'] = name;
        return this;
    }
    public withMigprojectid(migprojectid: string): PutSourceServerBody {
        this['migprojectid'] = migprojectid;
        return this;
    }
    public withDisks(disks: Array<PutDisk>): PutSourceServerBody {
        this['disks'] = disks;
        return this;
    }
    public withVolumeGroups(volumeGroups: Array<PutVolumeGroups>): PutSourceServerBody {
        this['volume_groups'] = volumeGroups;
        return this;
    }
    public set volumeGroups(volumeGroups: Array<PutVolumeGroups>  | undefined) {
        this['volume_groups'] = volumeGroups;
    }
    public get volumeGroups(): Array<PutVolumeGroups> | undefined {
        return this['volume_groups'];
    }
}