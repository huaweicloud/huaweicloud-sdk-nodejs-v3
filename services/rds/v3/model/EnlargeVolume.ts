import { EnlargeVolumeObject } from './EnlargeVolumeObject';


export class EnlargeVolume {
    private 'enlarge_volume'?: EnlargeVolumeObject;
    public constructor(enlargeVolume?: EnlargeVolumeObject) { 
        this['enlarge_volume'] = enlargeVolume;
    }
    public withEnlargeVolume(enlargeVolume: EnlargeVolumeObject): EnlargeVolume {
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