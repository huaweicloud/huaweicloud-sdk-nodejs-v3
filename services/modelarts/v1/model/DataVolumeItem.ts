import { VolumeExtendParams } from './VolumeExtendParams';


export class DataVolumeItem {
    public volumeType?: string;
    public size?: string;
    public count?: number;
    public extendParams?: VolumeExtendParams;
    public constructor(volumeType?: string, size?: string, extendParams?: VolumeExtendParams) { 
        this['volumeType'] = volumeType;
        this['size'] = size;
        this['extendParams'] = extendParams;
    }
    public withVolumeType(volumeType: string): DataVolumeItem {
        this['volumeType'] = volumeType;
        return this;
    }
    public withSize(size: string): DataVolumeItem {
        this['size'] = size;
        return this;
    }
    public withCount(count: number): DataVolumeItem {
        this['count'] = count;
        return this;
    }
    public withExtendParams(extendParams: VolumeExtendParams): DataVolumeItem {
        this['extendParams'] = extendParams;
        return this;
    }
}