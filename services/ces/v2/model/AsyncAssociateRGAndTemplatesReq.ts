import { Notification } from './Notification';


export class AsyncAssociateRGAndTemplatesReq {
    private 'template_ids'?: Array<string>;
    private 'notification_enabled'?: boolean;
    private 'alarm_notifications'?: Array<Notification>;
    private 'ok_notifications'?: Array<Notification>;
    private 'notification_begin_time'?: string;
    private 'notification_end_time'?: string;
    private 'effective_timezone'?: string;
    private 'enterprise_project_id'?: string;
    private 'notification_manner'?: AsyncAssociateRGAndTemplatesReqNotificationMannerEnum | string;
    private 'notification_policy_ids'?: Array<string>;
    public constructor(templateIds?: Array<string>, notificationEnabled?: boolean) { 
        this['template_ids'] = templateIds;
        this['notification_enabled'] = notificationEnabled;
    }
    public withTemplateIds(templateIds: Array<string>): AsyncAssociateRGAndTemplatesReq {
        this['template_ids'] = templateIds;
        return this;
    }
    public set templateIds(templateIds: Array<string>  | undefined) {
        this['template_ids'] = templateIds;
    }
    public get templateIds(): Array<string> | undefined {
        return this['template_ids'];
    }
    public withNotificationEnabled(notificationEnabled: boolean): AsyncAssociateRGAndTemplatesReq {
        this['notification_enabled'] = notificationEnabled;
        return this;
    }
    public set notificationEnabled(notificationEnabled: boolean  | undefined) {
        this['notification_enabled'] = notificationEnabled;
    }
    public get notificationEnabled(): boolean | undefined {
        return this['notification_enabled'];
    }
    public withAlarmNotifications(alarmNotifications: Array<Notification>): AsyncAssociateRGAndTemplatesReq {
        this['alarm_notifications'] = alarmNotifications;
        return this;
    }
    public set alarmNotifications(alarmNotifications: Array<Notification>  | undefined) {
        this['alarm_notifications'] = alarmNotifications;
    }
    public get alarmNotifications(): Array<Notification> | undefined {
        return this['alarm_notifications'];
    }
    public withOkNotifications(okNotifications: Array<Notification>): AsyncAssociateRGAndTemplatesReq {
        this['ok_notifications'] = okNotifications;
        return this;
    }
    public set okNotifications(okNotifications: Array<Notification>  | undefined) {
        this['ok_notifications'] = okNotifications;
    }
    public get okNotifications(): Array<Notification> | undefined {
        return this['ok_notifications'];
    }
    public withNotificationBeginTime(notificationBeginTime: string): AsyncAssociateRGAndTemplatesReq {
        this['notification_begin_time'] = notificationBeginTime;
        return this;
    }
    public set notificationBeginTime(notificationBeginTime: string  | undefined) {
        this['notification_begin_time'] = notificationBeginTime;
    }
    public get notificationBeginTime(): string | undefined {
        return this['notification_begin_time'];
    }
    public withNotificationEndTime(notificationEndTime: string): AsyncAssociateRGAndTemplatesReq {
        this['notification_end_time'] = notificationEndTime;
        return this;
    }
    public set notificationEndTime(notificationEndTime: string  | undefined) {
        this['notification_end_time'] = notificationEndTime;
    }
    public get notificationEndTime(): string | undefined {
        return this['notification_end_time'];
    }
    public withEffectiveTimezone(effectiveTimezone: string): AsyncAssociateRGAndTemplatesReq {
        this['effective_timezone'] = effectiveTimezone;
        return this;
    }
    public set effectiveTimezone(effectiveTimezone: string  | undefined) {
        this['effective_timezone'] = effectiveTimezone;
    }
    public get effectiveTimezone(): string | undefined {
        return this['effective_timezone'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): AsyncAssociateRGAndTemplatesReq {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withNotificationManner(notificationManner: AsyncAssociateRGAndTemplatesReqNotificationMannerEnum | string): AsyncAssociateRGAndTemplatesReq {
        this['notification_manner'] = notificationManner;
        return this;
    }
    public set notificationManner(notificationManner: AsyncAssociateRGAndTemplatesReqNotificationMannerEnum | string  | undefined) {
        this['notification_manner'] = notificationManner;
    }
    public get notificationManner(): AsyncAssociateRGAndTemplatesReqNotificationMannerEnum | string | undefined {
        return this['notification_manner'];
    }
    public withNotificationPolicyIds(notificationPolicyIds: Array<string>): AsyncAssociateRGAndTemplatesReq {
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
export enum AsyncAssociateRGAndTemplatesReqNotificationMannerEnum {
    NOTIFICATION_GROUP = 'NOTIFICATION_GROUP',
    TOPIC_SUBSCRIPTION = 'TOPIC_SUBSCRIPTION',
    NOTIFICATION_POLICY = 'NOTIFICATION_POLICY'
}
