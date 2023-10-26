import { ShowDocWatermarkByAddressRequestBody } from './ShowDocWatermarkByAddressRequestBody';


export class ShowDocWatermarkByAddressRequest {
    public body?: ShowDocWatermarkByAddressRequestBody;
    public constructor() { 
    }
    public withBody(body: ShowDocWatermarkByAddressRequestBody): ShowDocWatermarkByAddressRequest {
        this['body'] = body;
        return this;
    }
}