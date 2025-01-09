import { ConnectDesktopsInfo } from './ConnectDesktopsInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDesktopsConnectStatusResponse extends SdkResponse {
    public desktops?: Array<ConnectDesktopsInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withDesktops(desktops: Array<ConnectDesktopsInfo>): ListDesktopsConnectStatusResponse {
        this['desktops'] = desktops;
        return this;
    }
    public withTotalCount(totalCount: number): ListDesktopsConnectStatusResponse {
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