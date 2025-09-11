

export class NotificationResp {
    public type?: NotificationRespTypeEnum | string;
    private 'notification_list'?: Array<string>;
    public constructor() { 
    }
    public withType(type: NotificationRespTypeEnum | string): NotificationResp {
        this['type'] = type;
        return this;
    }
    public withNotificationList(notificationList: Array<string>): NotificationResp {
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

/**
    * @export
    * @enum {string}
    */
export enum NotificationRespTypeEnum {
    NOTIFICATION = 'notification',
    AUTOSCALING = 'autoscaling',
    GROUPWATCH = 'groupwatch',
    ECSRECOVERY = 'ecsRecovery',
    CONTACT = 'contact',
    CONTACTGROUP = 'contactGroup',
    IECACTION = 'iecAction'
}
