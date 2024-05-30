import { CountOverviewsResultData } from './CountOverviewsResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountOverviewsResponse extends SdkResponse {
    public data?: CountOverviewsResultData;
    public constructor() { 
        super();
    }
    public withData(data: CountOverviewsResultData): CountOverviewsResponse {
        this['data'] = data;
        return this;
    }
}