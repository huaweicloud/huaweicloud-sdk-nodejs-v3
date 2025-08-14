

export class UpdateHAConfigurationReqBody {
    private 'disaster_recovery_choice'?: UpdateHAConfigurationReqBodyDisasterRecoveryChoiceEnum | string;
    public constructor(disasterRecoveryChoice?: string) { 
        this['disaster_recovery_choice'] = disasterRecoveryChoice;
    }
    public withDisasterRecoveryChoice(disasterRecoveryChoice: UpdateHAConfigurationReqBodyDisasterRecoveryChoiceEnum | string): UpdateHAConfigurationReqBody {
        this['disaster_recovery_choice'] = disasterRecoveryChoice;
        return this;
    }
    public set disasterRecoveryChoice(disasterRecoveryChoice: UpdateHAConfigurationReqBodyDisasterRecoveryChoiceEnum | string  | undefined) {
        this['disaster_recovery_choice'] = disasterRecoveryChoice;
    }
    public get disasterRecoveryChoice(): UpdateHAConfigurationReqBodyDisasterRecoveryChoiceEnum | string | undefined {
        return this['disaster_recovery_choice'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateHAConfigurationReqBodyDisasterRecoveryChoiceEnum {
    ACCEPT = 'ACCEPT',
    REJECT = 'REJECT'
}
