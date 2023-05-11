import { UpdateNotificationRequestBody } from './UpdateNotificationRequestBody';


export class UpdateNotificationRequest {
    public body?: UpdateNotificationRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateNotificationRequestBody): UpdateNotificationRequest {
        this['body'] = body;
        return this;
    }
}