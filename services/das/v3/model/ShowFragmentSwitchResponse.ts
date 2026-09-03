
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowFragmentSwitchResponse extends SdkResponse {
    private 'switch_name'?: string;
    public open?: boolean;
    public constructor() { 
        super();
    }
    public withSwitchName(switchName: string): ShowFragmentSwitchResponse {
        this['switch_name'] = switchName;
        return this;
    }
    public set switchName(switchName: string  | undefined) {
        this['switch_name'] = switchName;
    }
    public get switchName(): string | undefined {
        return this['switch_name'];
    }
    public withOpen(open: boolean): ShowFragmentSwitchResponse {
        this['open'] = open;
        return this;
    }
}