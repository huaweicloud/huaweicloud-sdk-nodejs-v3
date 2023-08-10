

export class AlarmActions {
    public type?: string;
    public notificationList?: Array<string>;
    public constructor(type?: string, notificationList?: Array<string>) { 
        this['type'] = type;
        this['notificationList'] = notificationList;
    }
    public withType(type: string): AlarmActions {
        this['type'] = type;
        return this;
    }
    public withNotificationList(notificationList: Array<string>): AlarmActions {
        this['notificationList'] = notificationList;
        return this;
    }
}