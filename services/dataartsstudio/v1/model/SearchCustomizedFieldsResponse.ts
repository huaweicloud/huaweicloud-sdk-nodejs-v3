import { SearchCustomizedFieldsResultData } from './SearchCustomizedFieldsResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchCustomizedFieldsResponse extends SdkResponse {
    public data?: SearchCustomizedFieldsResultData;
    public constructor() { 
        super();
    }
    public withData(data: SearchCustomizedFieldsResultData): SearchCustomizedFieldsResponse {
        this['data'] = data;
        return this;
    }
}