import { FirewallProtectionStatusVO } from './FirewallProtectionStatusVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSnFirewallProtectionStatusResponse extends SdkResponse {
    public data?: FirewallProtectionStatusVO;
    public constructor() { 
        super();
    }
    public withData(data: FirewallProtectionStatusVO): ShowSnFirewallProtectionStatusResponse {
        this['data'] = data;
        return this;
    }
}