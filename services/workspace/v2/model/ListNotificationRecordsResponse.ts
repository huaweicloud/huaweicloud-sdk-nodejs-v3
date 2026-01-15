import { NotificationRecordInfo } from './NotificationRecordInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNotificationRecordsResponse extends SdkResponse {
    private 'total_count'?: number;
    private 'notification_records'?: Array<NotificationRecordInfo>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListNotificationRecordsResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withNotificationRecords(notificationRecords: Array<NotificationRecordInfo>): ListNotificationRecordsResponse {
        this['notification_records'] = notificationRecords;
        return this;
    }
    public set notificationRecords(notificationRecords: Array<NotificationRecordInfo>  | undefined) {
        this['notification_records'] = notificationRecords;
    }
    public get notificationRecords(): Array<NotificationRecordInfo> | undefined {
        return this['notification_records'];
    }
}