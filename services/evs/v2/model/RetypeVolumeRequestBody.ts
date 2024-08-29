import { BssParamForRetypeVolume } from './BssParamForRetypeVolume';
import { RetypeVolume } from './RetypeVolume';


export class RetypeVolumeRequestBody {
    public bssParam?: BssParamForRetypeVolume;
    private 'os-retype'?: RetypeVolume;
    public constructor(osRetype?: RetypeVolume) { 
        this['os-retype'] = osRetype;
    }
    public withBssParam(bssParam: BssParamForRetypeVolume): RetypeVolumeRequestBody {
        this['bssParam'] = bssParam;
        return this;
    }
    public withOsRetype(osRetype: RetypeVolume): RetypeVolumeRequestBody {
        this['os-retype'] = osRetype;
        return this;
    }
    public set osRetype(osRetype: RetypeVolume  | undefined) {
        this['os-retype'] = osRetype;
    }
    public get osRetype(): RetypeVolume | undefined {
        return this['os-retype'];
    }
}