import { ErrorlogDownloadInfo } from './ErrorlogDownloadInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DownloadErrorlogResponse extends SdkResponse {
    public list?: Array<ErrorlogDownloadInfo>;
    public status?: string;
    public count?: number;
    public constructor() { 
        super();
    }
    public withList(list: Array<ErrorlogDownloadInfo>): DownloadErrorlogResponse {
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