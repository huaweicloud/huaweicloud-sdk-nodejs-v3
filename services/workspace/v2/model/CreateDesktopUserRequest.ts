import { CreateUserRequest } from './CreateUserRequest';


export class CreateDesktopUserRequest {
    public body?: CreateUserRequest;
    public constructor() { 
    }
    public withBody(body: CreateUserRequest): CreateDesktopUserRequest {
        this['body'] = body;
        return this;
    }
}