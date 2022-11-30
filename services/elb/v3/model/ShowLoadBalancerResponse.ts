import { LoadBalancer } from './LoadBalancer';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLoadBalancerResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    public loadbalancer?: LoadBalancer;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ShowLoadBalancerResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withLoadbalancer(loadbalancer: LoadBalancer): ShowLoadBalancerResponse {
        this['loadbalancer'] = loadbalancer;
        return this;
    }
}