import { PoolSpecModelDataVolumesExtendParams } from './PoolSpecModelDataVolumesExtendParams';


export class PoolSpecModelDataVolumes {
    public volumeType?: string;
    public size?: string;
    public count?: string;
    public extendParams?: PoolSpecModelDataVolumesExtendParams;
    public constructor() { 
    }
    public withVolumeType(volumeType: string): PoolSpecModelDataVolumes {
        this['volumeType'] = volumeType;
        return this;
    }
    public withSize(size: string): PoolSpecModelDataVolumes {
        this['size'] = size;
        return this;
    }
    public withCount(count: string): PoolSpecModelDataVolumes {
        this['count'] = count;
        return this;
    }
    public withExtendParams(extendParams: PoolSpecModelDataVolumesExtendParams): PoolSpecModelDataVolumes {
        this['extendParams'] = extendParams;
        return this;
    }
}