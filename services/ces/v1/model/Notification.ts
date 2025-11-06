

export class Notification {
    public type?: string;
    public notificationList?: Array<string>;
    public constructor(type?: string, notificationList?: Array<string>) { 
        this['type'] = type;
        this['notificationList'] = notificationList;
    }
    public withType(type: string): Notification {
        this['type'] = type;
        return this;
    }
    public withNotificationList(notificationList: Array<string>): Notification {
        this['notificationList'] = notificationList;
        return this;
    }
}