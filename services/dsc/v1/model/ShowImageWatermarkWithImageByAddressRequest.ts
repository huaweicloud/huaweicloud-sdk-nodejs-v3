import { ShowImageWatermarkWithImageByAddressRequestBody } from './ShowImageWatermarkWithImageByAddressRequestBody';


export class ShowImageWatermarkWithImageByAddressRequest {
    public body?: ShowImageWatermarkWithImageByAddressRequestBody;
    public constructor() { 
    }
    public withBody(body: ShowImageWatermarkWithImageByAddressRequestBody): ShowImageWatermarkWithImageByAddressRequest {
        this['body'] = body;
        return this;
    }
}