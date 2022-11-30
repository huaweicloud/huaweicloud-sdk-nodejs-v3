import { CreatePrivateipRequestBody } from './CreatePrivateipRequestBody';


export class CreatePrivateipRequest {
    public body?: CreatePrivateipRequestBody;
    public constructor() { 
    }
    public withBody(body: CreatePrivateipRequestBody): CreatePrivateipRequest {
        this['body'] = body;
        return this;
    }
}