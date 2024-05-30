import { CountStandardsResultData } from './CountStandardsResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountStandardsResponse extends SdkResponse {
    public data?: CountStandardsResultData;
    public constructor() { 
        super();
    }
    public withData(data: CountStandardsResultData): CountStandardsResponse {
        this['data'] = data;
        return this;
    }
}