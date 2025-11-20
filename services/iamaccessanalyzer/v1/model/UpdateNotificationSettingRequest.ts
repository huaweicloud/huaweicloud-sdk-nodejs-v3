import { UpdateNotificationSettingReqBody } from './UpdateNotificationSettingReqBody';


export class UpdateNotificationSettingRequest {
    private 'notification_setting_id'?: string;
    public body?: UpdateNotificationSettingReqBody;
    public constructor(notificationSettingId?: string) { 
        this['notification_setting_id'] = notificationSettingId;
    }
    public withNotificationSettingId(notificationSettingId: string): UpdateNotificationSettingRequest {
        this['notification_setting_id'] = notificationSettingId;
        return this;
    }
    public set notificationSettingId(notificationSettingId: string  | undefined) {
        this['notification_setting_id'] = notificationSettingId;
    }
    public get notificationSettingId(): string | undefined {
        return this['notification_setting_id'];
    }
    public withBody(body: UpdateNotificationSettingReqBody): UpdateNotificationSettingRequest {
        this['body'] = body;
        return this;
    }
}