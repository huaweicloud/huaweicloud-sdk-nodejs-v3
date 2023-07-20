import { CommonResp } from './CommonResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StopFlinkJobsResponse extends SdkResponse {
    public body?: Array<CommonResp>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<CommonResp>): StopFlinkJobsResponse {
        this['body'] = body;
        return this;
    }
}