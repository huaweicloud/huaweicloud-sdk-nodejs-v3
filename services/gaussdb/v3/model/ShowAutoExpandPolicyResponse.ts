
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutoExpandPolicyResponse extends SdkResponse {
    private 'switch_option'?: boolean;
    private 'limit_size'?: number;
    private 'trigger_available_percent'?: ShowAutoExpandPolicyResponseTriggerAvailablePercentEnum | number;
    private 'step_percent'?: number;
    public constructor() { 
        super();
    }
    public withSwitchOption(switchOption: boolean): ShowAutoExpandPolicyResponse {
        this['switch_option'] = switchOption;
        return this;
    }
    public set switchOption(switchOption: boolean  | undefined) {
        this['switch_option'] = switchOption;
    }
    public get switchOption(): boolean | undefined {
        return this['switch_option'];
    }
    public withLimitSize(limitSize: number): ShowAutoExpandPolicyResponse {
        this['limit_size'] = limitSize;
        return this;
    }
    public set limitSize(limitSize: number  | undefined) {
        this['limit_size'] = limitSize;
    }
    public get limitSize(): number | undefined {
        return this['limit_size'];
    }
    public withTriggerAvailablePercent(triggerAvailablePercent: ShowAutoExpandPolicyResponseTriggerAvailablePercentEnum | number): ShowAutoExpandPolicyResponse {
        this['trigger_available_percent'] = triggerAvailablePercent;
        return this;
    }
    public set triggerAvailablePercent(triggerAvailablePercent: ShowAutoExpandPolicyResponseTriggerAvailablePercentEnum | number  | undefined) {
        this['trigger_available_percent'] = triggerAvailablePercent;
    }
    public get triggerAvailablePercent(): ShowAutoExpandPolicyResponseTriggerAvailablePercentEnum | number | undefined {
        return this['trigger_available_percent'];
    }
    public withStepPercent(stepPercent: number): ShowAutoExpandPolicyResponse {
        this['step_percent'] = stepPercent;
        return this;
    }
    public set stepPercent(stepPercent: number  | undefined) {
        this['step_percent'] = stepPercent;
    }
    public get stepPercent(): number | undefined {
        return this['step_percent'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAutoExpandPolicyResponseTriggerAvailablePercentEnum {
    NUMBER_10 = 10,
    NUMBER_15 = 15,
    NUMBER_20 = 20
}
