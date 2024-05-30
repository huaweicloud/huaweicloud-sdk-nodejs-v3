import { SearchCatalogsResultData } from './SearchCatalogsResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchCatalogsResponse extends SdkResponse {
    public data?: SearchCatalogsResultData;
    public constructor() { 
        super();
    }
    public withData(data: SearchCatalogsResultData): SearchCatalogsResponse {
        this['data'] = data;
        return this;
    }
}