import { CreateNotificationSettingReqBody } from './CreateNotificationSettingReqBody';


export class CreateNotificationSettingRequest {
    public body?: CreateNotificationSettingReqBody;
    public constructor() { 
    }
    public withBody(body: CreateNotificationSettingReqBody): CreateNotificationSettingRequest {
        this['body'] = body;
        return this;
    }
}