import { CreateNotificationRequestBody } from './CreateNotificationRequestBody';


export class CreateNotificationRequest {
    public body?: CreateNotificationRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateNotificationRequestBody): CreateNotificationRequest {
        this['body'] = body;
        return this;
    }
}