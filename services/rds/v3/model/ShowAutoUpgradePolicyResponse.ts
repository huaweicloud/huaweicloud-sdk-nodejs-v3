
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutoUpgradePolicyResponse extends SdkResponse {
    private 'switch_option'?: boolean;
    public constructor() { 
        super();
    }
    public withSwitchOption(switchOption: boolean): ShowAutoUpgradePolicyResponse {
        this['switch_option'] = switchOption;
        return this;
    }
    public set switchOption(switchOption: boolean  | undefined) {
        this['switch_option'] = switchOption;
    }
    public get switchOption(): boolean | undefined {
        return this['switch_option'];
    }
}