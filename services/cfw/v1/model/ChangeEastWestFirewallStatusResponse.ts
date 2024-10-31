import { ChangeEastWestFirewallStatusResponseData } from './ChangeEastWestFirewallStatusResponseData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeEastWestFirewallStatusResponse extends SdkResponse {
    public data?: ChangeEastWestFirewallStatusResponseData;
    public constructor() { 
        super();
    }
    public withData(data: ChangeEastWestFirewallStatusResponseData): ChangeEastWestFirewallStatusResponse {
        this['data'] = data;
        return this;
    }
}