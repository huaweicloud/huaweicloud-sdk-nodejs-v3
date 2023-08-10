

export class Notification {
    public type?: string;
    private 'notification_list'?: Array<string>;
    public constructor(type?: string, notificationList?: Array<string>) { 
        this['type'] = type;
        this['notification_list'] = notificationList;
    }
    public withType(type: string): Notification {
        this['type'] = type;
        return this;
    }
    public withNotificationList(notificationList: Array<string>): Notification {
        this['notification_list'] = notificationList;
        return this;
    }
    public set notificationList(notificationList: Array<string>  | undefined) {
        this['notification_list'] = notificationList;
    }
    public get notificationList(): Array<string> | undefined {
        return this['notification_list'];
    }
}