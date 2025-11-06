import { NotificationTemplate } from './NotificationTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNotificationTemplatesResponse extends SdkResponse {
    public body?: Array<NotificationTemplate>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<NotificationTemplate>): ListNotificationTemplatesResponse {
        this['body'] = body;
        return this;
    }
}