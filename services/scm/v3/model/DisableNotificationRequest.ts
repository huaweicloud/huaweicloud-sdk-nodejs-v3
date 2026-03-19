import { NoticeRequestBody } from './NoticeRequestBody';


export class DisableNotificationRequest {
    public body?: Array<NoticeRequestBody>;
    public constructor() { 
    }
    public withBody(body: Array<NoticeRequestBody>): DisableNotificationRequest {
        this['body'] = body;
        return this;
    }
}