

export class ActionDeviceAlarm {
    public name?: string;
    private 'alarm_status'?: string;
    public severity?: string;
    public dimension?: string;
    public description?: string;
    public constructor(name?: string, alarmStatus?: string, severity?: string) { 
        this['name'] = name;
        this['alarm_status'] = alarmStatus;
        this['severity'] = severity;
    }
    public withName(name: string): ActionDeviceAlarm {
        this['name'] = name;
        return this;
    }
    public withAlarmStatus(alarmStatus: string): ActionDeviceAlarm {
        this['alarm_status'] = alarmStatus;
        return this;
    }
    public set alarmStatus(alarmStatus: string  | undefined) {
        this['alarm_status'] = alarmStatus;
    }
    public get alarmStatus(): string | undefined {
        return this['alarm_status'];
    }
    public withSeverity(severity: string): ActionDeviceAlarm {
        this['severity'] = severity;
        return this;
    }
    public withDimension(dimension: string): ActionDeviceAlarm {
        this['dimension'] = dimension;
        return this;
    }
    public withDescription(description: string): ActionDeviceAlarm {
        this['description'] = description;
        return this;
    }
}