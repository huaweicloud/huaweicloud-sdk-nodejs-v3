import { BatchOpsResult } from './BatchOpsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RestartOrFlushInstancesResponse extends SdkResponse {
    public results?: Array<BatchOpsResult>;
    public constructor() { 
        super();
    }
    public withResults(results: Array<BatchOpsResult>): RestartOrFlushInstancesResponse {
        this['results'] = results;
        return this;
    }
}