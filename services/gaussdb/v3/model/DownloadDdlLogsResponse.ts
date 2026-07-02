import { DownLoadFileInfoItem } from './DownLoadFileInfoItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DownloadDdlLogsResponse extends SdkResponse {
    public list?: Array<DownLoadFileInfoItem>;
    public constructor() { 
        super();
    }
    public withList(list: Array<DownLoadFileInfoItem>): DownloadDdlLogsResponse {
        this['list'] = list;
        return this;
    }
}