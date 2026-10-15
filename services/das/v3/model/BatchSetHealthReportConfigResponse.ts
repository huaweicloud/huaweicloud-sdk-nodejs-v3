import { BatchSetResultDto } from './BatchSetResultDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchSetHealthReportConfigResponse extends SdkResponse {
    public results?: Array<BatchSetResultDto>;
    public constructor() { 
        super();
    }
    public withResults(results: Array<BatchSetResultDto>): BatchSetHealthReportConfigResponse {
        this['results'] = results;
        return this;
    }
}