import { LoadBalancerTopologyResult } from './LoadBalancerTopologyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLoadBalancerTopologyResponse extends SdkResponse {
    public topology?: LoadBalancerTopologyResult;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withTopology(topology: LoadBalancerTopologyResult): ShowLoadBalancerTopologyResponse {
        this['topology'] = topology;
        return this;
    }
    public withRequestId(requestId: string): ShowLoadBalancerTopologyResponse {
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