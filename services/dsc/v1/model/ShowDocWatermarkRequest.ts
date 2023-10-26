import { ShowDocWatermarkRequestBody } from './ShowDocWatermarkRequestBody';


export class ShowDocWatermarkRequest {
    public body?: ShowDocWatermarkRequestBody;
    public constructor() { 
    }
    public withBody(body: ShowDocWatermarkRequestBody): ShowDocWatermarkRequest {
        this['body'] = body;
        return this;
    }
}