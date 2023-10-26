import { CreateDocWatermarkByAddressRequestBody } from './CreateDocWatermarkByAddressRequestBody';


export class CreateDocWatermarkByAddressRequest {
    public body?: CreateDocWatermarkByAddressRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateDocWatermarkByAddressRequestBody): CreateDocWatermarkByAddressRequest {
        this['body'] = body;
        return this;
    }
}