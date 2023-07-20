import { LoadBalancer } from './LoadBalancer';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLoadBalancersResponse extends SdkResponse {
    public loadbalancers?: Array<LoadBalancer>;
    private 'page_info'?: PageInfo;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withLoadbalancers(loadbalancers: Array<LoadBalancer>): ListLoadBalancersResponse {
        this['loadbalancers'] = loadbalancers;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListLoadBalancersResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListLoadBalancersResponse {
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