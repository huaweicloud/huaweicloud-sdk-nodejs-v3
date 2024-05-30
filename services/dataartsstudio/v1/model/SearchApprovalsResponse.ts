import { SearchApprovalsResultData } from './SearchApprovalsResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchApprovalsResponse extends SdkResponse {
    public data?: SearchApprovalsResultData;
    public constructor() { 
        super();
    }
    public withData(data: SearchApprovalsResultData): SearchApprovalsResponse {
        this['data'] = data;
        return this;
    }
}