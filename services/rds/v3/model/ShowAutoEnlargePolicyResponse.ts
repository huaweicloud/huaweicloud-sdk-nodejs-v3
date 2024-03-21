
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAutoEnlargePolicyResponse extends SdkResponse {
    private 'switch_option'?: boolean;
    private 'limit_size'?: number;
    private 'trigger_threshold'?: number;
    private 'step_percent'?: number;
    public constructor() { 
        super();
    }
    public withSwitchOption(switchOption: boolean): ShowAutoEnlargePolicyResponse {
        this['switch_option'] = switchOption;
        return this;
    }
    public set switchOption(switchOption: boolean  | undefined) {
        this['switch_option'] = switchOption;
    }
    public get switchOption(): boolean | undefined {
        return this['switch_option'];
    }
    public withLimitSize(limitSize: number): ShowAutoEnlargePolicyResponse {
        this['limit_size'] = limitSize;
        return this;
    }
    public set limitSize(limitSize: number  | undefined) {
        this['limit_size'] = limitSize;
    }
    public get limitSize(): number | undefined {
        return this['limit_size'];
    }
    public withTriggerThreshold(triggerThreshold: number): ShowAutoEnlargePolicyResponse {
        this['trigger_threshold'] = triggerThreshold;
        return this;
    }
    public set triggerThreshold(triggerThreshold: number  | undefined) {
        this['trigger_threshold'] = triggerThreshold;
    }
    public get triggerThreshold(): number | undefined {
        return this['trigger_threshold'];
    }
    public withStepPercent(stepPercent: number): ShowAutoEnlargePolicyResponse {
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