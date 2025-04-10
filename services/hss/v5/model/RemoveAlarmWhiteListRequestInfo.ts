import { AlarmWhiteListRequestInfo } from './AlarmWhiteListRequestInfo';


export class RemoveAlarmWhiteListRequestInfo {
    private 'data_list'?: Array<AlarmWhiteListRequestInfo>;
    private 'restore_alarm'?: boolean;
    private 'delete_all'?: boolean;
    private 'event_type'?: number;
    public constructor() { 
    }
    public withDataList(dataList: Array<AlarmWhiteListRequestInfo>): RemoveAlarmWhiteListRequestInfo {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AlarmWhiteListRequestInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AlarmWhiteListRequestInfo> | undefined {
        return this['data_list'];
    }
    public withRestoreAlarm(restoreAlarm: boolean): RemoveAlarmWhiteListRequestInfo {
        this['restore_alarm'] = restoreAlarm;
        return this;
    }
    public set restoreAlarm(restoreAlarm: boolean  | undefined) {
        this['restore_alarm'] = restoreAlarm;
    }
    public get restoreAlarm(): boolean | undefined {
        return this['restore_alarm'];
    }
    public withDeleteAll(deleteAll: boolean): RemoveAlarmWhiteListRequestInfo {
        this['delete_all'] = deleteAll;
        return this;
    }
    public set deleteAll(deleteAll: boolean  | undefined) {
        this['delete_all'] = deleteAll;
    }
    public get deleteAll(): boolean | undefined {
        return this['delete_all'];
    }
    public withEventType(eventType: number): RemoveAlarmWhiteListRequestInfo {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: number  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): number | undefined {
        return this['event_type'];
    }
}