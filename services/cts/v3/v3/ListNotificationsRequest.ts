

export class ListNotificationsRequest {
    private 'notification_type': ListNotificationsRequestNotificationTypeEnum | undefined;
    private 'notification_name'?: string | undefined;
    public constructor(notificationType?: any) { 
        this['notification_type'] = notificationType;
    }
    public withNotificationType(notificationType: ListNotificationsRequestNotificationTypeEnum): ListNotificationsRequest {
        this['notification_type'] = notificationType;
        return this;
    }
    public set notificationType(notificationType: ListNotificationsRequestNotificationTypeEnum | undefined) {
        this['notification_type'] = notificationType;
    }
    public get notificationType() {
        return this['notification_type'];
    }
    public withNotificationName(notificationName: string): ListNotificationsRequest {
        this['notification_name'] = notificationName;
        return this;
    }
    public set notificationName(notificationName: string | undefined) {
        this['notification_name'] = notificationName;
    }
    public get notificationName() {
        return this['notification_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListNotificationsRequestNotificationTypeEnum {
    SMN = 'smn',
    FUN = 'fun'
}
