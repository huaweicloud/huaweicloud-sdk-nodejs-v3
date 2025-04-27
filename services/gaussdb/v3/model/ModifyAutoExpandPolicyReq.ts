

export class ModifyAutoExpandPolicyReq {
    private 'switch_option'?: boolean;
    private 'limit_size'?: number;
    private 'trigger_available_percent'?: ModifyAutoExpandPolicyReqTriggerAvailablePercentEnum | number;
    private 'step_percent'?: number;
    public constructor() { 
    }
    public withSwitchOption(switchOption: boolean): ModifyAutoExpandPolicyReq {
        this['switch_option'] = switchOption;
        return this;
    }
    public set switchOption(switchOption: boolean  | undefined) {
        this['switch_option'] = switchOption;
    }
    public get switchOption(): boolean | undefined {
        return this['switch_option'];
    }
    public withLimitSize(limitSize: number): ModifyAutoExpandPolicyReq {
        this['limit_size'] = limitSize;
        return this;
    }
    public set limitSize(limitSize: number  | undefined) {
        this['limit_size'] = limitSize;
    }
    public get limitSize(): number | undefined {
        return this['limit_size'];
    }
    public withTriggerAvailablePercent(triggerAvailablePercent: ModifyAutoExpandPolicyReqTriggerAvailablePercentEnum | number): ModifyAutoExpandPolicyReq {
        this['trigger_available_percent'] = triggerAvailablePercent;
        return this;
    }
    public set triggerAvailablePercent(triggerAvailablePercent: ModifyAutoExpandPolicyReqTriggerAvailablePercentEnum | number  | undefined) {
        this['trigger_available_percent'] = triggerAvailablePercent;
    }
    public get triggerAvailablePercent(): ModifyAutoExpandPolicyReqTriggerAvailablePercentEnum | number | undefined {
        return this['trigger_available_percent'];
    }
    public withStepPercent(stepPercent: number): ModifyAutoExpandPolicyReq {
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
export enum ModifyAutoExpandPolicyReqTriggerAvailablePercentEnum {
    NUMBER_10 = 10,
    NUMBER_15 = 15,
    NUMBER_20 = 20
}
