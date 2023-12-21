import { AssetDailySummaryResult } from './AssetDailySummaryResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAssetDailySummaryLogResponse extends SdkResponse {
    public total?: number;
    private 'summary_results'?: Array<AssetDailySummaryResult>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListAssetDailySummaryLogResponse {
        this['total'] = total;
        return this;
    }
    public withSummaryResults(summaryResults: Array<AssetDailySummaryResult>): ListAssetDailySummaryLogResponse {
        this['summary_results'] = summaryResults;
        return this;
    }
    public set summaryResults(summaryResults: Array<AssetDailySummaryResult>  | undefined) {
        this['summary_results'] = summaryResults;
    }
    public get summaryResults(): Array<AssetDailySummaryResult> | undefined {
        return this['summary_results'];
    }
}