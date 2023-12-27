

export class AlarmInfoResponseAlarmInfo {
    private 'alarm_time'?: number;
    private 'job_name'?: string;
    private 'schedule_type'?: number;
    private 'send_msg'?: string;
    private 'plan_time'?: number;
    private 'remind_type'?: number;
    private 'send_status'?: number;
    private 'job_id'?: number;
    public constructor() { 
    }
    public withAlarmTime(alarmTime: number): AlarmInfoResponseAlarmInfo {
        this['alarm_time'] = alarmTime;
        return this;
    }
    public set alarmTime(alarmTime: number  | undefined) {
        this['alarm_time'] = alarmTime;
    }
    public get alarmTime(): number | undefined {
        return this['alarm_time'];
    }
    public withJobName(jobName: string): AlarmInfoResponseAlarmInfo {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withScheduleType(scheduleType: number): AlarmInfoResponseAlarmInfo {
        this['schedule_type'] = scheduleType;
        return this;
    }
    public set scheduleType(scheduleType: number  | undefined) {
        this['schedule_type'] = scheduleType;
    }
    public get scheduleType(): number | undefined {
        return this['schedule_type'];
    }
    public withSendMsg(sendMsg: string): AlarmInfoResponseAlarmInfo {
        this['send_msg'] = sendMsg;
        return this;
    }
    public set sendMsg(sendMsg: string  | undefined) {
        this['send_msg'] = sendMsg;
    }
    public get sendMsg(): string | undefined {
        return this['send_msg'];
    }
    public withPlanTime(planTime: number): AlarmInfoResponseAlarmInfo {
        this['plan_time'] = planTime;
        return this;
    }
    public set planTime(planTime: number  | undefined) {
        this['plan_time'] = planTime;
    }
    public get planTime(): number | undefined {
        return this['plan_time'];
    }
    public withRemindType(remindType: number): AlarmInfoResponseAlarmInfo {
        this['remind_type'] = remindType;
        return this;
    }
    public set remindType(remindType: number  | undefined) {
        this['remind_type'] = remindType;
    }
    public get remindType(): number | undefined {
        return this['remind_type'];
    }
    public withSendStatus(sendStatus: number): AlarmInfoResponseAlarmInfo {
        this['send_status'] = sendStatus;
        return this;
    }
    public set sendStatus(sendStatus: number  | undefined) {
        this['send_status'] = sendStatus;
    }
    public get sendStatus(): number | undefined {
        return this['send_status'];
    }
    public withJobId(jobId: number): AlarmInfoResponseAlarmInfo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: number  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): number | undefined {
        return this['job_id'];
    }
}