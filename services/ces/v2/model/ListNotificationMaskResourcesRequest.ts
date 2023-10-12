

export class ListNotificationMaskResourcesRequest {
    private 'notification_mask_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(notificationMaskId?: string) { 
        this['notification_mask_id'] = notificationMaskId;
    }
    public withNotificationMaskId(notificationMaskId: string): ListNotificationMaskResourcesRequest {
        this['notification_mask_id'] = notificationMaskId;
        return this;
    }
    public set notificationMaskId(notificationMaskId: string  | undefined) {
        this['notification_mask_id'] = notificationMaskId;
    }
    public get notificationMaskId(): string | undefined {
        return this['notification_mask_id'];
    }
    public withOffset(offset: number): ListNotificationMaskResourcesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListNotificationMaskResourcesRequest {
        this['limit'] = limit;
        return this;
    }
}