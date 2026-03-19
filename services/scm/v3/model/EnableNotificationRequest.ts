import { NoticeRequestBody } from './NoticeRequestBody';


export class EnableNotificationRequest {
    public body?: Array<NoticeRequestBody>;
    public constructor() { 
    }
    public withBody(body: Array<NoticeRequestBody>): EnableNotificationRequest {
        this['body'] = body;
        return this;
    }
}