import { NotificationObjConfiguration } from './NotificationObjConfiguration';


export class SlaEscalationRuleInfo {
    public day?: number;
    public hour?: number;
    public minute?: number;
    public order?: number;
    public protocol?: string;
    private 'notification_obj_configuration'?: Array<NotificationObjConfiguration>;
    public constructor() { 
    }
    public withDay(day: number): SlaEscalationRuleInfo {
        this['day'] = day;
        return this;
    }
    public withHour(hour: number): SlaEscalationRuleInfo {
        this['hour'] = hour;
        return this;
    }
    public withMinute(minute: number): SlaEscalationRuleInfo {
        this['minute'] = minute;
        return this;
    }
    public withOrder(order: number): SlaEscalationRuleInfo {
        this['order'] = order;
        return this;
    }
    public withProtocol(protocol: string): SlaEscalationRuleInfo {
        this['protocol'] = protocol;
        return this;
    }
    public withNotificationObjConfiguration(notificationObjConfiguration: Array<NotificationObjConfiguration>): SlaEscalationRuleInfo {
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