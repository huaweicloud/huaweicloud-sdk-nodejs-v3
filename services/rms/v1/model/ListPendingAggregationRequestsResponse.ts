import { PageInfo } from './PageInfo';
import { PendingAggregationRequest } from './PendingAggregationRequest';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPendingAggregationRequestsResponse extends SdkResponse {
    private 'pending_aggregation_requests'?: Array<PendingAggregationRequest>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withPendingAggregationRequests(pendingAggregationRequests: Array<PendingAggregationRequest>): ListPendingAggregationRequestsResponse {
        this['pending_aggregation_requests'] = pendingAggregationRequests;
        return this;
    }
    public set pendingAggregationRequests(pendingAggregationRequests: Array<PendingAggregationRequest>  | undefined) {
        this['pending_aggregation_requests'] = pendingAggregationRequests;
    }
    public get pendingAggregationRequests(): Array<PendingAggregationRequest> | undefined {
        return this['pending_aggregation_requests'];
    }
    public withPageInfo(pageInfo: PageInfo): ListPendingAggregationRequestsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}