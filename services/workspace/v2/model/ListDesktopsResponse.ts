import { SimpleDesktopInfo } from './SimpleDesktopInfo';
import { SimpleDesktopInfoDetail } from './SimpleDesktopInfoDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDesktopsResponse extends SdkResponse {
    private 'total_count'?: number;
    public desktops?: Array<SimpleDesktopInfo>;
    private 'desktop_infos'?: Array<SimpleDesktopInfoDetail>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListDesktopsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withDesktops(desktops: Array<SimpleDesktopInfo>): ListDesktopsResponse {
        this['desktops'] = desktops;
        return this;
    }
    public withDesktopInfos(desktopInfos: Array<SimpleDesktopInfoDetail>): ListDesktopsResponse {
        this['desktop_infos'] = desktopInfos;
        return this;
    }
    public set desktopInfos(desktopInfos: Array<SimpleDesktopInfoDetail>  | undefined) {
        this['desktop_infos'] = desktopInfos;
    }
    public get desktopInfos(): Array<SimpleDesktopInfoDetail> | undefined {
        return this['desktop_infos'];
    }
}