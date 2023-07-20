

export class CustomerModifyAutoEnlargePolicyReq {
    private 'switch_option'?: boolean;
    private 'limit_size'?: number;
    private 'trigger_threshold'?: CustomerModifyAutoEnlargePolicyReqTriggerThresholdEnum | number;
    public constructor(switchOption?: boolean) { 
        this['switch_option'] = switchOption;
    }
    public withSwitchOption(switchOption: boolean): CustomerModifyAutoEnlargePolicyReq {
        this['switch_option'] = switchOption;
        return this;
    }
    public set switchOption(switchOption: boolean  | undefined) {
        this['switch_option'] = switchOption;
    }
    public get switchOption(): boolean | undefined {
        return this['switch_option'];
    }
    public withLimitSize(limitSize: number): CustomerModifyAutoEnlargePolicyReq {
        this['limit_size'] = limitSize;
        return this;
    }
    public set limitSize(limitSize: number  | undefined) {
        this['limit_size'] = limitSize;
    }
    public get limitSize(): number | undefined {
        return this['limit_size'];
    }
    public withTriggerThreshold(triggerThreshold: CustomerModifyAutoEnlargePolicyReqTriggerThresholdEnum | number): CustomerModifyAutoEnlargePolicyReq {
        this['trigger_threshold'] = triggerThreshold;
        return this;
    }
    public set triggerThreshold(triggerThreshold: CustomerModifyAutoEnlargePolicyReqTriggerThresholdEnum | number  | undefined) {
        this['trigger_threshold'] = triggerThreshold;
    }
    public get triggerThreshold(): CustomerModifyAutoEnlargePolicyReqTriggerThresholdEnum | number | undefined {
        return this['trigger_threshold'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CustomerModifyAutoEnlargePolicyReqTriggerThresholdEnum {
    NUMBER_10 = 10,
    NUMBER_15 = 15,
    NUMBER_20 = 20
}
