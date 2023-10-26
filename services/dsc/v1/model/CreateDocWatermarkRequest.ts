import { CreateDocWatermarkRequestBody } from './CreateDocWatermarkRequestBody';


export class CreateDocWatermarkRequest {
    public body?: CreateDocWatermarkRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateDocWatermarkRequestBody): CreateDocWatermarkRequest {
        this['body'] = body;
        return this;
    }
}