import { NotificationObjConfiguration } from './NotificationObjConfiguration';


export class SlaTriggeringRuleInfo {
    public day?: number;
    public hour?: number;
    public minute?: number;
    public protocol?: string;
    private 'is_ongoing_notification'?: boolean;
    private 'notification_interval'?: number;
    private 'notification_obj_configuration'?: Array<NotificationObjConfiguration>;
    public constructor() { 
    }
    public withDay(day: number): SlaTriggeringRuleInfo {
        this['day'] = day;
        return this;
    }
    public withHour(hour: number): SlaTriggeringRuleInfo {
        this['hour'] = hour;
        return this;
    }
    public withMinute(minute: number): SlaTriggeringRuleInfo {
        this['minute'] = minute;
        return this;
    }
    public withProtocol(protocol: string): SlaTriggeringRuleInfo {
        this['protocol'] = protocol;
        return this;
    }
    public withIsOngoingNotification(isOngoingNotification: boolean): SlaTriggeringRuleInfo {
        this['is_ongoing_notification'] = isOngoingNotification;
        return this;
    }
    public set isOngoingNotification(isOngoingNotification: boolean  | undefined) {
        this['is_ongoing_notification'] = isOngoingNotification;
    }
    public get isOngoingNotification(): boolean | undefined {
        return this['is_ongoing_notification'];
    }
    public withNotificationInterval(notificationInterval: number): SlaTriggeringRuleInfo {
        this['notification_interval'] = notificationInterval;
        return this;
    }
    public set notificationInterval(notificationInterval: number  | undefined) {
        this['notification_interval'] = notificationInterval;
    }
    public get notificationInterval(): number | undefined {
        return this['notification_interval'];
    }
    public withNotificationObjConfiguration(notificationObjConfiguration: Array<NotificationObjConfiguration>): SlaTriggeringRuleInfo {
        this['notification_obj_configuration'] = notificationObjConfiguration;
        return this;
    }
    public set notificationObjConfiguration(notificationObjConfiguration: Array<NotificationObjConfiguration>  | undefined) {
        this['notification_obj_configuration'] = notificationObjConfiguration;
    }
    public get notificationObjConfiguration(): Array<NotificationObjConfiguration> | undefined {
        return this['notification_obj_configuration'];
    }
}