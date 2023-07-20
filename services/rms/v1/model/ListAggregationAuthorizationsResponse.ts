import { AggregationAuthorizationResp } from './AggregationAuthorizationResp';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAggregationAuthorizationsResponse extends SdkResponse {
    private 'aggregation_authorizations'?: Array<AggregationAuthorizationResp>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withAggregationAuthorizations(aggregationAuthorizations: Array<AggregationAuthorizationResp>): ListAggregationAuthorizationsResponse {
        this['aggregation_authorizations'] = aggregationAuthorizations;
        return this;
    }
    public set aggregationAuthorizations(aggregationAuthorizations: Array<AggregationAuthorizationResp>  | undefined) {
        this['aggregation_authorizations'] = aggregationAuthorizations;
    }
    public get aggregationAuthorizations(): Array<AggregationAuthorizationResp> | undefined {
        return this['aggregation_authorizations'];
    }
    public withPageInfo(pageInfo: PageInfo): ListAggregationAuthorizationsResponse {
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