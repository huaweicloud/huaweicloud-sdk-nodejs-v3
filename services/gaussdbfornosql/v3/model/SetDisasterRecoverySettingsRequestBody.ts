import { SwitchoverRatioInfo } from './SwitchoverRatioInfo';


export class SetDisasterRecoverySettingsRequestBody {
    private 'disaster_recovery_settings'?: Array<SwitchoverRatioInfo>;
    public constructor() { 
    }
    public withDisasterRecoverySettings(disasterRecoverySettings: Array<SwitchoverRatioInfo>): SetDisasterRecoverySettingsRequestBody {
        this['disaster_recovery_settings'] = disasterRecoverySettings;
        return this;
    }
    public set disasterRecoverySettings(disasterRecoverySettings: Array<SwitchoverRatioInfo>  | undefined) {
        this['disaster_recovery_settings'] = disasterRecoverySettings;
    }
    public get disasterRecoverySettings(): Array<SwitchoverRatioInfo> | undefined {
        return this['disaster_recovery_settings'];
    }
}