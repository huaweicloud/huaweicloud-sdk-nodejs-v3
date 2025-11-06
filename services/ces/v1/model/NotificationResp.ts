

export class NotificationResp {
    public type?: string;
    public notificationList?: Array<string>;
    public constructor() { 
    }
    public withType(type: string): NotificationResp {
        this['type'] = type;
        return this;
    }
    public withNotificationList(notificationList: Array<string>): NotificationResp {
        this['notificationList'] = notificationList;
        return this;
    }
}