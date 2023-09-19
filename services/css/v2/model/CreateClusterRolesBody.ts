import { CreateClusterInstanceVolumeBody } from './CreateClusterInstanceVolumeBody';


export class CreateClusterRolesBody {
    public flavorRef?: string;
    public volume?: CreateClusterInstanceVolumeBody;
    public type?: string;
    public instanceNum?: number;
    public constructor(flavorRef?: string, volume?: CreateClusterInstanceVolumeBody, type?: string, instanceNum?: number) { 
        this['flavorRef'] = flavorRef;
        this['volume'] = volume;
        this['type'] = type;
        this['instanceNum'] = instanceNum;
    }
    public withFlavorRef(flavorRef: string): CreateClusterRolesBody {
        this['flavorRef'] = flavorRef;
        return this;
    }
    public withVolume(volume: CreateClusterInstanceVolumeBody): CreateClusterRolesBody {
        this['volume'] = volume;
        return this;
    }
    public withType(type: string): CreateClusterRolesBody {
        this['type'] = type;
        return this;
    }
    public withInstanceNum(instanceNum: number): CreateClusterRolesBody {
        this['instanceNum'] = instanceNum;
        return this;
    }
}