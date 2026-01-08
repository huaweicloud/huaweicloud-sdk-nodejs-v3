import { DesktopDetachInfo } from './DesktopDetachInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDesktopDetachInfoResponse extends SdkResponse {
    private 'desktop_detach_infos'?: Array<DesktopDetachInfo>;
    public constructor() { 
        super();
    }
    public withDesktopDetachInfos(desktopDetachInfos: Array<DesktopDetachInfo>): ListDesktopDetachInfoResponse {
        this['desktop_detach_infos'] = desktopDetachInfos;
        return this;
    }
    public set desktopDetachInfos(desktopDetachInfos: Array<DesktopDetachInfo>  | undefined) {
        this['desktop_detach_infos'] = desktopDetachInfos;
    }
    public get desktopDetachInfos(): Array<DesktopDetachInfo> | undefined {
        return this['desktop_detach_infos'];
    }
}