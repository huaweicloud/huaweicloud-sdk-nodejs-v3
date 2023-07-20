import { DownloadSlowlogResult } from './DownloadSlowlogResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DownloadErrorlogResponse extends SdkResponse {
    public list?: Array<DownloadSlowlogResult>;
    public status?: string;
    public count?: number;
    public constructor() { 
        super();
    }
    public withList(list: Array<DownloadSlowlogResult>): DownloadErrorlogResponse {
        this['list'] = list;
        return this;
    }
    public withStatus(status: string): DownloadErrorlogResponse {
        this['status'] = status;
        return this;
    }
    public withCount(count: number): DownloadErrorlogResponse {
        this['count'] = count;
        return this;
    }
}