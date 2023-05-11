import { Filter } from './Filter';
import { NotificationUsers } from './NotificationUsers';
import { Operations } from './Operations';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateNotificationResponse extends SdkResponse {
    private 'notification_name'?: string | undefined;
    private 'operation_type'?: CreateNotificationResponseOperationTypeEnum | undefined;
    public operations?: Array<Operations>;
    private 'notify_user_list'?: Array<NotificationUsers> | undefined;
    public status?: CreateNotificationResponseStatusEnum;
    private 'topic_id'?: string | undefined;
    private 'notification_id'?: string | undefined;
    private 'notification_type'?: CreateNotificationResponseNotificationTypeEnum | undefined;
    private 'project_id'?: string | undefined;
    private 'create_time'?: number | undefined;
    public filter?: Filter;
    public constructor() { 
        super();
    }
    public withNotificationName(notificationName: string): CreateNotificationResponse {
        this['notification_name'] = notificationName;
        return this;
    }
    public set notificationName(notificationName: string | undefined) {
        this['notification_name'] = notificationName;
    }
    public get notificationName() {
        return this['notification_name'];
    }
    public withOperationType(operationType: CreateNotificationResponseOperationTypeEnum): CreateNotificationResponse {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: CreateNotificationResponseOperationTypeEnum | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType() {
        return this['operation_type'];
    }
    public withOperations(operations: Array<Operations>): CreateNotificationResponse {
        this['operations'] = operations;
        return this;
    }
    public withNotifyUserList(notifyUserList: Array<NotificationUsers>): CreateNotificationResponse {
        this['notify_user_list'] = notifyUserList;
        return this;
    }
    public set notifyUserList(notifyUserList: Array<NotificationUsers> | undefined) {
        this['notify_user_list'] = notifyUserList;
    }
    public get notifyUserList() {
        return this['notify_user_list'];
    }
    public withStatus(status: CreateNotificationResponseStatusEnum): CreateNotificationResponse {
        this['status'] = status;
        return this;
    }
    public withTopicId(topicId: string): CreateNotificationResponse {
        this['topic_id'] = topicId;
        return this;
    }
    public set topicId(topicId: string | undefined) {
        this['topic_id'] = topicId;
    }
    public get topicId() {
        return this['topic_id'];
    }
    public withNotificationId(notificationId: string): CreateNotificationResponse {
        this['notification_id'] = notificationId;
        return this;
    }
    public set notificationId(notificationId: string | undefined) {
        this['notification_id'] = notificationId;
    }
    public get notificationId() {
        return this['notification_id'];
    }
    public withNotificationType(notificationType: CreateNotificationResponseNotificationTypeEnum): CreateNotificationResponse {
        this['notification_type'] = notificationType;
        return this;
    }
    public set notificationType(notificationType: CreateNotificationResponseNotificationTypeEnum | undefined) {
        this['notification_type'] = notificationType;
    }
    public get notificationType() {
        return this['notification_type'];
    }
    public withProjectId(projectId: string): CreateNotificationResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withCreateTime(createTime: number): CreateNotificationResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withFilter(filter: Filter): CreateNotificationResponse {
        this['filter'] = filter;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateNotificationResponseOperationTypeEnum {
    CUSTOMIZED = 'customized',
    COMPLETE = 'complete'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateNotificationResponseStatusEnum {
    ENABLED = 'enabled',
    DISABLED = 'disabled'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateNotificationResponseNotificationTypeEnum {
    SMN = 'smn',
    FUN = 'fun'
}
