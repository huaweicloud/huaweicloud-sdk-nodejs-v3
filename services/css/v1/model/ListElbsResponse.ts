import { LoadbalancersResource } from './LoadbalancersResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListElbsResponse extends SdkResponse {
    public loadbalancers?: Array<LoadbalancersResource>;
    public constructor() { 
        super();
    }
    public withLoadbalancers(loadbalancers: Array<LoadbalancersResource>): ListElbsResponse {
        this['loadbalancers'] = loadbalancers;
        return this;
    }
}