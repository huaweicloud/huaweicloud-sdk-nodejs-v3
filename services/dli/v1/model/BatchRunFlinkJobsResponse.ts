import { SuccessResponse } from './SuccessResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchRunFlinkJobsResponse extends SdkResponse {
    public body?: Array<SuccessResponse>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<SuccessResponse>): BatchRunFlinkJobsResponse {
        this['body'] = body;
        return this;
    }
}