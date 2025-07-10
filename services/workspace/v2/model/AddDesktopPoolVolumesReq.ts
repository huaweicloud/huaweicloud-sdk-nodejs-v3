import { VolumeAddInfo } from './VolumeAddInfo';


export class AddDesktopPoolVolumesReq {
    public volumes?: Array<VolumeAddInfo>;
    public constructor() { 
    }
    public withVolumes(volumes: Array<VolumeAddInfo>): AddDesktopPoolVolumesReq {
        this['volumes'] = volumes;
        return this;
    }
}