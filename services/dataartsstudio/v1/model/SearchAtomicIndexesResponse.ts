import { AtomicIndexVOSearchResultData } from './AtomicIndexVOSearchResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchAtomicIndexesResponse extends SdkResponse {
    public data?: AtomicIndexVOSearchResultData;
    public constructor() { 
        super();
    }
    public withData(data: AtomicIndexVOSearchResultData): SearchAtomicIndexesResponse {
        this['data'] = data;
        return this;
    }
}