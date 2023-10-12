
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpdateNotificationMasksResponse extends SdkResponse {
    private 'relation_ids'?: Array<string>;
    private 'notification_mask_id'?: string;
    public constructor() { 
        super();
    }
    public withRelationIds(relationIds: Array<string>): BatchUpdateNotificationMasksResponse {
        this['relation_ids'] = relationIds;
        return this;
    }
    public set relationIds(relationIds: Array<string>  | undefined) {
        this['relation_ids'] = relationIds;
    }
    public get relationIds(): Array<string> | undefined {
        return this['relation_ids'];
    }
    public withNotificationMaskId(notificationMaskId: string): BatchUpdateNotificationMasksResponse {
        this['notification_mask_id'] = notificationMaskId;
        return this;
    }
    public set notificationMaskId(notificationMaskId: string  | undefined) {
        this['notification_mask_id'] = notificationMaskId;
    }
    public get notificationMaskId(): string | undefined {
        return this['notification_mask_id'];
    }
}