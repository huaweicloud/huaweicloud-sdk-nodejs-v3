

export class AlarmLogResponseNewAlarmLog {
    public id?: string;
    private 'alarm_life'?: string;
    private 'send_email'?: boolean;
    private 'alarm_time'?: string;
    private 'alarm_type'?: string;
    private 'alarm_fix_time'?: string;
    private 'alarm_status'?: string;
    private 'alarm_risk'?: string;
    private 'alarm_description'?: string;
    public constructor() { 
    }
    public withId(id: string): AlarmLogResponseNewAlarmLog {
        this['id'] = id;
        return this;
    }
    public withAlarmLife(alarmLife: string): AlarmLogResponseNewAlarmLog {
        this['alarm_life'] = alarmLife;
        return this;
    }
    public set alarmLife(alarmLife: string  | undefined) {
        this['alarm_life'] = alarmLife;
    }
    public get alarmLife(): string | undefined {
        return this['alarm_life'];
    }
    public withSendEmail(sendEmail: boolean): AlarmLogResponseNewAlarmLog {
        this['send_email'] = sendEmail;
        return this;
    }
    public set sendEmail(sendEmail: boolean  | undefined) {
        this['send_email'] = sendEmail;
    }
    public get sendEmail(): boolean | undefined {
        return this['send_email'];
    }
    public withAlarmTime(alarmTime: string): AlarmLogResponseNewAlarmLog {
        this['alarm_time'] = alarmTime;
        return this;
    }
    public set alarmTime(alarmTime: string  | undefined) {
        this['alarm_time'] = alarmTime;
    }
    public get alarmTime(): string | undefined {
        return this['alarm_time'];
    }
    public withAlarmType(alarmType: string): AlarmLogResponseNewAlarmLog {
        this['alarm_type'] = alarmType;
        return this;
    }
    public set alarmType(alarmType: string  | undefined) {
        this['alarm_type'] = alarmType;
    }
    public get alarmType(): string | undefined {
        return this['alarm_type'];
    }
    public withAlarmFixTime(alarmFixTime: string): AlarmLogResponseNewAlarmLog {
        this['alarm_fix_time'] = alarmFixTime;
        return this;
    }
    public set alarmFixTime(alarmFixTime: string  | undefined) {
        this['alarm_fix_time'] = alarmFixTime;
    }
    public get alarmFixTime(): string | undefined {
        return this['alarm_fix_time'];
    }
    public withAlarmStatus(alarmStatus: string): AlarmLogResponseNewAlarmLog {
        this['alarm_status'] = alarmStatus;
        return this;
    }
    public set alarmStatus(alarmStatus: string  | undefined) {
        this['alarm_status'] = alarmStatus;
    }
    public get alarmStatus(): string | undefined {
        return this['alarm_status'];
    }
    public withAlarmRisk(alarmRisk: string): AlarmLogResponseNewAlarmLog {
        this['alarm_risk'] = alarmRisk;
        return this;
    }
    public set alarmRisk(alarmRisk: string  | undefined) {
        this['alarm_risk'] = alarmRisk;
    }
    public get alarmRisk(): string | undefined {
        return this['alarm_risk'];
    }
    public withAlarmDescription(alarmDescription: string): AlarmLogResponseNewAlarmLog {
        this['alarm_description'] = alarmDescription;
        return this;
    }
    public set alarmDescription(alarmDescription: string  | undefined) {
        this['alarm_description'] = alarmDescription;
    }
    public get alarmDescription(): string | undefined {
        return this['alarm_description'];
    }
}