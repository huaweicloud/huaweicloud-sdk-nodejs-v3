

export class ModifyAutoEnlargePolicyRequestBody {
    private 'switch_option'?: boolean;
    private 'limit_volume_size'?: number;
    private 'trigger_available_percent'?: number;
    private 'step_size'?: number;
    private 'step_percent'?: number;
    public constructor() { 
    }
    public withSwitchOption(switchOption: boolean): ModifyAutoEnlargePolicyRequestBody {
        this['switch_option'] = switchOption;
        return this;
    }
    public set switchOption(switchOption: boolean  | undefined) {
        this['switch_option'] = switchOption;
    }
    public get switchOption(): boolean | undefined {
        return this['switch_option'];
    }
    public withLimitVolumeSize(limitVolumeSize: number): ModifyAutoEnlargePolicyRequestBody {
        this['limit_volume_size'] = limitVolumeSize;
        return this;
    }
    public set limitVolumeSize(limitVolumeSize: number  | undefined) {
        this['limit_volume_size'] = limitVolumeSize;
    }
    public get limitVolumeSize(): number | undefined {
        return this['limit_volume_size'];
    }
    public withTriggerAvailablePercent(triggerAvailablePercent: number): ModifyAutoEnlargePolicyRequestBody {
        this['trigger_available_percent'] = triggerAvailablePercent;
        return this;
    }
    public set triggerAvailablePercent(triggerAvailablePercent: number  | undefined) {
        this['trigger_available_percent'] = triggerAvailablePercent;
    }
    public get triggerAvailablePercent(): number | undefined {
        return this['trigger_available_percent'];
    }
    public withStepSize(stepSize: number): ModifyAutoEnlargePolicyRequestBody {
        this['step_size'] = stepSize;
        return this;
    }
    public set stepSize(stepSize: number  | undefined) {
        this['step_size'] = stepSize;
    }
    public get stepSize(): number | undefined {
        return this['step_size'];
    }
    public withStepPercent(stepPercent: number): ModifyAutoEnlargePolicyRequestBody {
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