import { SetSwitchoverRatioInfo } from './SetSwitchoverRatioInfo';


export class SetDisasterRecoverySettingsRequestBody {
    private 'disaster_recovery_settings'?: Array<SetSwitchoverRatioInfo>;
    public constructor() { 
    }
    public withDisasterRecoverySettings(disasterRecoverySettings: Array<SetSwitchoverRatioInfo>): SetDisasterRecoverySettingsRequestBody {
        this['disaster_recovery_settings'] = disasterRecoverySettings;
        return this;
    }
    public set disasterRecoverySettings(disasterRecoverySettings: Array<SetSwitchoverRatioInfo>  | undefined) {
        this['disaster_recovery_settings'] = disasterRecoverySettings;
    }
    public get disasterRecoverySettings(): Array<SetSwitchoverRatioInfo> | undefined {
        return this['disaster_recovery_settings'];
    }
}