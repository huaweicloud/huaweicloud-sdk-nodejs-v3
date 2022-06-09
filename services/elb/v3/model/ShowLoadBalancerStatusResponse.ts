import { LoadBalancerStatusResult } from './LoadBalancerStatusResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLoadBalancerStatusResponse extends SdkResponse {
    public statuses?: LoadBalancerStatusResult;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withStatuses(statuses: LoadBalancerStatusResult): ShowLoadBalancerStatusResponse {
        this['statuses'] = statuses;
        return this;
    }
    public withRequestId(requestId: string): ShowLoadBalancerStatusResponse {
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