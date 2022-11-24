import { BlackWhiteListResponseData } from './BlackWhiteListResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBlackWhiteListsUsingGetResponse extends SdkResponse {
    public data?: BlackWhiteListResponseData;
    public constructor() { 
        super();
    }
    public withData(data: BlackWhiteListResponseData): ListBlackWhiteListsUsingGetResponse {
        this['data'] = data;
        return this;
    }
}