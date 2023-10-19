import { ListResponseBody } from './ListResponseBody';
import { NetworkInstance } from './NetworkInstance';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNetworkInstancesResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    private 'network_instances'?: Array<NetworkInstance>;
    public constructor(requestId?: string, networkInstances?: Array<NetworkInstance>) { 
        super();
        this['request_id'] = requestId;
        this['network_instances'] = networkInstances;
    }
    public withRequestId(requestId: string): ListNetworkInstancesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListNetworkInstancesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withNetworkInstances(networkInstances: Array<NetworkInstance>): ListNetworkInstancesResponse {
        this['network_instances'] = networkInstances;
        return this;
    }
    public set networkInstances(networkInstances: Array<NetworkInstance>  | undefined) {
        this['network_instances'] = networkInstances;
    }
    public get networkInstances(): Array<NetworkInstance> | undefined {
        return this['network_instances'];
    }
}