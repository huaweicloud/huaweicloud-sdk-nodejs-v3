import { EndpointDetail } from './EndpointDetail';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEndpointsResponse extends SdkResponse {
    public endpoints?: Array<EndpointDetail>;
    private 'page_info'?: PageInfo | undefined;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withEndpoints(endpoints: Array<EndpointDetail>): ListEndpointsResponse {
        this['endpoints'] = endpoints;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListEndpointsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListEndpointsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
}