import { ListCacheDatasResposeResult } from './ListCacheDatasResposeResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScrumJobCacheResponse extends SdkResponse {
    public result?: ListCacheDatasResposeResult;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: ListCacheDatasResposeResult): ListScrumJobCacheResponse {
        this['result'] = result;
        return this;
    }
    public withStatus(status: string): ListScrumJobCacheResponse {
        this['status'] = status;
        return this;
    }
}