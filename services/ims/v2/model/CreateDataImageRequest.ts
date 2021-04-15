import { CreateDataImageRequestBody } from './CreateDataImageRequestBody';


export class CreateDataImageRequest {
    public body?: CreateDataImageRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateDataImageRequestBody): CreateDataImageRequest {
        this['body'] = body;
        return this;
    }
}