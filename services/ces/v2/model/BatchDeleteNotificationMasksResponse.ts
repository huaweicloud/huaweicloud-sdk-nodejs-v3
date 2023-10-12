
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteNotificationMasksResponse extends SdkResponse {
    private 'notification_mask_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withNotificationMaskIds(notificationMaskIds: Array<string>): BatchDeleteNotificationMasksResponse {
        this['notification_mask_ids'] = notificationMaskIds;
        return this;
    }
    public set notificationMaskIds(notificationMaskIds: Array<string>  | undefined) {
        this['notification_mask_ids'] = notificationMaskIds;
    }
    public get notificationMaskIds(): Array<string> | undefined {
        return this['notification_mask_ids'];
    }
}