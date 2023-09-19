import { CreateClusterInstanceNicsBody } from './CreateClusterInstanceNicsBody';
import { CreateClusterInstanceVolumeBody } from './CreateClusterInstanceVolumeBody';


export class CreateClusterInstanceBody {
    public flavorRef?: string;
    public volume?: CreateClusterInstanceVolumeBody;
    public nics?: CreateClusterInstanceNicsBody;
    private 'availability_zone'?: string;
    public constructor(flavorRef?: string, volume?: CreateClusterInstanceVolumeBody, nics?: CreateClusterInstanceNicsBody) { 
        this['flavorRef'] = flavorRef;
        this['volume'] = volume;
        this['nics'] = nics;
    }
    public withFlavorRef(flavorRef: string): CreateClusterInstanceBody {
        this['flavorRef'] = flavorRef;
        return this;
    }
    public withVolume(volume: CreateClusterInstanceVolumeBody): CreateClusterInstanceBody {
        this['volume'] = volume;
        return this;
    }
    public withNics(nics: CreateClusterInstanceNicsBody): CreateClusterInstanceBody {
        this['nics'] = nics;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): CreateClusterInstanceBody {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
}