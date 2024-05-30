import { SearchCodeTablesResultData } from './SearchCodeTablesResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchCodeTablesResponse extends SdkResponse {
    public data?: SearchCodeTablesResultData;
    public constructor() { 
        super();
    }
    public withData(data: SearchCodeTablesResultData): SearchCodeTablesResponse {
        this['data'] = data;
        return this;
    }
}