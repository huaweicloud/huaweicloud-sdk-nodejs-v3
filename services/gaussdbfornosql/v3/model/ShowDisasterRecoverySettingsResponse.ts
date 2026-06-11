import { QuerySwitchoverRatioInfo } from './QuerySwitchoverRatioInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDisasterRecoverySettingsResponse extends SdkResponse {
    private 'disaster_recovery_settings'?: Array<QuerySwitchoverRatioInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withDisasterRecoverySettings(disasterRecoverySettings: Array<QuerySwitchoverRatioInfo>): ShowDisasterRecoverySettingsResponse {
        this['disaster_recovery_settings'] = disasterRecoverySettings;
        return this;
    }
    public set disasterRecoverySettings(disasterRecoverySettings: Array<QuerySwitchoverRatioInfo>  | undefined) {
        this['disaster_recovery_settings'] = disasterRecoverySettings;
    }
    public get disasterRecoverySettings(): Array<QuerySwitchoverRatioInfo> | undefined {
        return this['disaster_recovery_settings'];
    }
    public withTotalCount(totalCount: number): ShowDisasterRecoverySettingsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}