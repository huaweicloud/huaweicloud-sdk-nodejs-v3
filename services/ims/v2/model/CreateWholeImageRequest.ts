import { CreateWholeImageRequestBody } from './CreateWholeImageRequestBody';


export class CreateWholeImageRequest {
    public body?: CreateWholeImageRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateWholeImageRequestBody): CreateWholeImageRequest {
        this['body'] = body;
        return this;
    }
}