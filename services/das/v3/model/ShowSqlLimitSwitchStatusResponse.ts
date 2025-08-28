
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSqlLimitSwitchStatusResponse extends SdkResponse {
    private 'switch_status'?: ShowSqlLimitSwitchStatusResponseSwitchStatusEnum | string;
    public constructor() { 
        super();
    }
    public withSwitchStatus(switchStatus: ShowSqlLimitSwitchStatusResponseSwitchStatusEnum | string): ShowSqlLimitSwitchStatusResponse {
        this['switch_status'] = switchStatus;
        return this;
    }
    public set switchStatus(switchStatus: ShowSqlLimitSwitchStatusResponseSwitchStatusEnum | string  | undefined) {
        this['switch_status'] = switchStatus;
    }
    public get switchStatus(): ShowSqlLimitSwitchStatusResponseSwitchStatusEnum | string | undefined {
        return this['switch_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSqlLimitSwitchStatusResponseSwitchStatusEnum {
    ON = 'ON',
    OFF = 'OFF'
}
