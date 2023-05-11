import { NotificationsResponseBody } from './NotificationsResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNotificationsResponse extends SdkResponse {
    public notifications?: Array<NotificationsResponseBody>;
    public constructor() { 
        super();
    }
    public withNotifications(notifications: Array<NotificationsResponseBody>): ListNotificationsResponse {
        this['notifications'] = notifications;
        return this;
    }
}