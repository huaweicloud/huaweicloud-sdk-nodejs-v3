import { EndpointGroupDetail } from './EndpointGroupDetail';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEndpointGroupsResponse extends SdkResponse {
    private 'endpoint_groups'?: Array<EndpointGroupDetail> | undefined;
    private 'page_info'?: PageInfo | undefined;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withEndpointGroups(endpointGroups: Array<EndpointGroupDetail>): ListEndpointGroupsResponse {
        this['endpoint_groups'] = endpointGroups;
        return this;
    }
    public set endpointGroups(endpointGroups: Array<EndpointGroupDetail> | undefined) {
        this['endpoint_groups'] = endpointGroups;
    }
    public get endpointGroups() {
        return this['endpoint_groups'];
    }
    public withPageInfo(pageInfo: PageInfo): ListEndpointGroupsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListEndpointGroupsResponse {
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