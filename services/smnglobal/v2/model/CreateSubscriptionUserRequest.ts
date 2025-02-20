import { CreateSubscriptionUserRequestBody } from './CreateSubscriptionUserRequestBody';


export class CreateSubscriptionUserRequest {
    public body?: CreateSubscriptionUserRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateSubscriptionUserRequestBody): CreateSubscriptionUserRequest {
        this['body'] = body;
        return this;
    }
}