import { ExpandVolumesReq } from './ExpandVolumesReq';


export class ExpandDesktopsVolumesReq {
    private 'desktop_volumes_expansion'?: Array<ExpandVolumesReq>;
    public constructor() { 
    }
    public withDesktopVolumesExpansion(desktopVolumesExpansion: Array<ExpandVolumesReq>): ExpandDesktopsVolumesReq {
        this['desktop_volumes_expansion'] = desktopVolumesExpansion;
        return this;
    }
    public set desktopVolumesExpansion(desktopVolumesExpansion: Array<ExpandVolumesReq>  | undefined) {
        this['desktop_volumes_expansion'] = desktopVolumesExpansion;
    }
    public get desktopVolumesExpansion(): Array<ExpandVolumesReq> | undefined {
        return this['desktop_volumes_expansion'];
    }
}