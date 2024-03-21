

export class FailoverConditions {
    private 'input_loss_threshold_msec'?: number;
    private 'input_preference'?: FailoverConditionsInputPreferenceEnum | string;
    public constructor() { 
    }
    public withInputLossThresholdMsec(inputLossThresholdMsec: number): FailoverConditions {
        this['input_loss_threshold_msec'] = inputLossThresholdMsec;
        return this;
    }
    public set inputLossThresholdMsec(inputLossThresholdMsec: number  | undefined) {
        this['input_loss_threshold_msec'] = inputLossThresholdMsec;
    }
    public get inputLossThresholdMsec(): number | undefined {
        return this['input_loss_threshold_msec'];
    }
    public withInputPreference(inputPreference: FailoverConditionsInputPreferenceEnum | string): FailoverConditions {
        this['input_preference'] = inputPreference;
        return this;
    }
    public set inputPreference(inputPreference: FailoverConditionsInputPreferenceEnum | string  | undefined) {
        this['input_preference'] = inputPreference;
    }
    public get inputPreference(): FailoverConditionsInputPreferenceEnum | string | undefined {
        return this['input_preference'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum FailoverConditionsInputPreferenceEnum {
    EQUAL = 'EQUAL',
    PRIMARY = 'PRIMARY'
}
