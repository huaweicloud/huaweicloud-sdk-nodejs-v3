import { UpdateSubscriptionUserRequestBody } from './UpdateSubscriptionUserRequestBody';


export class UpdateSubscriptionUserRequest {
    public id?: string;
    public body?: UpdateSubscriptionUserRequestBody;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): UpdateSubscriptionUserRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: UpdateSubscriptionUserRequestBody): UpdateSubscriptionUserRequest {
        this['body'] = body;
        return this;
    }
}