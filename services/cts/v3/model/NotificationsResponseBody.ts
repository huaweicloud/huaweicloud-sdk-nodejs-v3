import { Filter } from './Filter';
import { NotificationUsers } from './NotificationUsers';
import { Operations } from './Operations';


export class NotificationsResponseBody {
    private 'notification_name'?: string;
    private 'operation_type'?: NotificationsResponseBodyOperationTypeEnum | string;
    public operations?: Array<Operations>;
    private 'notify_user_list'?: Array<NotificationUsers>;
    public status?: NotificationsResponseBodyStatusEnum | string;
    private 'topic_id'?: string;
    private 'notification_id'?: string;
    private 'notification_type'?: NotificationsResponseBodyNotificationTypeEnum | string;
    private 'project_id'?: string;
    private 'create_time'?: number;
    public filter?: Filter;
    public constructor() { 
    }
    public withNotificationName(notificationName: string): NotificationsResponseBody {
        this['notification_name'] = notificationName;
        return this;
    }
    public set notificationName(notificationName: string  | undefined) {
        this['notification_name'] = notificationName;
    }
    public get notificationName(): string | undefined {
        return this['notification_name'];
    }
    public withOperationType(operationType: NotificationsResponseBodyOperationTypeEnum | string): NotificationsResponseBody {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: NotificationsResponseBodyOperationTypeEnum | string  | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType(): NotificationsResponseBodyOperationTypeEnum | string | undefined {
        return this['operation_type'];
    }
    public withOperations(operations: Array<Operations>): NotificationsResponseBody {
        this['operations'] = operations;
        return this;
    }
    public withNotifyUserList(notifyUserList: Array<NotificationUsers>): NotificationsResponseBody {
        this['notify_user_list'] = notifyUserList;
        return this;
    }
    public set notifyUserList(notifyUserList: Array<NotificationUsers>  | undefined) {
        this['notify_user_list'] = notifyUserList;
    }
    public get notifyUserList(): Array<NotificationUsers> | undefined {
        return this['notify_user_list'];
    }
    public withStatus(status: NotificationsResponseBodyStatusEnum | string): NotificationsResponseBody {
        this['status'] = status;
        return this;
    }
    public withTopicId(topicId: string): NotificationsResponseBody {
        this['topic_id'] = topicId;
        return this;
    }
    public set topicId(topicId: string  | undefined) {
        this['topic_id'] = topicId;
    }
    public get topicId(): string | undefined {
        return this['topic_id'];
    }
    public withNotificationId(notificationId: string): NotificationsResponseBody {
        this['notification_id'] = notificationId;
        return this;
    }
    public set notificationId(notificationId: string  | undefined) {
        this['notification_id'] = notificationId;
    }
    public get notificationId(): string | undefined {
        return this['notification_id'];
    }
    public withNotificationType(notificationType: NotificationsResponseBodyNotificationTypeEnum | string): NotificationsResponseBody {
        this['notification_type'] = notificationType;
        return this;
    }
    public set notificationType(notificationType: NotificationsResponseBodyNotificationTypeEnum | string  | undefined) {
        this['notification_type'] = notificationType;
    }
    public get notificationType(): NotificationsResponseBodyNotificationTypeEnum | string | undefined {
        return this['notification_type'];
    }
    public withProjectId(projectId: string): NotificationsResponseBody {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreateTime(createTime: number): NotificationsResponseBody {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withFilter(filter: Filter): NotificationsResponseBody {
        this['filter'] = filter;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NotificationsResponseBodyOperationTypeEnum {
    CUSTOMIZED = 'customized',
    COMPLETE = 'complete'
}
/**
    * @export
    * @enum {string}
    */
export enum NotificationsResponseBodyStatusEnum {
    ENABLED = 'enabled',
    DISABLED = 'disabled'
}
/**
    * @export
    * @enum {string}
    */
export enum NotificationsResponseBodyNotificationTypeEnum {
    SMN = 'smn',
    FUN = 'fun'
}
