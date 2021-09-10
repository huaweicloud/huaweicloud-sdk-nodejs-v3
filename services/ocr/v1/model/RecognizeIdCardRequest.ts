import { IdCardRequestBody } from './IdCardRequestBody';


export class RecognizeIdCardRequest {
    public body?: IdCardRequestBody;
    public constructor() { 
    }
    public withBody(body: IdCardRequestBody): RecognizeIdCardRequest {
        this['body'] = body;
        return this;
    }
}