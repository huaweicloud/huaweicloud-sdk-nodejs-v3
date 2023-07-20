import { Filter } from './Filter';
import { NotificationUsers } from './NotificationUsers';
import { Operations } from './Operations';


export class UpdateNotificationRequestBody {
    private 'notification_name'?: string;
    private 'operation_type'?: UpdateNotificationRequestBodyOperationTypeEnum | string;
    public operations?: Array<Operations>;
    private 'notify_user_list'?: Array<NotificationUsers>;
    public status?: UpdateNotificationRequestBodyStatusEnum | string;
    private 'topic_id'?: string;
    private 'notification_id'?: string;
    public filter?: Filter;
    public constructor(notificationName?: string, operationType?: string, status?: string, notificationId?: string) { 
        this['notification_name'] = notificationName;
        this['operation_type'] = operationType;
        this['status'] = status;
        this['notification_id'] = notificationId;
    }
    public withNotificationName(notificationName: string): UpdateNotificationRequestBody {
        this['notification_name'] = notificationName;
        return this;
    }
    public set notificationName(notificationName: string  | undefined) {
        this['notification_name'] = notificationName;
    }
    public get notificationName(): string | undefined {
        return this['notification_name'];
    }
    public withOperationType(operationType: UpdateNotificationRequestBodyOperationTypeEnum | string): UpdateNotificationRequestBody {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: UpdateNotificationRequestBodyOperationTypeEnum | string  | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType(): UpdateNotificationRequestBodyOperationTypeEnum | string | undefined {
        return this['operation_type'];
    }
    public withOperations(operations: Array<Operations>): UpdateNotificationRequestBody {
        this['operations'] = operations;
        return this;
    }
    public withNotifyUserList(notifyUserList: Array<NotificationUsers>): UpdateNotificationRequestBody {
        this['notify_user_list'] = notifyUserList;
        return this;
    }
    public set notifyUserList(notifyUserList: Array<NotificationUsers>  | undefined) {
        this['notify_user_list'] = notifyUserList;
    }
    public get notifyUserList(): Array<NotificationUsers> | undefined {
        return this['notify_user_list'];
    }
    public withStatus(status: UpdateNotificationRequestBodyStatusEnum | string): UpdateNotificationRequestBody {
        this['status'] = status;
        return this;
    }
    public withTopicId(topicId: string): UpdateNotificationRequestBody {
        this['topic_id'] = topicId;
        return this;
    }
    public set topicId(topicId: string  | undefined) {
        this['topic_id'] = topicId;
    }
    public get topicId(): string | undefined {
        return this['topic_id'];
    }
    public withNotificationId(notificationId: string): UpdateNotificationRequestBody {
        this['notification_id'] = notificationId;
        return this;
    }
    public set notificationId(notificationId: string  | undefined) {
        this['notification_id'] = notificationId;
    }
    public get notificationId(): string | undefined {
        return this['notification_id'];
    }
    public withFilter(filter: Filter): UpdateNotificationRequestBody {
        this['filter'] = filter;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateNotificationRequestBodyOperationTypeEnum {
    CUSTOMIZED = 'customized',
    COMPLETE = 'complete'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateNotificationRequestBodyStatusEnum {
    ENABLED = 'enabled',
    DISABLED = 'disabled'
}
