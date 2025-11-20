import { NotificationSettingSummary } from './NotificationSettingSummary';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNotificationSettingsResponse extends SdkResponse {
    private 'notification_settings'?: Array<NotificationSettingSummary>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withNotificationSettings(notificationSettings: Array<NotificationSettingSummary>): ListNotificationSettingsResponse {
        this['notification_settings'] = notificationSettings;
        return this;
    }
    public set notificationSettings(notificationSettings: Array<NotificationSettingSummary>  | undefined) {
        this['notification_settings'] = notificationSettings;
    }
    public get notificationSettings(): Array<NotificationSettingSummary> | undefined {
        return this['notification_settings'];
    }
    public withPageInfo(pageInfo: PageInfo): ListNotificationSettingsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}