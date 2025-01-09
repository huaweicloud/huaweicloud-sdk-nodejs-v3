import { ExpandVolumesReq } from './ExpandVolumesReq';


export class ExpandDesktopsVolumesReq {
    private 'desktop_type'?: ExpandDesktopsVolumesReqDesktopTypeEnum | string;
    private 'desktop_volumes_expansion'?: Array<ExpandVolumesReq>;
    public constructor() { 
    }
    public withDesktopType(desktopType: ExpandDesktopsVolumesReqDesktopTypeEnum | string): ExpandDesktopsVolumesReq {
        this['desktop_type'] = desktopType;
        return this;
    }
    public set desktopType(desktopType: ExpandDesktopsVolumesReqDesktopTypeEnum | string  | undefined) {
        this['desktop_type'] = desktopType;
    }
    public get desktopType(): ExpandDesktopsVolumesReqDesktopTypeEnum | string | undefined {
        return this['desktop_type'];
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

/**
    * @export
    * @enum {string}
    */
export enum ExpandDesktopsVolumesReqDesktopTypeEnum {
    DESKTOP = 'DESKTOP',
    RENDER_DESKTOP = 'RENDER-DESKTOP'
}
