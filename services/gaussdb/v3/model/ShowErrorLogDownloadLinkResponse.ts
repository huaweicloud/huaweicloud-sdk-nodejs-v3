import { RDSErrorLogDownload } from './RDSErrorLogDownload';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowErrorLogDownloadLinkResponse extends SdkResponse {
    public count?: number;
    public list?: Array<RDSErrorLogDownload>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowErrorLogDownloadLinkResponse {
        this['count'] = count;
        return this;
    }
    public withList(list: Array<RDSErrorLogDownload>): ShowErrorLogDownloadLinkResponse {
        this['list'] = list;
        return this;
    }
}