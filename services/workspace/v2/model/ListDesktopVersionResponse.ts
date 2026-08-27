import { DesktopVersionInfo } from './DesktopVersionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDesktopVersionResponse extends SdkResponse {
    public desktops?: Array<DesktopVersionInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withDesktops(desktops: Array<DesktopVersionInfo>): ListDesktopVersionResponse {
        this['desktops'] = desktops;
        return this;
    }
    public withTotalCount(totalCount: number): ListDesktopVersionResponse {
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