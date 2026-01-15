import { VolumeAddInfo } from './VolumeAddInfo';


export class AddDesktopPoolVolumesReq {
    private 'handle_type'?: AddDesktopPoolVolumesReqHandleTypeEnum | string;
    private 'desktop_ids'?: Array<string>;
    public volumes?: Array<VolumeAddInfo>;
    public constructor() { 
    }
    public withHandleType(handleType: AddDesktopPoolVolumesReqHandleTypeEnum | string): AddDesktopPoolVolumesReq {
        this['handle_type'] = handleType;
        return this;
    }
    public set handleType(handleType: AddDesktopPoolVolumesReqHandleTypeEnum | string  | undefined) {
        this['handle_type'] = handleType;
    }
    public get handleType(): AddDesktopPoolVolumesReqHandleTypeEnum | string | undefined {
        return this['handle_type'];
    }
    public withDesktopIds(desktopIds: Array<string>): AddDesktopPoolVolumesReq {
        this['desktop_ids'] = desktopIds;
        return this;
    }
    public set desktopIds(desktopIds: Array<string>  | undefined) {
        this['desktop_ids'] = desktopIds;
    }
    public get desktopIds(): Array<string> | undefined {
        return this['desktop_ids'];
    }
    public withVolumes(volumes: Array<VolumeAddInfo>): AddDesktopPoolVolumesReq {
        this['volumes'] = volumes;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AddDesktopPoolVolumesReqHandleTypeEnum {
    ONLY_FOR_EXPAND = 'ONLY_FOR_EXPAND',
    FOR_EXPAND_AND_IDLE = 'FOR_EXPAND_AND_IDLE',
    FOR_EXPAND_AND_ALL = 'FOR_EXPAND_AND_ALL'
}
