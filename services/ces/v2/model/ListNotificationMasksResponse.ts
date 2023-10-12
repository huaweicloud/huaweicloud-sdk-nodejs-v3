import { ListNotificationMaskRespNotificationMasks } from './ListNotificationMaskRespNotificationMasks';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNotificationMasksResponse extends SdkResponse {
    private 'notification_masks'?: Array<ListNotificationMaskRespNotificationMasks>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withNotificationMasks(notificationMasks: Array<ListNotificationMaskRespNotificationMasks>): ListNotificationMasksResponse {
        this['notification_masks'] = notificationMasks;
        return this;
    }
    public set notificationMasks(notificationMasks: Array<ListNotificationMaskRespNotificationMasks>  | undefined) {
        this['notification_masks'] = notificationMasks;
    }
    public get notificationMasks(): Array<ListNotificationMaskRespNotificationMasks> | undefined {
        return this['notification_masks'];
    }
    public withCount(count: number): ListNotificationMasksResponse {
        this['count'] = count;
        return this;
    }
}