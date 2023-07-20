import { EndpointGroupDetail } from './EndpointGroupDetail';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEndpointGroupsResponse extends SdkResponse {
    private 'endpoint_groups'?: Array<EndpointGroupDetail>;
    private 'page_info'?: PageInfo;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withEndpointGroups(endpointGroups: Array<EndpointGroupDetail>): ListEndpointGroupsResponse {
        this['endpoint_groups'] = endpointGroups;
        return this;
    }
    public set endpointGroups(endpointGroups: Array<EndpointGroupDetail>  | undefined) {
        this['endpoint_groups'] = endpointGroups;
    }
    public get endpointGroups(): Array<EndpointGroupDetail> | undefined {
        return this['endpoint_groups'];
    }
    public withPageInfo(pageInfo: PageInfo): ListEndpointGroupsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListEndpointGroupsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}