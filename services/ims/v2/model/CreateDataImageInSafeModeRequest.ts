import { CreateDataImageRequestBody } from './CreateDataImageRequestBody';


export class CreateDataImageInSafeModeRequest {
    public body?: CreateDataImageRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateDataImageRequestBody): CreateDataImageInSafeModeRequest {
        this['body'] = body;
        return this;
    }
}