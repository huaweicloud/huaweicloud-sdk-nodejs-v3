import { ChartResp } from './ChartResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAutopilotChartsResponse extends SdkResponse {
    public body?: Array<ChartResp>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<ChartResp>): ListAutopilotChartsResponse {
        this['body'] = body;
        return this;
    }
}