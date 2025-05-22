import { PageInfo } from './PageInfo';
import { RecycleLoadBalancer } from './RecycleLoadBalancer';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRecycleBinLoadBalancersResponse extends SdkResponse {
    public loadbalancers?: Array<RecycleLoadBalancer>;
    private 'page_info'?: PageInfo;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withLoadbalancers(loadbalancers: Array<RecycleLoadBalancer>): ListRecycleBinLoadBalancersResponse {
        this['loadbalancers'] = loadbalancers;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListRecycleBinLoadBalancersResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListRecycleBinLoadBalancersResponse {
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