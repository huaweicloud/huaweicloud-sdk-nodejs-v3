import { LtslogInfo } from './LtslogInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLtsLogsResponse extends SdkResponse {
    private 'access_status'?: string;
    private 'lts_access_list'?: Array<LtslogInfo>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withAccessStatus(accessStatus: string): ListLtsLogsResponse {
        this['access_status'] = accessStatus;
        return this;
    }
    public set accessStatus(accessStatus: string  | undefined) {
        this['access_status'] = accessStatus;
    }
    public get accessStatus(): string | undefined {
        return this['access_status'];
    }
    public withLtsAccessList(ltsAccessList: Array<LtslogInfo>): ListLtsLogsResponse {
        this['lts_access_list'] = ltsAccessList;
        return this;
    }
    public set ltsAccessList(ltsAccessList: Array<LtslogInfo>  | undefined) {
        this['lts_access_list'] = ltsAccessList;
    }
    public get ltsAccessList(): Array<LtslogInfo> | undefined {
        return this['lts_access_list'];
    }
    public withCount(count: number): ListLtsLogsResponse {
        this['count'] = count;
        return this;
    }
}