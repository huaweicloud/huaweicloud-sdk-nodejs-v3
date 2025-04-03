import { RegisterClientReqBody } from './RegisterClientReqBody';


export class RegisterClientRequest {
    public body?: RegisterClientReqBody;
    public constructor() { 
    }
    public withBody(body: RegisterClientReqBody): RegisterClientRequest {
        this['body'] = body;
        return this;
    }
}