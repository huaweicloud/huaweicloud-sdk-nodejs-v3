import { AddDesktopVolumesReq } from './AddDesktopVolumesReq';


export class AddDesktopsVolumesReq {
    private 'desktop_type'?: AddDesktopsVolumesReqDesktopTypeEnum | string;
    private 'desktop_volumes'?: Array<AddDesktopVolumesReq>;
    public constructor() { 
    }
    public withDesktopType(desktopType: AddDesktopsVolumesReqDesktopTypeEnum | string): AddDesktopsVolumesReq {
        this['desktop_type'] = desktopType;
        return this;
    }
    public set desktopType(desktopType: AddDesktopsVolumesReqDesktopTypeEnum | string  | undefined) {
        this['desktop_type'] = desktopType;
    }
    public get desktopType(): AddDesktopsVolumesReqDesktopTypeEnum | string | undefined {
        return this['desktop_type'];
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

/**
    * @export
    * @enum {string}
    */
export enum AddDesktopsVolumesReqDesktopTypeEnum {
    DESKTOP = 'DESKTOP',
    RENDER_DESKTOP = 'RENDER_DESKTOP'
}
