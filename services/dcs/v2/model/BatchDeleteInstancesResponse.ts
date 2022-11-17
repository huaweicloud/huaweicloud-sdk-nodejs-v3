import { BatchOpsResult } from './BatchOpsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteInstancesResponse extends SdkResponse {
    public results?: Array<BatchOpsResult>;
    public constructor() { 
        super();
    }
    public withResults(results: Array<BatchOpsResult>): BatchDeleteInstancesResponse {
        this['results'] = results;
        return this;
    }
}