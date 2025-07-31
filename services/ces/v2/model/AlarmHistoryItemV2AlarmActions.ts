

export class AlarmHistoryItemV2AlarmActions {
    public type?: AlarmHistoryItemV2AlarmActionsTypeEnum | string;
    private 'notification_list'?: Array<string>;
    public constructor() { 
    }
    public withType(type: AlarmHistoryItemV2AlarmActionsTypeEnum | string): AlarmHistoryItemV2AlarmActions {
        this['type'] = type;
        return this;
    }
    public withNotificationList(notificationList: Array<string>): AlarmHistoryItemV2AlarmActions {
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
export enum AlarmHistoryItemV2AlarmActionsTypeEnum {
    NOTIFICATION = 'notification',
    AUTOSCALING = 'autoscaling',
    GROUPWATCH = 'groupwatch',
    ECSRECOVERY = 'ecsRecovery',
    CONTACT = 'contact',
    CONTACTGROUP = 'contactGroup',
    IECACTION = 'iecAction'
}
