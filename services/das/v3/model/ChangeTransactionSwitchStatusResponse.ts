
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeTransactionSwitchStatusResponse extends SdkResponse {
    private 'switch_status'?: ChangeTransactionSwitchStatusResponseSwitchStatusEnum | string;
    public constructor() { 
        super();
    }
    public withSwitchStatus(switchStatus: ChangeTransactionSwitchStatusResponseSwitchStatusEnum | string): ChangeTransactionSwitchStatusResponse {
        this['switch_status'] = switchStatus;
        return this;
    }
    public set switchStatus(switchStatus: ChangeTransactionSwitchStatusResponseSwitchStatusEnum | string  | undefined) {
        this['switch_status'] = switchStatus;
    }
    public get switchStatus(): ChangeTransactionSwitchStatusResponseSwitchStatusEnum | string | undefined {
        return this['switch_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ChangeTransactionSwitchStatusResponseSwitchStatusEnum {
    ENABLED = 'Enabled',
    DISABLED = 'Disabled'
}
