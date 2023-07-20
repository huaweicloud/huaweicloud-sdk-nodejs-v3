

export class ListNotificationsRequest {
    private 'notification_type'?: ListNotificationsRequestNotificationTypeEnum | string;
    private 'notification_name'?: string;
    public constructor(notificationType?: string) { 
        this['notification_type'] = notificationType;
    }
    public withNotificationType(notificationType: ListNotificationsRequestNotificationTypeEnum | string): ListNotificationsRequest {
        this['notification_type'] = notificationType;
        return this;
    }
    public set notificationType(notificationType: ListNotificationsRequestNotificationTypeEnum | string  | undefined) {
        this['notification_type'] = notificationType;
    }
    public get notificationType(): ListNotificationsRequestNotificationTypeEnum | string | undefined {
        return this['notification_type'];
    }
    public withNotificationName(notificationName: string): ListNotificationsRequest {
        this['notification_name'] = notificationName;
        return this;
    }
    public set notificationName(notificationName: string  | undefined) {
        this['notification_name'] = notificationName;
    }
    public get notificationName(): string | undefined {
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
