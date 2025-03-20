

export class MessageNotification {
    public policy?: string;
    private 'notification_endpoint_type'?: MessageNotificationNotificationEndpointTypeEnum | string;
    private 'schedule_scene_id'?: string;
    private 'schedule_role_id'?: string;
    public recipients?: string;
    public protocol?: MessageNotificationProtocolEnum | string;
    public constructor(notificationEndpointType?: string) { 
        this['notification_endpoint_type'] = notificationEndpointType;
    }
    public withPolicy(policy: string): MessageNotification {
        this['policy'] = policy;
        return this;
    }
    public withNotificationEndpointType(notificationEndpointType: MessageNotificationNotificationEndpointTypeEnum | string): MessageNotification {
        this['notification_endpoint_type'] = notificationEndpointType;
        return this;
    }
    public set notificationEndpointType(notificationEndpointType: MessageNotificationNotificationEndpointTypeEnum | string  | undefined) {
        this['notification_endpoint_type'] = notificationEndpointType;
    }
    public get notificationEndpointType(): MessageNotificationNotificationEndpointTypeEnum | string | undefined {
        return this['notification_endpoint_type'];
    }
    public withScheduleSceneId(scheduleSceneId: string): MessageNotification {
        this['schedule_scene_id'] = scheduleSceneId;
        return this;
    }
    public set scheduleSceneId(scheduleSceneId: string  | undefined) {
        this['schedule_scene_id'] = scheduleSceneId;
    }
    public get scheduleSceneId(): string | undefined {
        return this['schedule_scene_id'];
    }
    public withScheduleRoleId(scheduleRoleId: string): MessageNotification {
        this['schedule_role_id'] = scheduleRoleId;
        return this;
    }
    public set scheduleRoleId(scheduleRoleId: string  | undefined) {
        this['schedule_role_id'] = scheduleRoleId;
    }
    public get scheduleRoleId(): string | undefined {
        return this['schedule_role_id'];
    }
    public withRecipients(recipients: string): MessageNotification {
        this['recipients'] = recipients;
        return this;
    }
    public withProtocol(protocol: MessageNotificationProtocolEnum | string): MessageNotification {
        this['protocol'] = protocol;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MessageNotificationNotificationEndpointTypeEnum {
    USER = 'USER',
    ON_CALL = 'ON_CALL'
}
/**
    * @export
    * @enum {string}
    */
export enum MessageNotificationProtocolEnum {
    DEFAULT = 'DEFAULT',
    NONE = 'NONE',
    SMS = 'SMS',
    EMAIL = 'EMAIL',
    DINGDING = 'DINGDING',
    LARK = 'LARK',
    WELINK = 'WELINK',
    CALLNOTIFY = 'CALLNOTIFY',
    WECHAT = 'WECHAT'
}
