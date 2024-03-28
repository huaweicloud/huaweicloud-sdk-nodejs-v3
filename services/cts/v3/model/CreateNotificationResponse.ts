import { Filter } from './Filter';
import { NotificationUsers } from './NotificationUsers';
import { Operations } from './Operations';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateNotificationResponse extends SdkResponse {
    private 'notification_name'?: string;
    private 'operation_type'?: CreateNotificationResponseOperationTypeEnum | string;
    public operations?: Array<Operations>;
    private 'notify_user_list'?: Array<NotificationUsers>;
    private 'agency_name'?: CreateNotificationResponseAgencyNameEnum | string;
    public status?: CreateNotificationResponseStatusEnum | string;
    private 'topic_id'?: string;
    private 'notification_id'?: string;
    private 'notification_type'?: CreateNotificationResponseNotificationTypeEnum | string;
    private 'project_id'?: string;
    private 'create_time'?: number;
    public filter?: Filter;
    public constructor() { 
        super();
    }
    public withNotificationName(notificationName: string): CreateNotificationResponse {
        this['notification_name'] = notificationName;
        return this;
    }
    public set notificationName(notificationName: string  | undefined) {
        this['notification_name'] = notificationName;
    }
    public get notificationName(): string | undefined {
        return this['notification_name'];
    }
    public withOperationType(operationType: CreateNotificationResponseOperationTypeEnum | string): CreateNotificationResponse {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: CreateNotificationResponseOperationTypeEnum | string  | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType(): CreateNotificationResponseOperationTypeEnum | string | undefined {
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
    public set notifyUserList(notifyUserList: Array<NotificationUsers>  | undefined) {
        this['notify_user_list'] = notifyUserList;
    }
    public get notifyUserList(): Array<NotificationUsers> | undefined {
        return this['notify_user_list'];
    }
    public withAgencyName(agencyName: CreateNotificationResponseAgencyNameEnum | string): CreateNotificationResponse {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: CreateNotificationResponseAgencyNameEnum | string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): CreateNotificationResponseAgencyNameEnum | string | undefined {
        return this['agency_name'];
    }
    public withStatus(status: CreateNotificationResponseStatusEnum | string): CreateNotificationResponse {
        this['status'] = status;
        return this;
    }
    public withTopicId(topicId: string): CreateNotificationResponse {
        this['topic_id'] = topicId;
        return this;
    }
    public set topicId(topicId: string  | undefined) {
        this['topic_id'] = topicId;
    }
    public get topicId(): string | undefined {
        return this['topic_id'];
    }
    public withNotificationId(notificationId: string): CreateNotificationResponse {
        this['notification_id'] = notificationId;
        return this;
    }
    public set notificationId(notificationId: string  | undefined) {
        this['notification_id'] = notificationId;
    }
    public get notificationId(): string | undefined {
        return this['notification_id'];
    }
    public withNotificationType(notificationType: CreateNotificationResponseNotificationTypeEnum | string): CreateNotificationResponse {
        this['notification_type'] = notificationType;
        return this;
    }
    public set notificationType(notificationType: CreateNotificationResponseNotificationTypeEnum | string  | undefined) {
        this['notification_type'] = notificationType;
    }
    public get notificationType(): CreateNotificationResponseNotificationTypeEnum | string | undefined {
        return this['notification_type'];
    }
    public withProjectId(projectId: string): CreateNotificationResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreateTime(createTime: number): CreateNotificationResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
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
export enum CreateNotificationResponseAgencyNameEnum {
    CTS_ADMIN_TRUST = 'cts_admin_trust'
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
