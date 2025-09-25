
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmConfigResponse extends SdkResponse {
    private 'alarm_type'?: ListAlarmConfigResponseAlarmTypeEnum | string;
    private 'display_name'?: string;
    private 'topic_urn'?: string;
    private 'daily_alarm'?: boolean;
    private 'realtime_alarm'?: boolean;
    private 'alarm_level'?: Array<ListAlarmConfigResponseAlarmLevelEnum> | Array<string>;
    private 'ignored_event_class_list'?: Array<ListAlarmConfigResponseIgnoredEventClassListEnum> | Array<string>;
    public constructor() { 
        super();
    }
    public withAlarmType(alarmType: ListAlarmConfigResponseAlarmTypeEnum | string): ListAlarmConfigResponse {
        this['alarm_type'] = alarmType;
        return this;
    }
    public set alarmType(alarmType: ListAlarmConfigResponseAlarmTypeEnum | string  | undefined) {
        this['alarm_type'] = alarmType;
    }
    public get alarmType(): ListAlarmConfigResponseAlarmTypeEnum | string | undefined {
        return this['alarm_type'];
    }
    public withDisplayName(displayName: string): ListAlarmConfigResponse {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withTopicUrn(topicUrn: string): ListAlarmConfigResponse {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withDailyAlarm(dailyAlarm: boolean): ListAlarmConfigResponse {
        this['daily_alarm'] = dailyAlarm;
        return this;
    }
    public set dailyAlarm(dailyAlarm: boolean  | undefined) {
        this['daily_alarm'] = dailyAlarm;
    }
    public get dailyAlarm(): boolean | undefined {
        return this['daily_alarm'];
    }
    public withRealtimeAlarm(realtimeAlarm: boolean): ListAlarmConfigResponse {
        this['realtime_alarm'] = realtimeAlarm;
        return this;
    }
    public set realtimeAlarm(realtimeAlarm: boolean  | undefined) {
        this['realtime_alarm'] = realtimeAlarm;
    }
    public get realtimeAlarm(): boolean | undefined {
        return this['realtime_alarm'];
    }
    public withAlarmLevel(alarmLevel: Array<ListAlarmConfigResponseAlarmLevelEnum> | Array<string>): ListAlarmConfigResponse {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: Array<ListAlarmConfigResponseAlarmLevelEnum> | Array<string>  | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel(): Array<ListAlarmConfigResponseAlarmLevelEnum> | Array<string> | undefined {
        return this['alarm_level'];
    }
    public withIgnoredEventClassList(ignoredEventClassList: Array<ListAlarmConfigResponseIgnoredEventClassListEnum> | Array<string>): ListAlarmConfigResponse {
        this['ignored_event_class_list'] = ignoredEventClassList;
        return this;
    }
    public set ignoredEventClassList(ignoredEventClassList: Array<ListAlarmConfigResponseIgnoredEventClassListEnum> | Array<string>  | undefined) {
        this['ignored_event_class_list'] = ignoredEventClassList;
    }
    public get ignoredEventClassList(): Array<ListAlarmConfigResponseIgnoredEventClassListEnum> | Array<string> | undefined {
        return this['ignored_event_class_list'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAlarmConfigResponseAlarmTypeEnum {
    SMS = 'sms',
    RSS = 'rss'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAlarmConfigResponseAlarmLevelEnum {
    INFO = 'info',
    LOW = 'low',
    MEDIUM = 'medium',
    HIGH = 'high',
    CRITICAL = 'critical'
}
/**
    * @export
    * @enum {string}
    */
export enum ListAlarmConfigResponseIgnoredEventClassListEnum {
    DANGEROUS_PORTS = 'dangerous_ports',
    CRITICAL_VULNERABILITIES = 'critical_vulnerabilities',
    WEAK_PASSWORDS = 'weak_passwords',
    UNSAFE_CONFIGURATIONS = 'unsafe_configurations',
    RASP = 'RASP',
    SECRASP = 'SECRASP',
    E_8002 = '8002',
    E_8003 = '8003',
    E_1001 = '1001',
    E_1010 = '1010',
    E_1011 = '1011',
    E_1015 = '1015',
    E_1017 = '1017',
    E_2047 = '2047',
    E_2048 = '2048',
    E_2049 = '2049',
    E_3002 = '3002',
    E_3003 = '3003',
    E_3004 = '3004',
    E_3005 = '3005',
    E_3007 = '3007',
    E_3015 = '3015',
    E_3018 = '3018',
    E_3027 = '3027',
    E_4002 = '4002',
    E_4007 = '4007',
    E_4004 = '4004',
    E_4006 = '4006',
    E_2042 = '2042',
    E_2044 = '2044',
    E_3008 = '3008',
    E_3009 = '3009',
    E_3016 = '3016',
    E_3021 = '3021'
}
