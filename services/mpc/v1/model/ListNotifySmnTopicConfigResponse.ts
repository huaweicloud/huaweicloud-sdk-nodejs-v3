import { Notification } from './Notification';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNotifySmnTopicConfigResponse extends SdkResponse {
    public notifications?: Array<Notification>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withNotifications(notifications: Array<Notification>): ListNotifySmnTopicConfigResponse {
        this['notifications'] = notifications;
        return this;
    }
    public withTotal(total: number): ListNotifySmnTopicConfigResponse {
        this['total'] = total;
        return this;
    }
}