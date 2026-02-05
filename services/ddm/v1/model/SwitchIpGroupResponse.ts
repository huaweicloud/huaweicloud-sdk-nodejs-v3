
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SwitchIpGroupResponse extends SdkResponse {
    private 'enable_ipgroup'?: boolean;
    public constructor() { 
        super();
    }
    public withEnableIpgroup(enableIpgroup: boolean): SwitchIpGroupResponse {
        this['enable_ipgroup'] = enableIpgroup;
        return this;
    }
    public set enableIpgroup(enableIpgroup: boolean  | undefined) {
        this['enable_ipgroup'] = enableIpgroup;
    }
    public get enableIpgroup(): boolean | undefined {
        return this['enable_ipgroup'];
    }
}