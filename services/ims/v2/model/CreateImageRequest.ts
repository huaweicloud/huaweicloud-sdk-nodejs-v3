import { CreateImageRequestBody } from './CreateImageRequestBody';


export class CreateImageRequest {
    public body?: CreateImageRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateImageRequestBody): CreateImageRequest {
        this['body'] = body;
        return this;
    }
}