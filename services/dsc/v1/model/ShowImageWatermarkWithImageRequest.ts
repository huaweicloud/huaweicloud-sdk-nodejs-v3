import { ShowImageWatermarkWithImageRequestBody } from './ShowImageWatermarkWithImageRequestBody';


export class ShowImageWatermarkWithImageRequest {
    public body?: ShowImageWatermarkWithImageRequestBody;
    public constructor() { 
    }
    public withBody(body: ShowImageWatermarkWithImageRequestBody): ShowImageWatermarkWithImageRequest {
        this['body'] = body;
        return this;
    }
}