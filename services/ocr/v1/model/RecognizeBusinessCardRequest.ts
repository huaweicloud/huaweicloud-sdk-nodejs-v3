import { BusinessCardRequestBody } from './BusinessCardRequestBody';


export class RecognizeBusinessCardRequest {
    public body?: BusinessCardRequestBody;
    public constructor() { 
    }
    public withBody(body: BusinessCardRequestBody): RecognizeBusinessCardRequest {
        this['body'] = body;
        return this;
    }
}