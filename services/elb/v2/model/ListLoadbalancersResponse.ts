import { LoadbalancerResp } from './LoadbalancerResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLoadbalancersResponse extends SdkResponse {
    public loadbalancers?: Array<LoadbalancerResp>;
    public constructor() { 
        super();
    }
    public withLoadbalancers(loadbalancers: Array<LoadbalancerResp>): ListLoadbalancersResponse {
        this['loadbalancers'] = loadbalancers;
        return this;
    }
}