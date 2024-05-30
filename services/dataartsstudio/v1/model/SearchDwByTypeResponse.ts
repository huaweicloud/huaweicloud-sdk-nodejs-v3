import { SearchDwByTypeResultData } from './SearchDwByTypeResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchDwByTypeResponse extends SdkResponse {
    public data?: SearchDwByTypeResultData;
    public constructor() { 
        super();
    }
    public withData(data: SearchDwByTypeResultData): SearchDwByTypeResponse {
        this['data'] = data;
        return this;
    }
}