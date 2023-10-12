

export class BatchDeleteNotificationMasksRequestBody {
    private 'notification_mask_ids'?: Array<string>;
    public constructor(notificationMaskIds?: Array<string>) { 
        this['notification_mask_ids'] = notificationMaskIds;
    }
    public withNotificationMaskIds(notificationMaskIds: Array<string>): BatchDeleteNotificationMasksRequestBody {
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