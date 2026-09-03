
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowBackupUsageAlarmConfigResponse extends SdkResponse {
    private 'alarm_enabled'?: ShowBackupUsageAlarmConfigResponseAlarmEnabledEnum | string;
    private 'threshold_percent'?: number;
    private 'increment_percent'?: number;
    public constructor() { 
        super();
    }
    public withAlarmEnabled(alarmEnabled: ShowBackupUsageAlarmConfigResponseAlarmEnabledEnum | string): ShowBackupUsageAlarmConfigResponse {
        this['alarm_enabled'] = alarmEnabled;
        return this;
    }
    public set alarmEnabled(alarmEnabled: ShowBackupUsageAlarmConfigResponseAlarmEnabledEnum | string  | undefined) {
        this['alarm_enabled'] = alarmEnabled;
    }
    public get alarmEnabled(): ShowBackupUsageAlarmConfigResponseAlarmEnabledEnum | string | undefined {
        return this['alarm_enabled'];
    }
    public withThresholdPercent(thresholdPercent: number): ShowBackupUsageAlarmConfigResponse {
        this['threshold_percent'] = thresholdPercent;
        return this;
    }
    public set thresholdPercent(thresholdPercent: number  | undefined) {
        this['threshold_percent'] = thresholdPercent;
    }
    public get thresholdPercent(): number | undefined {
        return this['threshold_percent'];
    }
    public withIncrementPercent(incrementPercent: number): ShowBackupUsageAlarmConfigResponse {
        this['increment_percent'] = incrementPercent;
        return this;
    }
    public set incrementPercent(incrementPercent: number  | undefined) {
        this['increment_percent'] = incrementPercent;
    }
    public get incrementPercent(): number | undefined {
        return this['increment_percent'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowBackupUsageAlarmConfigResponseAlarmEnabledEnum {
    ON = 'ON',
    OFF = 'OFF'
}
