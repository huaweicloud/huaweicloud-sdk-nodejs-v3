import { BatchDeleteInstanceRespResults } from './BatchDeleteInstanceRespResults';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteInstancesResponse extends SdkResponse {
    public results?: Array<BatchDeleteInstanceRespResults>;
    public constructor() { 
        super();
    }
    public withResults(results: Array<BatchDeleteInstanceRespResults>): BatchDeleteInstancesResponse {
        this['results'] = results;
        return this;
    }
}