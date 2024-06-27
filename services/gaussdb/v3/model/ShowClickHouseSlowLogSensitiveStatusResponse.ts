
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClickHouseSlowLogSensitiveStatusResponse extends SdkResponse {
    private 'open_slow_log_switch'?: string;
    public constructor() { 
        super();
    }
    public withOpenSlowLogSwitch(openSlowLogSwitch: string): ShowClickHouseSlowLogSensitiveStatusResponse {
        this['open_slow_log_switch'] = openSlowLogSwitch;
        return this;
    }
    public set openSlowLogSwitch(openSlowLogSwitch: string  | undefined) {
        this['open_slow_log_switch'] = openSlowLogSwitch;
    }
    public get openSlowLogSwitch(): string | undefined {
        return this['open_slow_log_switch'];
    }
}