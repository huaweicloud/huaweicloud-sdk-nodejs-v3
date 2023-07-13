import { CreatePublicipRequestBody } from './CreatePublicipRequestBody';


export class CreatePublicipRequest {
    public body?: CreatePublicipRequestBody;
    public constructor() { 
    }
    public withBody(body: CreatePublicipRequestBody): CreatePublicipRequest {
        this['body'] = body;
        return this;
    }
}