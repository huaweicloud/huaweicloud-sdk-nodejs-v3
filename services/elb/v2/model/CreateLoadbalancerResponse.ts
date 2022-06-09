import { LoadbalancerResp } from './LoadbalancerResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateLoadbalancerResponse extends SdkResponse {
    public loadbalancer?: LoadbalancerResp;
    public constructor() { 
        super();
    }
    public withLoadbalancer(loadbalancer: LoadbalancerResp): CreateLoadbalancerResponse {
        this['loadbalancer'] = loadbalancer;
        return this;
    }
}