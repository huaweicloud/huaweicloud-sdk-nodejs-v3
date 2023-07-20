
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSecondLevelMonitoringResponse extends SdkResponse {
    private 'switch_option'?: boolean;
    public interval?: ShowSecondLevelMonitoringResponseIntervalEnum | number;
    public constructor() { 
        super();
    }
    public withSwitchOption(switchOption: boolean): ShowSecondLevelMonitoringResponse {
        this['switch_option'] = switchOption;
        return this;
    }
    public set switchOption(switchOption: boolean  | undefined) {
        this['switch_option'] = switchOption;
    }
    public get switchOption(): boolean | undefined {
        return this['switch_option'];
    }
    public withInterval(interval: ShowSecondLevelMonitoringResponseIntervalEnum | number): ShowSecondLevelMonitoringResponse {
        this['interval'] = interval;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSecondLevelMonitoringResponseIntervalEnum {
    NUMBER_1 = 1,
    NUMBER_5 = 5
}
