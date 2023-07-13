import { BatchRestartOrDeleteInstanceRespResults } from './BatchRestartOrDeleteInstanceRespResults';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchRestartOrDeleteInstancesResponse extends SdkResponse {
    public results?: Array<BatchRestartOrDeleteInstanceRespResults>;
    public constructor() { 
        super();
    }
    public withResults(results: Array<BatchRestartOrDeleteInstanceRespResults>): BatchRestartOrDeleteInstancesResponse {
        this['results'] = results;
        return this;
    }
}