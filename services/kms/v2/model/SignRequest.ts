import { SignRequestBody } from './SignRequestBody';


export class SignRequest {
    public body?: SignRequestBody;
    public constructor() { 
    }
    public withBody(body: SignRequestBody): SignRequest {
        this['body'] = body;
        return this;
    }
}