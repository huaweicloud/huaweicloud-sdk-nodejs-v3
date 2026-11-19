
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSessionSummaryUseOpsTunnelResponse extends SdkResponse {
    private 'active_count'?: number;
    private 'total_count'?: number;
    private 'max_query_time_cost'?: number;
    private 'max_transaction_time_cost'?: number;
    public constructor() { 
        super();
    }
    public withActiveCount(activeCount: number): ShowSessionSummaryUseOpsTunnelResponse {
        this['active_count'] = activeCount;
        return this;
    }
    public set activeCount(activeCount: number  | undefined) {
        this['active_count'] = activeCount;
    }
    public get activeCount(): number | undefined {
        return this['active_count'];
    }
    public withTotalCount(totalCount: number): ShowSessionSummaryUseOpsTunnelResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withMaxQueryTimeCost(maxQueryTimeCost: number): ShowSessionSummaryUseOpsTunnelResponse {
        this['max_query_time_cost'] = maxQueryTimeCost;
        return this;
    }
    public set maxQueryTimeCost(maxQueryTimeCost: number  | undefined) {
        this['max_query_time_cost'] = maxQueryTimeCost;
    }
    public get maxQueryTimeCost(): number | undefined {
        return this['max_query_time_cost'];
    }
    public withMaxTransactionTimeCost(maxTransactionTimeCost: number): ShowSessionSummaryUseOpsTunnelResponse {
        this['max_transaction_time_cost'] = maxTransactionTimeCost;
        return this;
    }
    public set maxTransactionTimeCost(maxTransactionTimeCost: number  | undefined) {
        this['max_transaction_time_cost'] = maxTransactionTimeCost;
    }
    public get maxTransactionTimeCost(): number | undefined {
        return this['max_transaction_time_cost'];
    }
}