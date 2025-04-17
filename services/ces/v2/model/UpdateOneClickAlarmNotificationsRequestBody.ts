import { Notification } from './Notification';


export class UpdateOneClickAlarmNotificationsRequestBody {
    private 'notification_enabled'?: boolean;
    private 'alarm_notifications'?: Array<Notification>;
    private 'ok_notifications'?: Array<Notification>;
    private 'notification_begin_time'?: string;
    private 'notification_end_time'?: string;
    private 'notification_manner'?: UpdateOneClickAlarmNotificationsRequestBodyNotificationMannerEnum | string;
    private 'notification_policy_ids'?: Array<string>;
    public constructor(notificationEnabled?: boolean) { 
        this['notification_enabled'] = notificationEnabled;
    }
    public withNotificationEnabled(notificationEnabled: boolean): UpdateOneClickAlarmNotificationsRequestBody {
        this['notification_enabled'] = notificationEnabled;
        return this;
    }
    public set notificationEnabled(notificationEnabled: boolean  | undefined) {
        this['notification_enabled'] = notificationEnabled;
    }
    public get notificationEnabled(): boolean | undefined {
        return this['notification_enabled'];
    }
    public withAlarmNotifications(alarmNotifications: Array<Notification>): UpdateOneClickAlarmNotificationsRequestBody {
        this['alarm_notifications'] = alarmNotifications;
        return this;
    }
    public set alarmNotifications(alarmNotifications: Array<Notification>  | undefined) {
        this['alarm_notifications'] = alarmNotifications;
    }
    public get alarmNotifications(): Array<Notification> | undefined {
        return this['alarm_notifications'];
    }
    public withOkNotifications(okNotifications: Array<Notification>): UpdateOneClickAlarmNotificationsRequestBody {
        this['ok_notifications'] = okNotifications;
        return this;
    }
    public set okNotifications(okNotifications: Array<Notification>  | undefined) {
        this['ok_notifications'] = okNotifications;
    }
    public get okNotifications(): Array<Notification> | undefined {
        return this['ok_notifications'];
    }
    public withNotificationBeginTime(notificationBeginTime: string): UpdateOneClickAlarmNotificationsRequestBody {
        this['notification_begin_time'] = notificationBeginTime;
        return this;
    }
    public set notificationBeginTime(notificationBeginTime: string  | undefined) {
        this['notification_begin_time'] = notificationBeginTime;
    }
    public get notificationBeginTime(): string | undefined {
        return this['notification_begin_time'];
    }
    public withNotificationEndTime(notificationEndTime: string): UpdateOneClickAlarmNotificationsRequestBody {
        this['notification_end_time'] = notificationEndTime;
        return this;
    }
    public set notificationEndTime(notificationEndTime: string  | undefined) {
        this['notification_end_time'] = notificationEndTime;
    }
    public get notificationEndTime(): string | undefined {
        return this['notification_end_time'];
    }
    public withNotificationManner(notificationManner: UpdateOneClickAlarmNotificationsRequestBodyNotificationMannerEnum | string): UpdateOneClickAlarmNotificationsRequestBody {
        this['notification_manner'] = notificationManner;
        return this;
    }
    public set notificationManner(notificationManner: UpdateOneClickAlarmNotificationsRequestBodyNotificationMannerEnum | string  | undefined) {
        this['notification_manner'] = notificationManner;
    }
    public get notificationManner(): UpdateOneClickAlarmNotificationsRequestBodyNotificationMannerEnum | string | undefined {
        return this['notification_manner'];
    }
    public withNotificationPolicyIds(notificationPolicyIds: Array<string>): UpdateOneClickAlarmNotificationsRequestBody {
        this['notification_policy_ids'] = notificationPolicyIds;
        return this;
    }
    public set notificationPolicyIds(notificationPolicyIds: Array<string>  | undefined) {
        this['notification_policy_ids'] = notificationPolicyIds;
    }
    public get notificationPolicyIds(): Array<string> | undefined {
        return this['notification_policy_ids'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateOneClickAlarmNotificationsRequestBodyNotificationMannerEnum {
    NOTIFICATION_GROUP = 'NOTIFICATION_GROUP',
    TOPIC_SUBSCRIPTION = 'TOPIC_SUBSCRIPTION',
    NOTIFICATION_POLICY = 'NOTIFICATION_POLICY'
}
