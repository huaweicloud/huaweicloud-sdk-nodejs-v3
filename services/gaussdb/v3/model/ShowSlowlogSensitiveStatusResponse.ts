
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSlowlogSensitiveStatusResponse extends SdkResponse {
    private 'open_slow_log_switch'?: boolean;
    public constructor() { 
        super();
    }
    public withOpenSlowLogSwitch(openSlowLogSwitch: boolean): ShowSlowlogSensitiveStatusResponse {
        this['open_slow_log_switch'] = openSlowLogSwitch;
        return this;
    }
    public set openSlowLogSwitch(openSlowLogSwitch: boolean  | undefined) {
        this['open_slow_log_switch'] = openSlowLogSwitch;
    }
    public get openSlowLogSwitch(): boolean | undefined {
        return this['open_slow_log_switch'];
    }
}