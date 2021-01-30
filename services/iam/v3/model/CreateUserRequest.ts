import { CreateUserRequestBody } from './CreateUserRequestBody';


export class CreateUserRequest {
    public body?: CreateUserRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateUserRequestBody): CreateUserRequest {
        this['body'] = body;
        return this;
    }
}