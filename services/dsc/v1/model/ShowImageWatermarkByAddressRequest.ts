import { ShowImageWatermarkByAddressRequestBody } from './ShowImageWatermarkByAddressRequestBody';


export class ShowImageWatermarkByAddressRequest {
    public body?: ShowImageWatermarkByAddressRequestBody;
    public constructor() { 
    }
    public withBody(body: ShowImageWatermarkByAddressRequestBody): ShowImageWatermarkByAddressRequest {
        this['body'] = body;
        return this;
    }
}