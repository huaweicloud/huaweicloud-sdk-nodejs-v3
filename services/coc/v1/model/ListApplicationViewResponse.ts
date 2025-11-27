import { ApplicationViewQueryResponseData } from './ApplicationViewQueryResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApplicationViewResponse extends SdkResponse {
    public data?: Array<ApplicationViewQueryResponseData>;
    public constructor() { 
        super();
    }
    public withData(data: Array<ApplicationViewQueryResponseData>): ListApplicationViewResponse {
        this['data'] = data;
        return this;
    }
}