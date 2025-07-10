

export class ClearAlarmRequestBody {
    public remarks?: string;
    private 'alarm_ids'?: string;
    private 'is_service_interrupt'?: boolean;
    private 'start_time'?: number;
    private 'fault_recovery_time'?: number;
    public constructor(alarmIds?: string) { 
        this['alarm_ids'] = alarmIds;
    }
    public withRemarks(remarks: string): ClearAlarmRequestBody {
        this['remarks'] = remarks;
        return this;
    }
    public withAlarmIds(alarmIds: string): ClearAlarmRequestBody {
        this['alarm_ids'] = alarmIds;
        return this;
    }
    public set alarmIds(alarmIds: string  | undefined) {
        this['alarm_ids'] = alarmIds;
    }
    public get alarmIds(): string | undefined {
        return this['alarm_ids'];
    }
    public withIsServiceInterrupt(isServiceInterrupt: boolean): ClearAlarmRequestBody {
        this['is_service_interrupt'] = isServiceInterrupt;
        return this;
    }
    public set isServiceInterrupt(isServiceInterrupt: boolean  | undefined) {
        this['is_service_interrupt'] = isServiceInterrupt;
    }
    public get isServiceInterrupt(): boolean | undefined {
        return this['is_service_interrupt'];
    }
    public withStartTime(startTime: number): ClearAlarmRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withFaultRecoveryTime(faultRecoveryTime: number): ClearAlarmRequestBody {
        this['fault_recovery_time'] = faultRecoveryTime;
        return this;
    }
    public set faultRecoveryTime(faultRecoveryTime: number  | undefined) {
        this['fault_recovery_time'] = faultRecoveryTime;
    }
    public get faultRecoveryTime(): number | undefined {
        return this['fault_recovery_time'];
    }
}