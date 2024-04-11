import { StandardSearchResultData } from './StandardSearchResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAllStandardsResponse extends SdkResponse {
    public data?: StandardSearchResultData;
    public constructor() { 
        super();
    }
    public withData(data: StandardSearchResultData): ListAllStandardsResponse {
        this['data'] = data;
        return this;
    }
}