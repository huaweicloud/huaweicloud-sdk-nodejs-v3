import { CreateUserReqBody } from './CreateUserReqBody';


export class CreateUserV5Request {
    public body?: CreateUserReqBody;
    public constructor() { 
    }
    public withBody(body: CreateUserReqBody): CreateUserV5Request {
        this['body'] = body;
        return this;
    }
}