import { Filter } from './Filter';
import { NotificationUsers } from './NotificationUsers';
import { Operations } from './Operations';


export class CreateNotificationRequestBody {
    private 'notification_name'?: string;
    private 'operation_type'?: CreateNotificationRequestBodyOperationTypeEnum | string;
    private 'agency_name'?: CreateNotificationRequestBodyAgencyNameEnum | string;
    public operations?: Array<Operations>;
    private 'notify_user_list'?: Array<NotificationUsers>;
    private 'topic_id'?: string;
    public filter?: Filter;
    public constructor(notificationName?: string, operationType?: string) { 
        this['notification_name'] = notificationName;
        this['operation_type'] = operationType;
    }
    public withNotificationName(notificationName: string): CreateNotificationRequestBody {
        this['notification_name'] = notificationName;
        return this;
    }
    public set notificationName(notificationName: string  | undefined) {
        this['notification_name'] = notificationName;
    }
    public get notificationName(): string | undefined {
        return this['notification_name'];
    }
    public withOperationType(operationType: CreateNotificationRequestBodyOperationTypeEnum | string): CreateNotificationRequestBody {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: CreateNotificationRequestBodyOperationTypeEnum | string  | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType(): CreateNotificationRequestBodyOperationTypeEnum | string | undefined {
        return this['operation_type'];
    }
    public withAgencyName(agencyName: CreateNotificationRequestBodyAgencyNameEnum | string): CreateNotificationRequestBody {
        this['agency_name'] = agencyName;
        return this;
    }
    public set agencyName(agencyName: CreateNotificationRequestBodyAgencyNameEnum | string  | undefined) {
        this['agency_name'] = agencyName;
    }
    public get agencyName(): CreateNotificationRequestBodyAgencyNameEnum | string | undefined {
        return this['agency_name'];
    }
    public withOperations(operations: Array<Operations>): CreateNotificationRequestBody {
        this['operations'] = operations;
        return this;
    }
    public withNotifyUserList(notifyUserList: Array<NotificationUsers>): CreateNotificationRequestBody {
        this['notify_user_list'] = notifyUserList;
        return this;
    }
    public set notifyUserList(notifyUserList: Array<NotificationUsers>  | undefined) {
        this['notify_user_list'] = notifyUserList;
    }
    public get notifyUserList(): Array<NotificationUsers> | undefined {
        return this['notify_user_list'];
    }
    public withTopicId(topicId: string): CreateNotificationRequestBody {
        this['topic_id'] = topicId;
        return this;
    }
    public set topicId(topicId: string  | undefined) {
        this['topic_id'] = topicId;
    }
    public get topicId(): string | undefined {
        return this['topic_id'];
    }
    public withFilter(filter: Filter): CreateNotificationRequestBody {
        this['filter'] = filter;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateNotificationRequestBodyOperationTypeEnum {
    COMPLETE = 'complete',
    CUSTOMIZED = 'customized'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateNotificationRequestBodyAgencyNameEnum {
    CTS_ADMIN_TRUST = 'cts_admin_trust'
}
