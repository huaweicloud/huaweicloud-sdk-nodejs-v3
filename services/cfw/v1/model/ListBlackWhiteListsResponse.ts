import { BlackWhiteListResponseData } from './BlackWhiteListResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBlackWhiteListsResponse extends SdkResponse {
    public data?: BlackWhiteListResponseData;
    public constructor() { 
        super();
    }
    public withData(data: BlackWhiteListResponseData): ListBlackWhiteListsResponse {
        this['data'] = data;
        return this;
    }
}