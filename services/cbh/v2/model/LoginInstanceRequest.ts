import { CommonCbhRequestBody } from './CommonCbhRequestBody';


export class LoginInstanceRequest {
    public body?: CommonCbhRequestBody;
    public constructor() { 
    }
    public withBody(body: CommonCbhRequestBody): LoginInstanceRequest {
        this['body'] = body;
        return this;
    }
}