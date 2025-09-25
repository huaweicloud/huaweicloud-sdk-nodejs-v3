

export class AlarmHistoryRecordResult {
    private 'alarm_id'?: string;
    public name?: string;
    public status?: string;
    private 'alarm_type'?: string;
    public level?: number;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    private 'begin_time'?: number;
    private 'update_time'?: number;
    public constructor(alarmId?: string, name?: string, status?: string, alarmType?: string, level?: number, instanceId?: string, instanceName?: string, beginTime?: number, updateTime?: number) { 
        this['alarm_id'] = alarmId;
        this['name'] = name;
        this['status'] = status;
        this['alarm_type'] = alarmType;
        this['level'] = level;
        this['instance_id'] = instanceId;
        this['instance_name'] = instanceName;
        this['begin_time'] = beginTime;
        this['update_time'] = updateTime;
    }
    public withAlarmId(alarmId: string): AlarmHistoryRecordResult {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withName(name: string): AlarmHistoryRecordResult {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): AlarmHistoryRecordResult {
        this['status'] = status;
        return this;
    }
    public withAlarmType(alarmType: string): AlarmHistoryRecordResult {
        this['alarm_type'] = alarmType;
        return this;
    }
    public set alarmType(alarmType: string  | undefined) {
        this['alarm_type'] = alarmType;
    }
    public get alarmType(): string | undefined {
        return this['alarm_type'];
    }
    public withLevel(level: number): AlarmHistoryRecordResult {
        this['level'] = level;
        return this;
    }
    public withInstanceId(instanceId: string): AlarmHistoryRecordResult {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): AlarmHistoryRecordResult {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withBeginTime(beginTime: number): AlarmHistoryRecordResult {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: number  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): number | undefined {
        return this['begin_time'];
    }
    public withUpdateTime(updateTime: number): AlarmHistoryRecordResult {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}