import { DimensionNames } from './DimensionNames';
import { Notification } from './Notification';


export class EnableOneClickAlarmRequestBody {
    private 'one_click_alarm_id'?: string;
    private 'dimension_names'?: DimensionNames;
    private 'notification_enabled'?: boolean;
    private 'alarm_notifications'?: Array<Notification>;
    private 'ok_notifications'?: Array<Notification>;
    private 'notification_begin_time'?: string;
    private 'notification_end_time'?: string;
    public constructor(oneClickAlarmId?: string, dimensionNames?: DimensionNames, notificationEnabled?: boolean) { 
        this['one_click_alarm_id'] = oneClickAlarmId;
        this['dimension_names'] = dimensionNames;
        this['notification_enabled'] = notificationEnabled;
    }
    public withOneClickAlarmId(oneClickAlarmId: string): EnableOneClickAlarmRequestBody {
        this['one_click_alarm_id'] = oneClickAlarmId;
        return this;
    }
    public set oneClickAlarmId(oneClickAlarmId: string  | undefined) {
        this['one_click_alarm_id'] = oneClickAlarmId;
    }
    public get oneClickAlarmId(): string | undefined {
        return this['one_click_alarm_id'];
    }
    public withDimensionNames(dimensionNames: DimensionNames): EnableOneClickAlarmRequestBody {
        this['dimension_names'] = dimensionNames;
        return this;
    }
    public set dimensionNames(dimensionNames: DimensionNames  | undefined) {
        this['dimension_names'] = dimensionNames;
    }
    public get dimensionNames(): DimensionNames | undefined {
        return this['dimension_names'];
    }
    public withNotificationEnabled(notificationEnabled: boolean): EnableOneClickAlarmRequestBody {
        this['notification_enabled'] = notificationEnabled;
        return this;
    }
    public set notificationEnabled(notificationEnabled: boolean  | undefined) {
        this['notification_enabled'] = notificationEnabled;
    }
    public get notificationEnabled(): boolean | undefined {
        return this['notification_enabled'];
    }
    public withAlarmNotifications(alarmNotifications: Array<Notification>): EnableOneClickAlarmRequestBody {
        this['alarm_notifications'] = alarmNotifications;
        return this;
    }
    public set alarmNotifications(alarmNotifications: Array<Notification>  | undefined) {
        this['alarm_notifications'] = alarmNotifications;
    }
    public get alarmNotifications(): Array<Notification> | undefined {
        return this['alarm_notifications'];
    }
    public withOkNotifications(okNotifications: Array<Notification>): EnableOneClickAlarmRequestBody {
        this['ok_notifications'] = okNotifications;
        return this;
    }
    public set okNotifications(okNotifications: Array<Notification>  | undefined) {
        this['ok_notifications'] = okNotifications;
    }
    public get okNotifications(): Array<Notification> | undefined {
        return this['ok_notifications'];
    }
    public withNotificationBeginTime(notificationBeginTime: string): EnableOneClickAlarmRequestBody {
        this['notification_begin_time'] = notificationBeginTime;
        return this;
    }
    public set notificationBeginTime(notificationBeginTime: string  | undefined) {
        this['notification_begin_time'] = notificationBeginTime;
    }
    public get notificationBeginTime(): string | undefined {
        return this['notification_begin_time'];
    }
    public withNotificationEndTime(notificationEndTime: string): EnableOneClickAlarmRequestBody {
        this['notification_end_time'] = notificationEndTime;
        return this;
    }
    public set notificationEndTime(notificationEndTime: string  | undefined) {
        this['notification_end_time'] = notificationEndTime;
    }
    public get notificationEndTime(): string | undefined {
        return this['notification_end_time'];
    }
}