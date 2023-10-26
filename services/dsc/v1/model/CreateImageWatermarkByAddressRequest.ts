import { CreateImageWatermarkByAddressRequestBody } from './CreateImageWatermarkByAddressRequestBody';


export class CreateImageWatermarkByAddressRequest {
    public body?: CreateImageWatermarkByAddressRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateImageWatermarkByAddressRequestBody): CreateImageWatermarkByAddressRequest {
        this['body'] = body;
        return this;
    }
}