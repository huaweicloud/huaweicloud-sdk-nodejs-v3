

export class ListAlarmHistoriesRequest {
    private 'group_id'?: string;
    private 'alarm_id'?: string;
    private 'alarm_name'?: string;
    private 'alarm_status'?: ListAlarmHistoriesRequestAlarmStatusEnum | string;
    private 'alarm_level'?: ListAlarmHistoriesRequestAlarmLevelEnum | number;
    public namespace?: string;
    public from?: string;
    public to?: string;
    public start?: string;
    public limit?: string;
    public constructor() { 
    }
    public withGroupId(groupId: string): ListAlarmHistoriesRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withAlarmId(alarmId: string): ListAlarmHistoriesRequest {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withAlarmName(alarmName: string): ListAlarmHistoriesRequest {
        this['alarm_name'] = alarmName;
        return this;
    }
    public set alarmName(alarmName: string  | undefined) {
        this['alarm_name'] = alarmName;
    }
    public get alarmName(): string | undefined {
        return this['alarm_name'];
    }
    public withAlarmStatus(alarmStatus: ListAlarmHistoriesRequestAlarmStatusEnum | string): ListAlarmHistoriesRequest {
        this['alarm_status'] = alarmStatus;
        return this;
    }
    public set alarmStatus(alarmStatus: ListAlarmHistoriesRequestAlarmStatusEnum | string  | undefined) {
        this['alarm_status'] = alarmStatus;
    }
    public get alarmStatus(): ListAlarmHistoriesRequestAlarmStatusEnum | string | undefined {
        return this['alarm_status'];
    }
    public withAlarmLevel(alarmLevel: ListAlarmHistoriesRequestAlarmLevelEnum | number): ListAlarmHistoriesRequest {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: ListAlarmHistoriesRequestAlarmLevelEnum | number  | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel(): ListAlarmHistoriesRequestAlarmLevelEnum | number | undefined {
        return this['alarm_level'];
    }
    public withNamespace(namespace: string): ListAlarmHistoriesRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withFrom(from: string): ListAlarmHistoriesRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: string): ListAlarmHistoriesRequest {
        this['to'] = to;
        return this;
    }
    public withStart(start: string): ListAlarmHistoriesRequest {
        this['start'] = start;
        return this;
    }
    public withLimit(limit: string): ListAlarmHistoriesRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAlarmHistoriesRequestAlarmStatusEnum {
    OK = 'ok',
    ALARM = 'alarm',
    INSUFFICIENT_DATA = 'insufficient_data',
    INVALID = 'invalid'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAlarmHistoriesRequestAlarmLevelEnum {
    NUMBER_1 = 1,
    NUMBER_2 = 2,
    NUMBER_3 = 3,
    NUMBER_4 = 4
}
