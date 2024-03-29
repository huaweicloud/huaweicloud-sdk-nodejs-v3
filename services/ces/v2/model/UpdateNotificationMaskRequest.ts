import { UpdateNotificationMasksRequestBody } from './UpdateNotificationMasksRequestBody';


export class UpdateNotificationMaskRequest {
    private 'notification_mask_id'?: string;
    public body?: UpdateNotificationMasksRequestBody;
    public constructor(notificationMaskId?: string) { 
        this['notification_mask_id'] = notificationMaskId;
    }
    public withNotificationMaskId(notificationMaskId: string): UpdateNotificationMaskRequest {
        this['notification_mask_id'] = notificationMaskId;
        return this;
    }
    public set notificationMaskId(notificationMaskId: string  | undefined) {
        this['notification_mask_id'] = notificationMaskId;
    }
    public get notificationMaskId(): string | undefined {
        return this['notification_mask_id'];
    }
    public withBody(body: UpdateNotificationMasksRequestBody): UpdateNotificationMaskRequest {
        this['body'] = body;
        return this;
    }
}