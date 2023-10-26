import { CreateImageWatermarkRequestBody } from './CreateImageWatermarkRequestBody';


export class CreateImageWatermarkRequest {
    public body?: CreateImageWatermarkRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateImageWatermarkRequestBody): CreateImageWatermarkRequest {
        this['body'] = body;
        return this;
    }
}