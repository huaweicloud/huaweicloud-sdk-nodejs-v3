import { SimpleDesktopInfo } from './SimpleDesktopInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDesktopsResponse extends SdkResponse {
    private 'total_count'?: number;
    public desktops?: Array<SimpleDesktopInfo>;
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
}