import { ExpandDesktopPoolVolumesReqVolumes } from './ExpandDesktopPoolVolumesReqVolumes';


export class ExpandDesktopPoolVolumesReq {
    private 'handle_type'?: ExpandDesktopPoolVolumesReqHandleTypeEnum | string;
    private 'desktop_ids'?: Array<string>;
    public volumes?: Array<ExpandDesktopPoolVolumesReqVolumes>;
    public constructor() { 
    }
    public withHandleType(handleType: ExpandDesktopPoolVolumesReqHandleTypeEnum | string): ExpandDesktopPoolVolumesReq {
        this['handle_type'] = handleType;
        return this;
    }
    public set handleType(handleType: ExpandDesktopPoolVolumesReqHandleTypeEnum | string  | undefined) {
        this['handle_type'] = handleType;
    }
    public get handleType(): ExpandDesktopPoolVolumesReqHandleTypeEnum | string | undefined {
        return this['handle_type'];
    }
    public withDesktopIds(desktopIds: Array<string>): ExpandDesktopPoolVolumesReq {
        this['desktop_ids'] = desktopIds;
        return this;
    }
    public set desktopIds(desktopIds: Array<string>  | undefined) {
        this['desktop_ids'] = desktopIds;
    }
    public get desktopIds(): Array<string> | undefined {
        return this['desktop_ids'];
    }
    public withVolumes(volumes: Array<ExpandDesktopPoolVolumesReqVolumes>): ExpandDesktopPoolVolumesReq {
        this['volumes'] = volumes;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExpandDesktopPoolVolumesReqHandleTypeEnum {
    ONLY_FOR_EXPAND = 'ONLY_FOR_EXPAND',
    FOR_EXPAND_AND_IDLE = 'FOR_EXPAND_AND_IDLE',
    FOR_EXPAND_AND_ALL = 'FOR_EXPAND_AND_ALL'
}
