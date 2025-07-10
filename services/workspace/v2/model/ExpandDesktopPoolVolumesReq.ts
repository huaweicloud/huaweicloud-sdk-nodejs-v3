import { VolumeInfo } from './VolumeInfo';


export class ExpandDesktopPoolVolumesReq {
    public volumes?: Array<VolumeInfo>;
    public constructor() { 
    }
    public withVolumes(volumes: Array<VolumeInfo>): ExpandDesktopPoolVolumesReq {
        this['volumes'] = volumes;
        return this;
    }
}