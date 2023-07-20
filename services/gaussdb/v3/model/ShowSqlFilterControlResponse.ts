
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSqlFilterControlResponse extends SdkResponse {
    private 'switch_status'?: string;
    public constructor() { 
        super();
    }
    public withSwitchStatus(switchStatus: string): ShowSqlFilterControlResponse {
        this['switch_status'] = switchStatus;
        return this;
    }
    public set switchStatus(switchStatus: string  | undefined) {
        this['switch_status'] = switchStatus;
    }
    public get switchStatus(): string | undefined {
        return this['switch_status'];
    }
}