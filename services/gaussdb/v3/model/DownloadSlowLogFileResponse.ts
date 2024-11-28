import { DownloadSlowLogFileItem } from './DownloadSlowLogFileItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DownloadSlowLogFileResponse extends SdkResponse {
    public list?: Array<DownloadSlowLogFileItem>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withList(list: Array<DownloadSlowLogFileItem>): DownloadSlowLogFileResponse {
        this['list'] = list;
        return this;
    }
    public withCount(count: number): DownloadSlowLogFileResponse {
        this['count'] = count;
        return this;
    }
}