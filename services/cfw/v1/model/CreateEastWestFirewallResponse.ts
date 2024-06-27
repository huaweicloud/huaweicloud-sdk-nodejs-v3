import { CreateEWFirewallResp } from './CreateEWFirewallResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateEastWestFirewallResponse extends SdkResponse {
    public data?: CreateEWFirewallResp;
    public constructor() { 
        super();
    }
    public withData(data: CreateEWFirewallResp): CreateEastWestFirewallResponse {
        this['data'] = data;
        return this;
    }
}