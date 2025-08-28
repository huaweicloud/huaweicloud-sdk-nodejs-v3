
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTransactionSwitchStatusResponse extends SdkResponse {
    private 'switch_status'?: ShowTransactionSwitchStatusResponseSwitchStatusEnum | string;
    public constructor() { 
        super();
    }
    public withSwitchStatus(switchStatus: ShowTransactionSwitchStatusResponseSwitchStatusEnum | string): ShowTransactionSwitchStatusResponse {
        this['switch_status'] = switchStatus;
        return this;
    }
    public set switchStatus(switchStatus: ShowTransactionSwitchStatusResponseSwitchStatusEnum | string  | undefined) {
        this['switch_status'] = switchStatus;
    }
    public get switchStatus(): ShowTransactionSwitchStatusResponseSwitchStatusEnum | string | undefined {
        return this['switch_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowTransactionSwitchStatusResponseSwitchStatusEnum {
    ENABLED = 'Enabled',
    DISABLED = 'Disabled'
}
