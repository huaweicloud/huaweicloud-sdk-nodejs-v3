import { EnlargeVolumeObject } from './EnlargeVolumeObject';


export class EnlargeVolumeRequestBody {
    private 'enlarge_volume'?: EnlargeVolumeObject;
    public constructor(enlargeVolume?: EnlargeVolumeObject) { 
        this['enlarge_volume'] = enlargeVolume;
    }
    public withEnlargeVolume(enlargeVolume: EnlargeVolumeObject): EnlargeVolumeRequestBody {
        this['enlarge_volume'] = enlargeVolume;
        return this;
    }
    public set enlargeVolume(enlargeVolume: EnlargeVolumeObject  | undefined) {
        this['enlarge_volume'] = enlargeVolume;
    }
    public get enlargeVolume(): EnlargeVolumeObject | undefined {
        return this['enlarge_volume'];
    }
}