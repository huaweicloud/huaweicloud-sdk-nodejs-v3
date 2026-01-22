import { SwitchFirewallEipProtectionRespData } from './SwitchFirewallEipProtectionRespData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SwitchFirewallEipProtectionResponse extends SdkResponse {
    public data?: SwitchFirewallEipProtectionRespData;
    private 'fail_reason'?: string;
    public constructor() { 
        super();
    }
    public withData(data: SwitchFirewallEipProtectionRespData): SwitchFirewallEipProtectionResponse {
        this['data'] = data;
        return this;
    }
    public withFailReason(failReason: string): SwitchFirewallEipProtectionResponse {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
}