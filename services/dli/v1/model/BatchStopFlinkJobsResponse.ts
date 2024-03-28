import { SuccessResponse } from './SuccessResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchStopFlinkJobsResponse extends SdkResponse {
    public body?: Array<SuccessResponse>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<SuccessResponse>): BatchStopFlinkJobsResponse {
        this['body'] = body;
        return this;
    }
}