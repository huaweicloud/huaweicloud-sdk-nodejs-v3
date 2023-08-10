import { CreateXelLogDownloadResult } from './CreateXelLogDownloadResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateXelLogDownloadResponse extends SdkResponse {
    public list?: Array<CreateXelLogDownloadResult>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withList(list: Array<CreateXelLogDownloadResult>): CreateXelLogDownloadResponse {
        this['list'] = list;
        return this;
    }
    public withCount(count: number): CreateXelLogDownloadResponse {
        this['count'] = count;
        return this;
    }
}