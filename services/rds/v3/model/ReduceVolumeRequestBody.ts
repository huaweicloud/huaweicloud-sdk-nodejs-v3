import { ReduceVolumeObject } from './ReduceVolumeObject';


export class ReduceVolumeRequestBody {
    private 'reduce_volume'?: ReduceVolumeObject;
    public constructor(reduceVolume?: ReduceVolumeObject) { 
        this['reduce_volume'] = reduceVolume;
    }
    public withReduceVolume(reduceVolume: ReduceVolumeObject): ReduceVolumeRequestBody {
        this['reduce_volume'] = reduceVolume;
        return this;
    }
    public set reduceVolume(reduceVolume: ReduceVolumeObject  | undefined) {
        this['reduce_volume'] = reduceVolume;
    }
    public get reduceVolume(): ReduceVolumeObject | undefined {
        return this['reduce_volume'];
    }
}