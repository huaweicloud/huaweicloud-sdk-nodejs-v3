import { Filter } from './Filter';
import { NotificationUsers } from './NotificationUsers';
import { Operations } from './Operations';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateNotificationResponse extends SdkResponse {
    private 'notification_name'?: string;
    private 'operation_type'?: UpdateNotificationResponseOperationTypeEnum | string;
    public operations?: Array<Operations>;
    private 'notify_user_list'?: Array<NotificationUsers>;
    public status?: UpdateNotificationResponseStatusEnum | string;
    private 'topic_id'?: string;
    private 'notification_id'?: string;
    private 'notification_type'?: UpdateNotificationResponseNotificationTypeEnum | string;
    private 'project_id'?: string;
    private 'create_time'?: number;
    public filter?: Filter;
    public constructor() { 
        super();
    }
    public withNotificationName(notificationName: string): UpdateNotificationResponse {
        this['notification_name'] = notificationName;
        return this;
    }
    public set notificationName(notificationName: string  | undefined) {
        this['notification_name'] = notificationName;
    }
    public get notificationName(): string | undefined {
        return this['notification_name'];
    }
    public withOperationType(operationType: UpdateNotificationResponseOperationTypeEnum | string): UpdateNotificationResponse {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: UpdateNotificationResponseOperationTypeEnum | string  | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType(): UpdateNotificationResponseOperationTypeEnum | string | undefined {
        return this['operation_type'];
    }
    public withOperations(operations: Array<Operations>): UpdateNotificationResponse {
        this['operations'] = operations;
        return this;
    }
    public withNotifyUserList(notifyUserList: Array<NotificationUsers>): UpdateNotificationResponse {
        this['notify_user_list'] = notifyUserList;
        return this;
    }
    public set notifyUserList(notifyUserList: Array<NotificationUsers>  | undefined) {
        this['notify_user_list'] = notifyUserList;
    }
    public get notifyUserList(): Array<NotificationUsers> | undefined {
        return this['notify_user_list'];
    }
    public withStatus(status: UpdateNotificationResponseStatusEnum | string): UpdateNotificationResponse {
        this['status'] = status;
        return this;
    }
    public withTopicId(topicId: string): UpdateNotificationResponse {
        this['topic_id'] = topicId;
        return this;
    }
    public set topicId(topicId: string  | undefined) {
        this['topic_id'] = topicId;
    }
    public get topicId(): string | undefined {
        return this['topic_id'];
    }
    public withNotificationId(notificationId: string): UpdateNotificationResponse {
        this['notification_id'] = notificationId;
        return this;
    }
    public set notificationId(notificationId: string  | undefined) {
        this['notification_id'] = notificationId;
    }
    public get notificationId(): string | undefined {
        return this['notification_id'];
    }
    public withNotificationType(notificationType: UpdateNotificationResponseNotificationTypeEnum | string): UpdateNotificationResponse {
        this['notification_type'] = notificationType;
        return this;
    }
    public set notificationType(notificationType: UpdateNotificationResponseNotificationTypeEnum | string  | undefined) {
        this['notification_type'] = notificationType;
    }
    public get notificationType(): UpdateNotificationResponseNotificationTypeEnum | string | undefined {
        return this['notification_type'];
    }
    public withProjectId(projectId: string): UpdateNotificationResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreateTime(createTime: number): UpdateNotificationResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withFilter(filter: Filter): UpdateNotificationResponse {
        this['filter'] = filter;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateNotificationResponseOperationTypeEnum {
    CUSTOMIZED = 'customized',
    COMPLETE = 'complete'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateNotificationResponseStatusEnum {
    ENABLED = 'enabled',
    DISABLED = 'disabled'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateNotificationResponseNotificationTypeEnum {
    SMN = 'smn',
    FUN = 'fun'
}
