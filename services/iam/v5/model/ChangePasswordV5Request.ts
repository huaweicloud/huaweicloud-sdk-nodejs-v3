import { ChangePasswordReqBody } from './ChangePasswordReqBody';


export class ChangePasswordV5Request {
    public body?: ChangePasswordReqBody;
    public constructor() { 
    }
    public withBody(body: ChangePasswordReqBody): ChangePasswordV5Request {
        this['body'] = body;
        return this;
    }
}