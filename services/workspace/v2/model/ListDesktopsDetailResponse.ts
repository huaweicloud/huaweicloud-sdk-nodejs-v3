import { DesktopDetailInfo } from './DesktopDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDesktopsDetailResponse extends SdkResponse {
    public desktops?: Array<DesktopDetailInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withDesktops(desktops: Array<DesktopDetailInfo>): ListDesktopsDetailResponse {
        this['desktops'] = desktops;
        return this;
    }
    public withTotalCount(totalCount: number): ListDesktopsDetailResponse {
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