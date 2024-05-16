import { CreateResourceShareReqBody } from './CreateResourceShareReqBody';


export class CreateResourceShareRequest {
    public body?: CreateResourceShareReqBody;
    public constructor() { 
    }
    public withBody(body: CreateResourceShareReqBody): CreateResourceShareRequest {
        this['body'] = body;
        return this;
    }
}