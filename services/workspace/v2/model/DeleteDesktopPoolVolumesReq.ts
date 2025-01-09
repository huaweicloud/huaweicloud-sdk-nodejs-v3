import { VolumeInfo } from './VolumeInfo';


export class DeleteDesktopPoolVolumesReq {
    public volumes?: Array<VolumeInfo>;
    public constructor() { 
    }
    public withVolumes(volumes: Array<VolumeInfo>): DeleteDesktopPoolVolumesReq {
        this['volumes'] = volumes;
        return this;
    }
}