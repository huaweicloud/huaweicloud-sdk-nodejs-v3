import { SimpleDesktopPoolInfo } from './SimpleDesktopPoolInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDesktopPoolsResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'desktop_pools'?: Array<SimpleDesktopPoolInfo>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListDesktopPoolsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withDesktopPools(desktopPools: Array<SimpleDesktopPoolInfo>): ListDesktopPoolsResponse {
        this['desktop_pools'] = desktopPools;
        return this;
    }
    public set desktopPools(desktopPools: Array<SimpleDesktopPoolInfo>  | undefined) {
        this['desktop_pools'] = desktopPools;
    }
    public get desktopPools(): Array<SimpleDesktopPoolInfo> | undefined {
        return this['desktop_pools'];
    }
}