import { CreateImageRequestBody } from './CreateImageRequestBody';


export class CreateImageInSafeModeRequest {
    public body?: CreateImageRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateImageRequestBody): CreateImageInSafeModeRequest {
        this['body'] = body;
        return this;
    }
}