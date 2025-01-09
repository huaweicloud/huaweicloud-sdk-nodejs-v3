import { UnusedDesktopInfo } from './UnusedDesktopInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUnusedDesktopsResponse extends SdkResponse {
    private 'unused_desktops'?: Array<UnusedDesktopInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withUnusedDesktops(unusedDesktops: Array<UnusedDesktopInfo>): ListUnusedDesktopsResponse {
        this['unused_desktops'] = unusedDesktops;
        return this;
    }
    public set unusedDesktops(unusedDesktops: Array<UnusedDesktopInfo>  | undefined) {
        this['unused_desktops'] = unusedDesktops;
    }
    public get unusedDesktops(): Array<UnusedDesktopInfo> | undefined {
        return this['unused_desktops'];
    }
    public withTotalCount(totalCount: number): ListUnusedDesktopsResponse {
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