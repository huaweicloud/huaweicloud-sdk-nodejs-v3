

export class UpdateBackupUsageAlarmConfigRequestBody {
    private 'alarm_enabled'?: string;
    private 'threshold_percent'?: number;
    private 'increment_percent'?: number;
    public constructor(alarmEnabled?: string) { 
        this['alarm_enabled'] = alarmEnabled;
    }
    public withAlarmEnabled(alarmEnabled: string): UpdateBackupUsageAlarmConfigRequestBody {
        this['alarm_enabled'] = alarmEnabled;
        return this;
    }
    public set alarmEnabled(alarmEnabled: string  | undefined) {
        this['alarm_enabled'] = alarmEnabled;
    }
    public get alarmEnabled(): string | undefined {
        return this['alarm_enabled'];
    }
    public withThresholdPercent(thresholdPercent: number): UpdateBackupUsageAlarmConfigRequestBody {
        this['threshold_percent'] = thresholdPercent;
        return this;
    }
    public set thresholdPercent(thresholdPercent: number  | undefined) {
        this['threshold_percent'] = thresholdPercent;
    }
    public get thresholdPercent(): number | undefined {
        return this['threshold_percent'];
    }
    public withIncrementPercent(incrementPercent: number): UpdateBackupUsageAlarmConfigRequestBody {
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