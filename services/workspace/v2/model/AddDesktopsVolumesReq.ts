import { AddDesktopVolumesReq } from './AddDesktopVolumesReq';


export class AddDesktopsVolumesReq {
    private 'desktop_volumes'?: Array<AddDesktopVolumesReq>;
    public constructor() { 
    }
    public withDesktopVolumes(desktopVolumes: Array<AddDesktopVolumesReq>): AddDesktopsVolumesReq {
        this['desktop_volumes'] = desktopVolumes;
        return this;
    }
    public set desktopVolumes(desktopVolumes: Array<AddDesktopVolumesReq>  | undefined) {
        this['desktop_volumes'] = desktopVolumes;
    }
    public get desktopVolumes(): Array<AddDesktopVolumesReq> | undefined {
        return this['desktop_volumes'];
    }
}