

export class AlarmDetailResponse {
    private 'alarm_id'?: string | undefined;
    private 'alarm_name'?: string | undefined;
    private 'alarm_level'?: string | undefined;
    private 'alarm_source'?: string | undefined;
    private 'alarm_message'?: string | undefined;
    private 'alarm_location'?: string | undefined;
    private 'resource_id'?: string | undefined;
    private 'resource_id_name'?: string | undefined;
    private 'alarm_generate_date'?: string | undefined;
    private 'alarm_status'?: string | undefined;
    public constructor() { 
    }
    public withAlarmId(alarmId: string): AlarmDetailResponse {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId() {
        return this['alarm_id'];
    }
    public withAlarmName(alarmName: string): AlarmDetailResponse {
        this['alarm_name'] = alarmName;
        return this;
    }
    public set alarmName(alarmName: string | undefined) {
        this['alarm_name'] = alarmName;
    }
    public get alarmName() {
        return this['alarm_name'];
    }
    public withAlarmLevel(alarmLevel: string): AlarmDetailResponse {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: string | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel() {
        return this['alarm_level'];
    }
    public withAlarmSource(alarmSource: string): AlarmDetailResponse {
        this['alarm_source'] = alarmSource;
        return this;
    }
    public set alarmSource(alarmSource: string | undefined) {
        this['alarm_source'] = alarmSource;
    }
    public get alarmSource() {
        return this['alarm_source'];
    }
    public withAlarmMessage(alarmMessage: string): AlarmDetailResponse {
        this['alarm_message'] = alarmMessage;
        return this;
    }
    public set alarmMessage(alarmMessage: string | undefined) {
        this['alarm_message'] = alarmMessage;
    }
    public get alarmMessage() {
        return this['alarm_message'];
    }
    public withAlarmLocation(alarmLocation: string): AlarmDetailResponse {
        this['alarm_location'] = alarmLocation;
        return this;
    }
    public set alarmLocation(alarmLocation: string | undefined) {
        this['alarm_location'] = alarmLocation;
    }
    public get alarmLocation() {
        return this['alarm_location'];
    }
    public withResourceId(resourceId: string): AlarmDetailResponse {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceIdName(resourceIdName: string): AlarmDetailResponse {
        this['resource_id_name'] = resourceIdName;
        return this;
    }
    public set resourceIdName(resourceIdName: string | undefined) {
        this['resource_id_name'] = resourceIdName;
    }
    public get resourceIdName() {
        return this['resource_id_name'];
    }
    public withAlarmGenerateDate(alarmGenerateDate: string): AlarmDetailResponse {
        this['alarm_generate_date'] = alarmGenerateDate;
        return this;
    }
    public set alarmGenerateDate(alarmGenerateDate: string | undefined) {
        this['alarm_generate_date'] = alarmGenerateDate;
    }
    public get alarmGenerateDate() {
        return this['alarm_generate_date'];
    }
    public withAlarmStatus(alarmStatus: string): AlarmDetailResponse {
        this['alarm_status'] = alarmStatus;
        return this;
    }
    public set alarmStatus(alarmStatus: string | undefined) {
        this['alarm_status'] = alarmStatus;
    }
    public get alarmStatus() {
        return this['alarm_status'];
    }
}