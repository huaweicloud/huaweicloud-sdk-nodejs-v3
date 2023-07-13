import { TrendQueryDataResp } from './TrendQueryDataResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMonitorIndicatorDataResponse extends SdkResponse {
    public body?: Array<TrendQueryDataResp>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<TrendQueryDataResp>): ListMonitorIndicatorDataResponse {
        this['body'] = body;
        return this;
    }
}