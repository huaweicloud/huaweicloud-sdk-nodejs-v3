import { DeleteDesktopPoolVolumesReqVolumes } from './DeleteDesktopPoolVolumesReqVolumes';


export class DeleteDesktopPoolVolumesReq {
    private 'handle_type'?: DeleteDesktopPoolVolumesReqHandleTypeEnum | string;
    private 'desktop_ids'?: Array<string>;
    public volumes?: Array<DeleteDesktopPoolVolumesReqVolumes>;
    public constructor() { 
    }
    public withHandleType(handleType: DeleteDesktopPoolVolumesReqHandleTypeEnum | string): DeleteDesktopPoolVolumesReq {
        this['handle_type'] = handleType;
        return this;
    }
    public set handleType(handleType: DeleteDesktopPoolVolumesReqHandleTypeEnum | string  | undefined) {
        this['handle_type'] = handleType;
    }
    public get handleType(): DeleteDesktopPoolVolumesReqHandleTypeEnum | string | undefined {
        return this['handle_type'];
    }
    public withDesktopIds(desktopIds: Array<string>): DeleteDesktopPoolVolumesReq {
        this['desktop_ids'] = desktopIds;
        return this;
    }
    public set desktopIds(desktopIds: Array<string>  | undefined) {
        this['desktop_ids'] = desktopIds;
    }
    public get desktopIds(): Array<string> | undefined {
        return this['desktop_ids'];
    }
    public withVolumes(volumes: Array<DeleteDesktopPoolVolumesReqVolumes>): DeleteDesktopPoolVolumesReq {
        this['volumes'] = volumes;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteDesktopPoolVolumesReqHandleTypeEnum {
    ONLY_FOR_EXPAND = 'ONLY_FOR_EXPAND',
    FOR_EXPAND_AND_IDLE = 'FOR_EXPAND_AND_IDLE',
    FOR_EXPAND_AND_ALL = 'FOR_EXPAND_AND_ALL'
}
