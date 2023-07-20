import { BssParamForResizeVolume } from './BssParamForResizeVolume';
import { OsExtend } from './OsExtend';


export class ResizeVolumeRequestBody {
    public bssParam?: BssParamForResizeVolume;
    private 'os-extend'?: OsExtend;
    public constructor(osExtend?: OsExtend) { 
        this['os-extend'] = osExtend;
    }
    public withBssParam(bssParam: BssParamForResizeVolume): ResizeVolumeRequestBody {
        this['bssParam'] = bssParam;
        return this;
    }
    public withOsExtend(osExtend: OsExtend): ResizeVolumeRequestBody {
        this['os-extend'] = osExtend;
        return this;
    }
    public set osExtend(osExtend: OsExtend  | undefined) {
        this['os-extend'] = osExtend;
    }
    public get osExtend(): OsExtend | undefined {
        return this['os-extend'];
    }
}