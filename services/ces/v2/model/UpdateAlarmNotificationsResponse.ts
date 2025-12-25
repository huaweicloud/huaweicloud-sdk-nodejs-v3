import { NotificationResp } from './NotificationResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAlarmNotificationsResponse extends SdkResponse {
    private 'notification_enabled'?: boolean;
    private 'alarm_notifications'?: Array<NotificationResp>;
    private 'ok_notifications'?: Array<NotificationResp>;
    private 'notification_begin_time'?: string;
    private 'notification_end_time'?: string;
    private 'effective_timezone'?: string;
    private 'notification_manner'?: UpdateAlarmNotificationsResponseNotificationMannerEnum | string;
    private 'notification_policy_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withNotificationEnabled(notificationEnabled: boolean): UpdateAlarmNotificationsResponse {
        this['notification_enabled'] = notificationEnabled;
        return this;
    }
    public set notificationEnabled(notificationEnabled: boolean  | undefined) {
        this['notification_enabled'] = notificationEnabled;
    }
    public get notificationEnabled(): boolean | undefined {
        return this['notification_enabled'];
    }
    public withAlarmNotifications(alarmNotifications: Array<NotificationResp>): UpdateAlarmNotificationsResponse {
        this['alarm_notifications'] = alarmNotifications;
        return this;
    }
    public set alarmNotifications(alarmNotifications: Array<NotificationResp>  | undefined) {
        this['alarm_notifications'] = alarmNotifications;
    }
    public get alarmNotifications(): Array<NotificationResp> | undefined {
        return this['alarm_notifications'];
    }
    public withOkNotifications(okNotifications: Array<NotificationResp>): UpdateAlarmNotificationsResponse {
        this['ok_notifications'] = okNotifications;
        return this;
    }
    public set okNotifications(okNotifications: Array<NotificationResp>  | undefined) {
        this['ok_notifications'] = okNotifications;
    }
    public get okNotifications(): Array<NotificationResp> | undefined {
        return this['ok_notifications'];
    }
    public withNotificationBeginTime(notificationBeginTime: string): UpdateAlarmNotificationsResponse {
        this['notification_begin_time'] = notificationBeginTime;
        return this;
    }
    public set notificationBeginTime(notificationBeginTime: string  | undefined) {
        this['notification_begin_time'] = notificationBeginTime;
    }
    public get notificationBeginTime(): string | undefined {
        return this['notification_begin_time'];
    }
    public withNotificationEndTime(notificationEndTime: string): UpdateAlarmNotificationsResponse {
        this['notification_end_time'] = notificationEndTime;
        return this;
    }
    public set notificationEndTime(notificationEndTime: string  | undefined) {
        this['notification_end_time'] = notificationEndTime;
    }
    public get notificationEndTime(): string | undefined {
        return this['notification_end_time'];
    }
    public withEffectiveTimezone(effectiveTimezone: string): UpdateAlarmNotificationsResponse {
        this['effective_timezone'] = effectiveTimezone;
        return this;
    }
    public set effectiveTimezone(effectiveTimezone: string  | undefined) {
        this['effective_timezone'] = effectiveTimezone;
    }
    public get effectiveTimezone(): string | undefined {
        return this['effective_timezone'];
    }
    public withNotificationManner(notificationManner: UpdateAlarmNotificationsResponseNotificationMannerEnum | string): UpdateAlarmNotificationsResponse {
        this['notification_manner'] = notificationManner;
        return this;
    }
    public set notificationManner(notificationManner: UpdateAlarmNotificationsResponseNotificationMannerEnum | string  | undefined) {
        this['notification_manner'] = notificationManner;
    }
    public get notificationManner(): UpdateAlarmNotificationsResponseNotificationMannerEnum | string | undefined {
        return this['notification_manner'];
    }
    public withNotificationPolicyIds(notificationPolicyIds: Array<string>): UpdateAlarmNotificationsResponse {
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
export enum UpdateAlarmNotificationsResponseNotificationMannerEnum {
    NOTIFICATION_GROUP = 'NOTIFICATION_GROUP',
    TOPIC_SUBSCRIPTION = 'TOPIC_SUBSCRIPTION',
    NOTIFICATION_POLICY = 'NOTIFICATION_POLICY'
}
