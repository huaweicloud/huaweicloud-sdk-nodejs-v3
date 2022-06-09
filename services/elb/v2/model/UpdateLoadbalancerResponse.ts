import { LoadbalancerResp } from './LoadbalancerResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateLoadbalancerResponse extends SdkResponse {
    public loadbalancer?: LoadbalancerResp;
    public constructor() { 
        super();
    }
    public withLoadbalancer(loadbalancer: LoadbalancerResp): UpdateLoadbalancerResponse {
        this['loadbalancer'] = loadbalancer;
        return this;
    }
}