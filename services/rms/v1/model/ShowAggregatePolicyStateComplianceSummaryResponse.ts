import { AggregatePolicyComplianceSummaryResult } from './AggregatePolicyComplianceSummaryResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAggregatePolicyStateComplianceSummaryResponse extends SdkResponse {
    public results?: Array<AggregatePolicyComplianceSummaryResult>;
    public constructor() { 
        super();
    }
    public withResults(results: Array<AggregatePolicyComplianceSummaryResult>): ShowAggregatePolicyStateComplianceSummaryResponse {
        this['results'] = results;
        return this;
    }
}