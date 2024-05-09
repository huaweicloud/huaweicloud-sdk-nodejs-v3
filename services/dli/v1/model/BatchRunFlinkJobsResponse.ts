import { FlinkSuccessResponse } from './FlinkSuccessResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchRunFlinkJobsResponse extends SdkResponse {
    public body?: Array<FlinkSuccessResponse>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<FlinkSuccessResponse>): BatchRunFlinkJobsResponse {
        this['body'] = body;
        return this;
    }
}