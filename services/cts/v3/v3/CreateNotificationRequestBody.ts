import { Filter } from './Filter';
import { NotificationUsers } from './NotificationUsers';
import { Operations } from './Operations';


export class CreateNotificationRequestBody {
    private 'notification_name': string | undefined;
    private 'operation_type': CreateNotificationRequestBodyOperationTypeEnum | undefined;
    public operations?: Array<Operations>;
    private 'notify_user_list'?: Array<NotificationUsers> | undefined;
    private 'topic_id'?: string | undefined;
    public filter?: Filter;
    public constructor(notificationName?: any, operationType?: any) { 
        this['notification_name'] = notificationName;
        this['operation_type'] = operationType;
    }
    public withNotificationName(notificationName: string): CreateNotificationRequestBody {
        this['notification_name'] = notificationName;
        return this;
    }
    public set notificationName(notificationName: string | undefined) {
        this['notification_name'] = notificationName;
    }
    public get notificationName() {
        return this['notification_name'];
    }
    public withOperationType(operationType: CreateNotificationRequestBodyOperationTypeEnum): CreateNotificationRequestBody {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: CreateNotificationRequestBodyOperationTypeEnum | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType() {
        return this['operation_type'];
    }
    public withOperations(operations: Array<Operations>): CreateNotificationRequestBody {
        this['operations'] = operations;
        return this;
    }
    public withNotifyUserList(notifyUserList: Array<NotificationUsers>): CreateNotificationRequestBody {
        this['notify_user_list'] = notifyUserList;
        return this;
    }
    public set notifyUserList(notifyUserList: Array<NotificationUsers> | undefined) {
        this['notify_user_list'] = notifyUserList;
    }
    public get notifyUserList() {
        return this['notify_user_list'];
    }
    public withTopicId(topicId: string): CreateNotificationRequestBody {
        this['topic_id'] = topicId;
        return this;
    }
    public set topicId(topicId: string | undefined) {
        this['topic_id'] = topicId;
    }
    public get topicId() {
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
