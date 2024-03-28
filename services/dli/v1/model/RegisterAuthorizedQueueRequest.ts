import { RegisterAuthorizedQueueRequestBody } from './RegisterAuthorizedQueueRequestBody';


export class RegisterAuthorizedQueueRequest {
    public body?: RegisterAuthorizedQueueRequestBody;
    public constructor() { 
    }
    public withBody(body: RegisterAuthorizedQueueRequestBody): RegisterAuthorizedQueueRequest {
        this['body'] = body;
        return this;
    }
}