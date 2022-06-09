import { LoadbalancerResp } from './LoadbalancerResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowLoadbalancerResponse extends SdkResponse {
    public loadbalancer?: LoadbalancerResp;
    public constructor() { 
        super();
    }
    public withLoadbalancer(loadbalancer: LoadbalancerResp): ShowLoadbalancerResponse {
        this['loadbalancer'] = loadbalancer;
        return this;
    }
}