
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetHaConfigurationResponse extends SdkResponse {
    private 'disaster_recovery_choice'?: GetHaConfigurationResponseDisasterRecoveryChoiceEnum | string;
    public constructor() { 
        super();
    }
    public withDisasterRecoveryChoice(disasterRecoveryChoice: GetHaConfigurationResponseDisasterRecoveryChoiceEnum | string): GetHaConfigurationResponse {
        this['disaster_recovery_choice'] = disasterRecoveryChoice;
        return this;
    }
    public set disasterRecoveryChoice(disasterRecoveryChoice: GetHaConfigurationResponseDisasterRecoveryChoiceEnum | string  | undefined) {
        this['disaster_recovery_choice'] = disasterRecoveryChoice;
    }
    public get disasterRecoveryChoice(): GetHaConfigurationResponseDisasterRecoveryChoiceEnum | string | undefined {
        return this['disaster_recovery_choice'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GetHaConfigurationResponseDisasterRecoveryChoiceEnum {
    ACCEPT = 'ACCEPT',
    REJECT = 'REJECT'
}
