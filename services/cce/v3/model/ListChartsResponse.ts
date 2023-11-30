import { ChartResp } from './ChartResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListChartsResponse extends SdkResponse {
    public body?: Array<ChartResp>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ChartResp>): ListChartsResponse {
        this['body'] = body;
        return this;
    }
}