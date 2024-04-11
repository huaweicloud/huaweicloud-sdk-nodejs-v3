import { SlowLogDownloadInfo } from './SlowLogDownloadInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSlowLogDownloadResponse extends SdkResponse {
    public list?: Array<SlowLogDownloadInfo>;
    public constructor() { 
        super();
    }
    public withList(list: Array<SlowLogDownloadInfo>): ShowSlowLogDownloadResponse {
        this['list'] = list;
        return this;
    }
}