import { Os } from './Os';
import { PoolNodeAz } from './PoolNodeAz';
import { PoolSpecModelDataVolumes } from './PoolSpecModelDataVolumes';
import { PoolSpecModelExtendParams } from './PoolSpecModelExtendParams';
import { PoolSpecModelVolumeGroupConfigs } from './PoolSpecModelVolumeGroupConfigs';


export class PoolSpecModelResources {
    public flavor?: string;
    public count?: number;
    public maxCount?: number;
    public azs?: Array<PoolNodeAz>;
    public extendParams?: PoolSpecModelExtendParams;
    public os?: Os;
    public dataVolumes?: PoolSpecModelDataVolumes;
    public volumeGroupConfigs?: PoolSpecModelVolumeGroupConfigs;
    public constructor() { 
    }
    public withFlavor(flavor: string): PoolSpecModelResources {
        this['flavor'] = flavor;
        return this;
    }
    public withCount(count: number): PoolSpecModelResources {
        this['count'] = count;
        return this;
    }
    public withMaxCount(maxCount: number): PoolSpecModelResources {
        this['maxCount'] = maxCount;
        return this;
    }
    public withAzs(azs: Array<PoolNodeAz>): PoolSpecModelResources {
        this['azs'] = azs;
        return this;
    }
    public withExtendParams(extendParams: PoolSpecModelExtendParams): PoolSpecModelResources {
        this['extendParams'] = extendParams;
        return this;
    }
    public withOs(os: Os): PoolSpecModelResources {
        this['os'] = os;
        return this;
    }
    public withDataVolumes(dataVolumes: PoolSpecModelDataVolumes): PoolSpecModelResources {
        this['dataVolumes'] = dataVolumes;
        return this;
    }
    public withVolumeGroupConfigs(volumeGroupConfigs: PoolSpecModelVolumeGroupConfigs): PoolSpecModelResources {
        this['volumeGroupConfigs'] = volumeGroupConfigs;
        return this;
    }
}