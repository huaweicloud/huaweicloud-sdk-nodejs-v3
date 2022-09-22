import { PostSourceServerBody } from './PostSourceServerBody';


export class RegisterServerRequest {
    public body?: PostSourceServerBody;
    public constructor() { 
    }
    public withBody(body: PostSourceServerBody): RegisterServerRequest {
        this['body'] = body;
        return this;
    }
}