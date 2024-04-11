import { SlowLogDownloadInfo } from './SlowLogDownloadInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSlowLogDownloadResponse extends SdkResponse {
    public list?: Array<SlowLogDownloadInfo>;
    public constructor() { 
        super();
    }
    public withList(list: Array<SlowLogDownloadInfo>): CreateSlowLogDownloadResponse {
        this['list'] = list;
        return this;
    }
}