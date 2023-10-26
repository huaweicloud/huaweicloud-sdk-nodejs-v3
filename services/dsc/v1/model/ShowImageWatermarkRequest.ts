import { ShowImageWatermarkRequestBody } from './ShowImageWatermarkRequestBody';


export class ShowImageWatermarkRequest {
    public body?: ShowImageWatermarkRequestBody;
    public constructor() { 
    }
    public withBody(body: ShowImageWatermarkRequestBody): ShowImageWatermarkRequest {
        this['body'] = body;
        return this;
    }
}