import { NetworkInstance } from './NetworkInstance';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNetworkInstancesResponse extends SdkResponse {
    private 'network_instances'?: Array<NetworkInstance>;
    private 'page_info'?: PageInfo;
    private 'request_id'?: string;
    public constructor() { 
        super();
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
}