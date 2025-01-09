import { DesktopUsedHoursInfo } from './DesktopUsedHoursInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUsedDesktopInfoResponse extends SdkResponse {
    private 'desktop_used_info_list'?: Array<DesktopUsedHoursInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withDesktopUsedInfoList(desktopUsedInfoList: Array<DesktopUsedHoursInfo>): ListUsedDesktopInfoResponse {
        this['desktop_used_info_list'] = desktopUsedInfoList;
        return this;
    }
    public set desktopUsedInfoList(desktopUsedInfoList: Array<DesktopUsedHoursInfo>  | undefined) {
        this['desktop_used_info_list'] = desktopUsedInfoList;
    }
    public get desktopUsedInfoList(): Array<DesktopUsedHoursInfo> | undefined {
        return this['desktop_used_info_list'];
    }
    public withTotalCount(totalCount: number): ListUsedDesktopInfoResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}