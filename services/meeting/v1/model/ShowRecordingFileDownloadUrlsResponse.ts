import { RecordDownloadInfoBO } from './RecordDownloadInfoBO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRecordingFileDownloadUrlsResponse extends SdkResponse {
    public recordUrls?: Array<RecordDownloadInfoBO>;
    public constructor() { 
        super();
    }
    public withRecordUrls(recordUrls: Array<RecordDownloadInfoBO>): ShowRecordingFileDownloadUrlsResponse {
        this['recordUrls'] = recordUrls;
        return this;
    }
}