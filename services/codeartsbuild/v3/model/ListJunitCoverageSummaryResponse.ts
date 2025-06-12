import { ListJunitCoverageSummaryResult } from './ListJunitCoverageSummaryResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListJunitCoverageSummaryResponse extends SdkResponse {
    public result?: ListJunitCoverageSummaryResult;
    public error?: string;
    public status?: string;
    public constructor() { 
        super();
    }
    public withResult(result: ListJunitCoverageSummaryResult): ListJunitCoverageSummaryResponse {
        this['result'] = result;
        return this;
    }
    public withError(error: string): ListJunitCoverageSummaryResponse {
        this['error'] = error;
        return this;
    }
    public withStatus(status: string): ListJunitCoverageSummaryResponse {
        this['status'] = status;
        return this;
    }
}