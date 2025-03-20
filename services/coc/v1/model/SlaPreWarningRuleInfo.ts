import { NotificationObjConfiguration } from './NotificationObjConfiguration';


export class SlaPreWarningRuleInfo {
    public day?: number;
    public hour?: number;
    public minute?: number;
    public protocol?: string;
    private 'notification_obj_configuration'?: Array<NotificationObjConfiguration>;
    public constructor() { 
    }
    public withDay(day: number): SlaPreWarningRuleInfo {
        this['day'] = day;
        return this;
    }
    public withHour(hour: number): SlaPreWarningRuleInfo {
        this['hour'] = hour;
        return this;
    }
    public withMinute(minute: number): SlaPreWarningRuleInfo {
        this['minute'] = minute;
        return this;
    }
    public withProtocol(protocol: string): SlaPreWarningRuleInfo {
        this['protocol'] = protocol;
        return this;
    }
    public withNotificationObjConfiguration(notificationObjConfiguration: Array<NotificationObjConfiguration>): SlaPreWarningRuleInfo {
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