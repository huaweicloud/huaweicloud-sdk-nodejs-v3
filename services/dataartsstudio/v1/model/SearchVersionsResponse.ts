import { PublishVersionVOSearchResultData } from './PublishVersionVOSearchResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchVersionsResponse extends SdkResponse {
    public data?: PublishVersionVOSearchResultData;
    public constructor() { 
        super();
    }
    public withData(data: PublishVersionVOSearchResultData): SearchVersionsResponse {
        this['data'] = data;
        return this;
    }
}