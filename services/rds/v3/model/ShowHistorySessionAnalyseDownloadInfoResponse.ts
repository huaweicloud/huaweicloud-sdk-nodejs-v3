import { DownloadInfo } from './DownloadInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHistorySessionAnalyseDownloadInfoResponse extends SdkResponse {
    public count?: number;
    public list?: Array<DownloadInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowHistorySessionAnalyseDownloadInfoResponse {
        this['count'] = count;
        return this;
    }
    public withList(list: Array<DownloadInfo>): ShowHistorySessionAnalyseDownloadInfoResponse {
        this['list'] = list;
        return this;
    }
}