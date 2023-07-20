import { SlowlogDownloadInfo } from './SlowlogDownloadInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DownloadSlowlogResponse extends SdkResponse {
    public list?: Array<SlowlogDownloadInfo>;
    public status?: string;
    public count?: number;
    public constructor() { 
        super();
    }
    public withList(list: Array<SlowlogDownloadInfo>): DownloadSlowlogResponse {
        this['list'] = list;
        return this;
    }
    public withStatus(status: string): DownloadSlowlogResponse {
        this['status'] = status;
        return this;
    }
    public withCount(count: number): DownloadSlowlogResponse {
        this['count'] = count;
        return this;
    }
}