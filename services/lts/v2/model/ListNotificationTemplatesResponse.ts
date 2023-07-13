import { NotificationTemplate } from './NotificationTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNotificationTemplatesResponse extends SdkResponse {
    public results?: Array<NotificationTemplate>;
    public constructor() { 
        super();
    }
    public withResults(results: Array<NotificationTemplate>): ListNotificationTemplatesResponse {
        this['results'] = results;
        return this;
    }
}