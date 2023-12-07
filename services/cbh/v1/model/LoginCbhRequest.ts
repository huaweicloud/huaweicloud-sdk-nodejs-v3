import { LoginCbhRequestBody } from './LoginCbhRequestBody';


export class LoginCbhRequest {
    public body?: LoginCbhRequestBody;
    public constructor() { 
    }
    public withBody(body: LoginCbhRequestBody): LoginCbhRequest {
        this['body'] = body;
        return this;
    }
}