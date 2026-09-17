import { ShowIamUserRequestBody } from './ShowIamUserRequestBody';


export class ShowIamUserRequest {
    public body?: ShowIamUserRequestBody;
    public constructor() { 
    }
    public withBody(body: ShowIamUserRequestBody): ShowIamUserRequest {
        this['body'] = body;
        return this;
    }
}