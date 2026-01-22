import { UpdateFirewallNameRespData } from './UpdateFirewallNameRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateFirewallNameResponse extends SdkResponse {
    public data?: UpdateFirewallNameRespData;
    public constructor() { 
        super();
    }
    public withData(data: UpdateFirewallNameRespData): UpdateFirewallNameResponse {
        this['data'] = data;
        return this;
    }
}