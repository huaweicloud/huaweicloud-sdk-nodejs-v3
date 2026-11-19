
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBinlogSwitchResponse extends SdkResponse {
    private 'switch_status'?: string;
    private 'keep_days'?: number;
    public constructor() { 
        super();
    }
    public withSwitchStatus(switchStatus: string): ShowBinlogSwitchResponse {
        this['switch_status'] = switchStatus;
        return this;
    }
    public set switchStatus(switchStatus: string  | undefined) {
        this['switch_status'] = switchStatus;
    }
    public get switchStatus(): string | undefined {
        return this['switch_status'];
    }
    public withKeepDays(keepDays: number): ShowBinlogSwitchResponse {
        this['keep_days'] = keepDays;
        return this;
    }
    public set keepDays(keepDays: number  | undefined) {
        this['keep_days'] = keepDays;
    }
    public get keepDays(): number | undefined {
        return this['keep_days'];
    }
}